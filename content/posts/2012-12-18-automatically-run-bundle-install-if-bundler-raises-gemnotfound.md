---
comments: true
date: 2012-12-18T19:56:01Z
tags: ["ruby", "rails", "bash", "bundler", "rubygems"]
title: Automatically run 'bundle install' when Bundler can't find a gem
url: /2012/12/18/automatically-run-bundle-install-if-bundler-raises-gemnotfound/
---

Every Rails developer has probably experienced the following error:

<div class="highlight"><pre><code class="bash"><span class="sb">Could not find &lt;gem&gt; in any of the sources</span>
<span style="color: #390;">Run `bundle install` to install missing gems.</span>
</code></pre>
</div>

This happens if you or someone else adds a gem to your `Gemfile`, or if a gem version is updated in `Gemfile.lock`,
and you forget to run `bundle install` before running a Rails command.

Here's a simple function that handles this automatically, called `bundle_install_wrapper()`. It first tries to execute the command you pass to it.
However, if Bundler exits with status code `7` (`GemNotFound`), then it will run `bundle install`. Finally, it retries the original command.

```ruby
bundle_install_wrapper() {

# Run command

eval "$@"
  if [ $? = 7 ]; then
    # If command crashes, try a bundle install
    echo -e "\033[1;31m'$@' failed with exit code 7."
echo "This probably means that your system is missing gems defined in your Gemfile."
echo -e "Executing 'bundle install'...\033[0m"
bundle install # If bundle install was successful, try running command again.
if [ $? = 0 ]; then
echo "'bundle install' was successful. Retrying '$@'..."
      eval "$@"
fi
fi
}
```

## Usage

Drop the function in your `~/.bashrc`, and add aliases for rails commands:

```ruby
alias rs="bundle_install_wrapper rails server"
alias rc="bundle_install_wrapper rails console"

# etc.

```

If you want aliases that support any Rails application, you can use something like this:

```ruby

# Run Rails commands on any version

rails_cmd(){

# Rails 3

if [ -e ./script/rails ]; then bundle_install_wrapper rails3_with_editor $@

# Rails <= 2

elif [ -e ./script/$1 ]; then bundle_install_wrapper ./script/$@

# Rails 4

elif [ -e ./config.ru ] && grep -q Rails config.ru; then bundle_install_wrapper rails $@
else echo "== I don't think this is a Rails application!"
fi
}
alias rs="rails_cmd server"
alias rsd="rails_cmd server -u"
alias rc="rails_cmd console"
alias rg="rails_cmd generate"
```

See the [Ruby on Rails section in my .bashrc](https://github.com/ndbroadbent/dotfiles/blob/master/bashrc/ruby_on_rails.sh) if you're interested in more aliases,
and please leave a comment if you have any tips to share.
