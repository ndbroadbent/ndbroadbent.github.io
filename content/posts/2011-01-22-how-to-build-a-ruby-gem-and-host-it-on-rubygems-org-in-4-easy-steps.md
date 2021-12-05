---
comments: true
date: 2011-01-22T06:39:39Z
tags: ["guides", "ruby", "ruby-gems", "rails", "bundler"]
title: Build a ruby gem and host it on rubygems.org in 4 easy steps
url: /2011/01/22/how-to-build-a-ruby-gem-and-host-it-on-rubygems-org-in-4-easy-steps/
wordpress_id: 335
wordpress_url: http://www.f-77.com/?p=335
---

Building a ruby gem these days is really, really easy. Bundler provides a great framework generator to get you started. Bundler also lets you install a gem straight from a github repository, so now is the time to say goodbye to your git submodules and start packaging your code into gems.

<ol>
	<li><a href="https://rubygems.org/users/new">Sign up for a rubygems.org account</a></li>
	<li>$ bundle gem <em>shiny_new_gem</em>
(This creates the framework for your gem)</li>
	<li>Edit '<em>shiny_new_gem</em>.gemspec', and add your code in your gem's lib folder.
(When the gem is required, whatever is in 'lib/<em>shiny_new_gem</em>.rb' will be executed.)</li>
	<li>$ rake build               # Build the gem
$ gem push pkg/<em>shiny_new_gem</em>-0.0.1.gem        # Push the gem up to rubygems.org  (you will be asked for your email and password)</li>
</ol>
Done! Now any rails developer can add <strong>gem "shiny_new_gem"</strong> to their Gemfile, and use your creation. Pretty soon you'll be famous! You'll be hired by important people! You'll buy a boat!

Go build your gems!
