---
comments: true
date: 2012-09-19T12:05:39Z
tags: administration GitHub git google-groups mailing-list bash zsh
title: How to start a Google Group for a git project
url: /2012/09/19/how-to-start-a-google-group-for-a-git-project/
---

GitHub is a great way to manage code for an open source project, but it doesn't
provide any way to send a message to all of
your watchers. This can be necessary whenever you make certain changes to your application.
For example, I recently merged a pull request in [Errbit](https://github.com/errbit/errbit) that requires users to
run a Rake task next time they update the code. I had no way of notifying our users,
so I decided to create a Google Group mailing list for these kinds of notifications.

Creating a Google Group is easy (just go to [https://groups.google.com](https://groups.google.com) and follow the prompts),
but the slightly tricky part is sending invites to everyone who's interested in your project.
I decided to start by inviting all the contributors to the Errbit codebase
(there's 73 contributors at the time of writing this post.)

You can get a list of contributor emails by running `git log --format='%ae' | sort -u` from
your git repo. However, Google Groups only lets you invite 10 emails at a time,
so here's a Bash/Zsh script that will print all of your contributor emails as CSV, in groups of 10:

{{< highlight bash >}}
emails=( $(git log --format='%ae' | sort -u) )
total_groups=$(( ${#emails[@]} / 10 ))

for ((i=0; i <= $total_groups; i++)); do
  echo "Group $((i + 1)):"
  echo "-------------------------------------------------------"
  grouped_emails=( ${emails[@]:$(( $i * 10 )):10} )
  printf "%s, " "${grouped_emails[@]}" | cut -d "," -f 1-${#grouped_emails[@]}
  echo
done
{{< / highlight >}}

After pasting this script into your terminal, you can copy and paste each batch of
emails into the **Enter email addresses of people to invite** textarea.
But be careful to write and save your invite message in your text editor, because if you
write it on the page you won't be able to get it back after sending the first batch of invites.

It will still be quite a tedious process since you'll need to enter a captcha for each batch,
but hopefully this script will save you some time.
