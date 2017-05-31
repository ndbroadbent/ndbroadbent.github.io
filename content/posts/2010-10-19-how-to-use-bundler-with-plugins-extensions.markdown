---
comments: true
date: 2010-10-19T20:37:16Z
tags: ["guides", "rails", "bundler", "plugins"]
title: How to use bundler with multiple Gemfiles in plugins / extensions
url: /2010/10/19/how-to-use-bundler-with-plugins-extensions/
wordpress_id: 139
wordpress_url: http://nathanf77.wordpress.com/?p=139
---

Bundler makes it very easy to point to a gem folder on your system, and I definitely recommend this approach a lot more. The plugin can be a gem that we can just require, and it can specify its own dependencies in its .gemspec file.

But if you really don't want your plugin to be a gem, for whatever reason, then read on...

If we are developing a Spree extension, or a Retrospectiva extension, or a Fat Free CRM plugin, we might sometimes need a way to require the gems in multiple Gemfiles, but Bundler doesn't cater for this. The best solution I came up with is this:
<ol>
	<li>Add a <strong>Gemfile</strong> file to the root of your plugin or extension, and specify the gems you need in the normal way.</li>
	<li>Add the following code to the bottom of your root Gemfile (in your main Rails app):</li>
</ol>

{{< highlight ruby >}}
# Install gems from each plugin
Dir.glob(File.join(File.dirname(__FILE__), 'vendor', 'plugins', '**', "Gemfile")) do |gemfile|
    eval(IO.read(gemfile), binding)
end
{{< / highlight >}}

This will find and evaluate the Gemfiles from each of your plugins/extensions, as if you were modifying your base Gemfile.

