---
comments: true
date: 2010-05-21T13:40:27Z
tags: ["git", "guides"]
title: git shortcuts
url: /2010/05/21/git-shortcuts/
wordpress_id: 87
wordpress_url: https://nathanf77.wordpress.com/?p=87
---

It seems that for every single git repository I create,
I just want to be able to run "git push" and "git pull".
"git pull origin master" just gets annoying after a while.
In case I forget how to do this again, this is all it takes (provided you already have an 'origin' remote configured):

{{< highlight bash >}}
git config branch.master.remote origin
git config branch.master.merge refs/heads/master
{{< / highlight >}}

Other useful git shortcut that I literally use everyday
(add them to the bottom of ~/.bashrc and then run $ source ~/.bashrc):

{{< highlight bash >}}
alias gst='git status'
alias gca='git commit -am'
alias gc='git commit -m'
{{< / highlight >}}

So, say I've made changes to lots of files and I want to commit them all. I just type:

{{< highlight bash >}}
$ gca "I made a bunch of changes to lots of files"
{{< / highlight >}}

And if Ive made lots of changes to various files, but only want to commit changes in one file "foo.bar", I type:

{{< highlight bash >}}
$ git add foo.bar
$ gc "I made a change to foo.bar"
{{< / highlight >}}
