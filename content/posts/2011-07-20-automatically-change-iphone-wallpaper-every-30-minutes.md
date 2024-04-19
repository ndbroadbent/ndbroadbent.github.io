---
comments: true
date: 2011-07-20T16:27:10Z
tags: ["scripts", "projects", "bash", "iphone", "jailbreak"]
title: Automatically change iPhone wallpaper every 30 minutes
url: /2011/07/20/automatically-change-iphone-wallpaper-every-30-minutes/
wordpress_id: 526
wordpress_url: https://madebynathan.com/?p=526
---

<b>NOTE: This is only for jailbroken iPhones.</b>

I love finding awesome wallpapers on <a href="https://www.reddit.com">reddit</a>. My Ubuntu desktop cycles through my wallpaper collection with a program called <a href="https://help.ubuntu.com/community/Cortina">Cortina</a>, and I wanted my iPhone to do the same.

So I wrote a very simple script and a launchd plist that runs the script every 30 minutes. If you want to set this up for your jailbroken iPhone, all you need is SSH and a collection of images.

Save your wallpapers to <em>/var/mobile/Media/Wallpapers</em> (or wherever you like), then ssh the following script to your iPhone and run it. (It will need to be executable: chmod +x).

```bash
#!/bin/bash

# This script sets up your iPhone to change the lock-screen wallpaper every 30 minutes.

wallpaper_dir="/var/mobile/Media/Wallpapers"

# Install the wallpaper changing script

cat > /usr/bin/ChangeWallpaper <<EOF
#!/bin/bash

# Overwrite the LockBackground image with a random image from the wallpaper directory.

files=($wallpaper_dir/\*)
cp -f \${files[RANDOM % \${#files[@]}]} /private/var/mobile/Library/SpringBoard/LockBackground.jpg
EOF
chmod +x /usr/bin/ChangeWallpaper

# Install the launchd task to run the script every 30 minutes

cat > /Library/LaunchDaemons/com.ndb.changewallpaper.plist <<EOF

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>Label</key>
<string>com.ndb.wallpaperchanger</string>
<key>OnDemand</key>
<true/>
<key>RunAtLoad</key>
<false/>
<key>ProgramArguments</key>
<array>
<string>/usr/bin/ChangeWallpaper</string>
</array>
<key>UserName</key>
<string>mobile</string>
<key>StartCalendarInterval</key>
<array>
<dict>
<key>Minute</key>
<integer>0</integer>
</dict>
<dict>
<key>Minute</key>
<integer>30</integer>
</dict>
</array>
</dict>
</plist>
EOF

# Load the scheduled task

launchctl load /Library/LaunchDaemons/com.ndb.changewallpaper.plist
```

Enjoy!

```

```
