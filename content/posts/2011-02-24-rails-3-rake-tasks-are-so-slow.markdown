---
comments: true
date: 2011-02-24T05:02:15Z
tags: ["guides", "rails", "rails-3"]
title: Rails 3 Rake tasks can take too long to load
url: /2011/02/24/rails-3-rake-tasks-are-so-slow/
wordpress_id: 373
wordpress_url: http://www.f-77.com/?p=373
---

When you run a rake task for a Rails 3 project, it has to load the entire environment since gems can include their own rake tasks. I started to get annoyed by this, because every capistrano deployment would load up rails on my environment just to notify hoptoad.

If you have a very simple rake task that is called very often, you might want to add some work-around code to check for it in the very beginning of your Rakefile. You might even want to bypass rake entirely, and put the code in a file in ./scripts.

Here is an example for way faster hoptoad notifications (this cut our deploy time in half):

{{< highlight ruby >}}
# Speed up hoptoad:deploy by not loading rails environment
if ARGV[0] == "hoptoad:deploy"
  require 'active_support/core_ext/string'
  require 'hoptoad_notifier'
  require File.join(File.dirname(__FILE__), 'config', 'initializers', 'hoptoad')
  require 'hoptoad_tasks'
  HoptoadTasks.deploy(:rails_env      => ENV['TO'],
                      :scm_revision   => ENV['REVISION'],
                      :scm_repository => ENV['REPO'],
                      :local_username => ENV['USER'],
                      :api_key        => ENV['API_KEY'])
  exit
end
{{< / highlight >}}

There are other ways to speed up rake, such as <a href="https://github.com/outoftime/rake_server">Rake Server</a> (which forks a Rails server process each time you invoke a rake task).

But sometimes quick hacks just work best.

