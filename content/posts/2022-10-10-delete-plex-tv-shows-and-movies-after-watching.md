---
categories: []
date: 2022-10-10T00:36:15Z
tags: ["plex", "debian"]
title: "Delete Plex TV Shows and Movies After Watching"
---

[`Plex-Cleaner`](https://github.com/ndbroadbent/Plex-Cleaner) is a Python script that can clean up your Plex directory by deleting movies and TV shows after you've watched them. This will stop your disk from filling up with lots of old media files over time. You can run this script on your server (or Raspberry Pi, or wherever you run Plex Media Server.)

I like to put things in the `/opt` directory on my servers.

- Run `git clone https://github.com/ndbroadbent/Plex-Cleaner.git /opt`
- Run `python3 PlexCleaner.py --dump Cleaner.conf` to create a new configuration file
- Configure an authentication token in `Cleaner.conf`, under the `"Token"` key.

  - [Here's how to get an authentication token.](https://support.plex.tv/articles/204059436-finding-an-authentication-token-x-plex-token/)

- Call `python3 PlexCleaner.py` to test it out.

The script will run in test mode and won't delete anything if your `Cleaner.conf` contains `"test": true`, or if you call `python3 PlexCleaner.py --test`.

- After everything looks good in the logs, set `"test": false` in `Cleaner.conf`.

You'll probably want to run this script regularly as a cron job. Run `crontab -e` to edit your crontab, then add the following line to run the script every day at 4am:

    0 4 * * * /usr/bin/python3 /opt/Plex-Cleaner/PlexCleaner.py

<br/>

---

I always like to set up monitoring for any scheduled scripts so that I get a notification ~~if~~&nbsp;when they stop working. [healthchecks.io](https://healthchecks.io/) is my favorite monitoring tool and they have a generous free tier. _(No affiliation, they're just an awesome service.)_

To set up monitoring with healthchecks.io, you can call the `run_plex_cleaner.sh` script from [my fork](https://github.com/ndbroadbent/Plex-Cleaner). This script will ping [healthchecks.io](https://healthchecks.io/) on success or failure. [healthchecks.io](https://healthchecks.io/) will also send you a notification if it doesn't receive any ping at the expected time (e.g. if your server has been turned off.)

- Sign up for a free [healthchecks.io](https://healthchecks.io/) account.
- Create a new check. Choose the "Cron" schedule and enter your cron expression, e.g. `0 4 * * *`.
- Make sure you also set the correct Time Zone in the options.
- Save the healthchecks.io check ID to a `healthchecksio_id` file in the `Plex-Cleaner` directory
- Set the log file option in `Cleaner.conf` so that it writes logs to a file:

```
"LogFile": "/opt/Plex-Cleaner/plexcleaner.log",
```

- Set up this cron job entry (instead of the one above):

```
0 4 * * * /opt/Plex-Cleaner/run_plex_cleaner.sh
```

<br/>

Now you'll get an email alert whenever something goes wrong:

- The script exits with an error
- The `plexcleaner.log` log file contains any `ERROR` entries
- The script doesn't run at all
