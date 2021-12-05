---
comments: true
date: 2010-08-04T23:28:02Z
tags: ["git", "guides"]
title: How to upgrade git on legacy Ubuntu
url: /2010/08/04/how-to-upgrade-git-on-legacy-ubuntu/
wordpress_id: 113
wordpress_url: http://nathanf77.wordpress.com/?p=113
---

Follow these steps to get git 1.7 + on ubuntu 9.10 or less. (10.04 comes with the latest version)

{{< highlight bash >}}
sudo apt-get install libcurl4-dev  # (for new http[s] support)
cd /tmp
wget http://kernel.org/pub/software/scm/git/git-1.7.2.1.tar.gz
tar -xf git-1.7.2.1.tar.gz
cd git-1.7.2.1/
./configure
make
sudo make install
ln -nfs /usr/bin/git /usr/local/bin/git
{{< / highlight >}}
