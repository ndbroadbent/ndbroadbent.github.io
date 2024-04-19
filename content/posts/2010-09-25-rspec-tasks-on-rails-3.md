---
comments: true
date: 2010-09-25T19:51:35Z
tags: ["rspec", "rails-3", "bugfixes", "rails"]
title: RSpec tasks on Rails 3
url: /2010/09/25/rspec-tasks-on-rails-3/
wordpress_id: 125
wordpress_url: http://nathanf77.wordpress.com/?p=125
---

## Problem:

```
uninitialized constant RSpec::Rake
```

## Solution:

You are using Rails 3 (and RSpec 2), and trying to define a custom rake task with `Spec::Rake::SpecTask.new`

Instead, do:

```ruby
RSpec::Core::RakeTask.new(:spec) do |t|
...
```

and make sure to change:

```ruby
t.spec_files = FileList['spec/**/*_spec.rb']
```

to

```ruby
t.pattern = 'spec/\*_/_\_spec.rb'
```
