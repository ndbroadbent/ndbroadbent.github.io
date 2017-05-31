---
comments: true
date: 2012-02-25T17:00:27Z
tags: ["linux", "bash", "administration", "server"]
title: Scheduling one-off tasks with 'at'
url: /2012/02/25/scheduling-one-off-tasks-with-at-/
---

You might be familiar with the [cron](http://en.wikipedia.org/wiki/Cron) job scheduler,
which is great for repeating tasks.
But when you want to schedule a command to only run once in the future,
the [at](http://linux.die.net/man/1/at) command is what you are looking for.

In my case, I was updating a plugin for our 
[Thoughtworks Mingle](http://www.thoughtworks-studios.com/mingle-agile-project-management) instance,
but the update wasn't hugely important. Many of our staff rely on Mingle for their work,
and restarting it takes it offline for a few minutes.

So I used the `at` command to schedule the restart to happen at midnight, after everyone had gone home:

{{< highlight bash >}}
$ echo "/etc/init.d/mingle restart" | at -m 00:00
job 6 at 2012-02-26 00:00
{{< / highlight >}}


Use `atq` or `at -l` to see the list of pending jobs:

{{< highlight bash >}}
$ atq
6	2012-02-26 00:00 a root
{{< / highlight >}}

Use `at -c <job id>` to view the script that will be run:

{{< highlight bash >}}
$ at -c 6

#!/bin/sh
# atrun uid=0 gid=0
# mail     root 1
umask 22
HOSTNAME=...
<lots of environment variables set here>

/etc/init.d/mingle restart
{{< / highlight >}}

To delete a scheduled task, run `at -d <job id>`:

{{< highlight bash >}}
$ at -d 6
$ atq
(no output)
{{< / highlight >}}
