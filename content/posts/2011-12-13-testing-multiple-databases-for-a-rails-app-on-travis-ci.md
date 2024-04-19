---
comments: true
date: 2011-12-13T23:12:50Z
excerpt: Testing Multiple Databases for a Rails app on Travis CI
tags: ["ruby", "rails"]
title: Testing Multiple Databases for a Rails app on Travis CI
url: /2011/12/13/testing-multiple-databases-for-a-rails-app-on-travis-ci/
---

I'm currently doing a lot of work on an open source Ruby on Rails project called [Fat Free CRM](https://fatfreecrm.com/).
The code is hosted on [github](https://github.com/fatfreecrm/fat_free_crm), and we are using the amazing continuous integration
service provided by [Travis CI](https://travis-ci.org/#!/fatfreecrm/fat_free_crm).

[Find out more about Travis CI here.](https://about.travis-ci.org/)

We've been working on some powerful features for Fat Free CRM, such as dynamic custom fields,
and we wanted to make sure that they work across all of our supported databases.
So here's how I set up our Travis CI build matrix to test multiple databases,
with some help from the [Travis docs](https://about.travis-ci.org/docs/user/database-setup/):

### .travis.yml

We add the databases to our build matrix by setting ENV variables. Add the following lines to your `.travis.yml`:

```ruby
env:

- DB=mysql
- DB=postgres
- DB=sqlite
```

### Database configuration

We package multiple example database configurations for each of our supported databases, like this:

- `config/database.mysql.yml`
- `config/database.postgres.yml`
- `config/database.sqlite.yml`

We also have a rake task that is a prequisite for the `spec` task, and this sets up the example configuration files for Travis.

It copies the `database.yml` template specified by our `DB` variable, using postgres as the default.

```ruby
FileUtils.cp "config/database.#{ENV['DB'] || 'postgres'}.yml", 'config/database.yml'
```

### Gemfile.ci

I created a new Gemfile for CI. It simply tells bundler to use the gem specified by our `DB` variable,
prevents any other database gems from being loaded, and then loads the 'real' Gemfile.

Here's the contents of `Gemfile.ci`:

```ruby
case ENV['DB']
when "mysql"; gem "mysql2", "0.3.10"
when "sqlite"; gem "sqlite3"
when "postgres"; gem "pg", ">= 0.9.0"
end

def gem(\*args)

# Override 'gem' method to block any other database gems in the 'real' Gemfile

super unless %w(pg sqlite3 mysql2).include?(args.first)
end

# Eval Gemfile

eval(IO.read(File.join(File.dirname(**FILE**), 'Gemfile')), binding)
```

That's all there is to it.

---

This is a slightly unrelated topic, but I had a lot of trouble getting our new `Gemfile.ci` to work properly.
After a serious headache, I figured out that we hadn't updated `config/boot.rb`
to the latest version after our upgrade.
This new `boot.rb` had a very subtle difference, and contained the following line:

```ruby
ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../../Gemfile', **FILE**)
```

instead of:

```ruby
ENV['BUNDLE_GEMFILE'] = gemfile
```

Notice the `||=`, which meant that the `BUNDLE_GEMFILE` variable could actually have an effect when it was set by Travis.

You might have found this post if you are googling for `Could not find multi_json-1.0.3 in any of the sources`, which is
the symptom that I was experiencing (due to an updated gem and an outdated `Gemfile.lock`).
In that case, you may need to update your `config/boot.rb` to [the latest version from Rails](https://github.com/rails/rails/blob/master/railties/lib/rails/generators/rails/app/templates/config/boot.rb).
