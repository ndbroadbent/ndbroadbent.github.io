---
comments: true
date: 2011-03-02T05:43:35Z
tags: ["guides", "rails", "rails-3", "capistrano"]
title: Capistrano task - show deployed revisions & diffs
url: /2011/03/02/capistrano-task-show-deployed-revisions-diffs/
wordpress_id: 380
wordpress_url: http://www.f-77.com/?p=380
---

Capistrano is a great tool, and I couldn't imagine running a project without it.
I always wanted a quick way to know exactly what was running on each of our servers, and needed to know what would would change when I ran 'cap deploy'.

"cap deploy:pending" and "cap deploy:pending:diff" already solve this problem a little bit, but I found them to be too verbose. Also, they don't work so well as part of an automated deploy process since they can require user interaction.

If you run this 'cap revisions' task, it will show the currently deployed revision on the server, and give you a diff of the commits between the server and the master branch of your git repo. When its chained after the 'deploy' task, it will show a list of the new commits that have been pushed to the server.

Here it is:

{{< highlight ruby >}}
desc "Show currently deployed revision on server."
task :revisions, :roles => :app do
  current, previous, latest = current_revision[0,7], previous_revision[0,7], real_revision[0,7]
  puts "\n" << "-"*63
  puts "===== Master Revision: \033[1;33m#{latest}\033[0m\n\n"
  puts "===== [ \033[1;36m#{application.capitalize} - #{stage.capitalize}\033[0m ]"
  puts "=== Deployed Revision: \033[1;32m#{current}\033[0m"
  puts "=== Previous Revision: \033[1;32m#{previous}\033[0m\n\n"

  # If deployed and master are the same, show the difference between the last 2 deployments.
  base_label, new_label, base_rev, new_rev = latest != current ? \
       ["deployed", "master", current, latest] : \
       ["previous", "deployed", previous, current]

  # Show difference between master and deployed revisions.
  if (diff = `git log #{base_rev}..#{new_rev} --oneline`) != ""
    # Colorize refs
    diff.gsub!(/^([a-f0-9]+) /, "\033[1;32m\\1\033[0m - ")
    diff = "    " << diff.gsub("\n", "\n    ") << "\n"
    # Indent commit messages nicely, max 80 chars per line, line has to end with space.
    diff = diff.split("\n").map{|l|l.scan(/.{1,120}/).join("\n"<<" "*14).gsub(/([^ ]*)\n {14}/m,"\n"<<" "*14<<"\\1")}.join("\n")
    puts "=== Difference between #{base_label} revision and #{new_label} revision:\n\n"
    puts diff
  end
end

after "deploy", "revisions"
{{< / highlight >}}

I spent a while getting the output nicely colorized and indented. Everything is tested with ruby 1.9.2, but let me know if you have problems with 1.8.7.

Also, be careful <strong>not</strong> to chain this task <strong>before</strong> 'deploy', because the 'current_revision' method caches the path and messes up bundler. (lesson learnt the hard way..)

