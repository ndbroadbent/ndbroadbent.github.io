---
comments: true
date: 2012-01-14T01:21:13Z
excerpt: Travis CI Status in Shell Prompt
tags: ["ruby", "github", "travis-ci", "bash", "prompt"]
title: Travis CI Status in Shell Prompt
url: /2012/01/14/travis-ci-status-in-shell-prompt/
---

### Update:

I've updated the build status checking script, because updating all branches was taking too long (over 20 minutes.)
Now it performs frequent updates for the current branch, and only periodic updates for all branches.

----------------

[Travis CI](https://travis-ci.org/) is a distributed [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) service for the open source community, and it can be used with any of your public projects on [GitHub](https://github.com/). You've probably seen some 'build status' badges like this:

<img src="https://secure.travis-ci.org/travis-ci/travis-ci.png" alt="Travis CI build status">

Wouldn't it be cool if you could see that build status in your shell prompt whenever you are working on a project?

Here's what my shell prompt looks like now:

<img src="/images/posts/2012/01/travis_ci_prompt.png" alt="Travis CI status in prompt" />

This shows the build status for the current branch.

----------------

You will need to cache the build status, since looking it up takes a few seconds.

You should use my fork of [mislav's](https://github.com/mislav) `travis-ci` script, which can check the build status of a project. Make sure `~/bin` is in your `PATH`, and if you are using RVM, make sure you are using your default ruby.

Run the following to install it:

{{< highlight bash >}}
mkdir -p ~/bin/
curl -sL https://raw.github.com/gist/1708408/travis.rb > ~/bin/travis-ci \
  && chmod +x ~/bin/travis-ci

gem install hub | tail -2
ruby -e 'require "json"' 2>/dev/null || gem install json
{{< / highlight >}}


Next, we need to update the cached status.
The following code is included as part of my [SCM Breeze project](https://madebynathan.com/2011/10/18/git-shortcuts-like-youve-never-seen-before/), but feel free to save the `update_travis_ci_status` script <a href="#update_travis_ci_status">at the bottom of this post [1]</a> to `/usr/bin/update_travis_ci_status`.

We will also need a way to run this update task every few minutes, across all of our local git repos.
We only want to frequently update the status for the currently checked out branch, and periodically update the status for all branches.

The [SCM Breeze project](https://madebynathan.com/2011/10/18/git-shortcuts-like-youve-never-seen-before/) also maintains an index of your git repositories, which gives you the ability to run batch commands via the `git_index` function.
So the build status update can be easily set up as a cron task:

{{< highlight text >}}
*/5 * * * * /bin/bash -c '. $HOME/.bashrc && git_index --rebuild && git_index --batch-cmd update_travis_ci_status'
*/45 * * * * /bin/bash -c '. $HOME/.bashrc && git_index --rebuild && export UPDATE_ALL_BRANCHES=true && git_index --batch-cmd update_travis_ci_status'
{{< / highlight >}}

Alternatively, you could save the following script to `/usr/bin/update_all_travis_ci_statuses`.

{{< highlight bash >}}
#!/bin/bash
# (Replace `$HOME/code` with the location of your projects)
for f in find "$HOME/code" -maxdepth 4 -name .travis.yml; do
  (builtin cd "$(dirname $f)" && update_travis_ci_status)
done
{{< / highlight >}}

... and use the following cron task:

{{< highlight text >}}
*/5 * * * * /bin/bash -c '. $HOME/.bashrc && /usr/bin/update_all_travis_ci_statuses'
*/45 * * * * /bin/bash -c '. $HOME/.bashrc && export UPDATE_ALL_BRANCHES=true && /usr/bin/update_all_travis_ci_statuses'
{{< / highlight >}}

(you need to source your `.bashrc` if your default ruby comes from RVM)


Finally, you need a way to display the cached status in your prompt.

Here are the functions I use to return a colored pass / fail / running symbol:

{{< highlight bash >}}
# Returns the Travis CI status for a github project
parse_travis_status() {
  local branch="$1"
  if [ -z "$branch" ]; then branch="master"; fi

  local stat_file=$(find_in_cwd_or_parent ".travis_status~")
  if [ -e "$stat_file" ]; then
    case "$(grep -m 1 "^$branch " "$stat_file")" in
    *passed)  echo "\[\e[01;32m\]✔ ";; # green
    *failed)  echo "\[\e[01;31m\]✘ ";; # red
    *running) echo "\[\e[01;33m\]⁇ ";; # yellow
    esac
  fi
}

# Test whether file exists in current or parent directories
find_in_cwd_or_parent() {
  local slashes=${PWD//[^\/]/}; local directory=$PWD;
  for (( n=${#slashes}; n>0; --n )); do
    test -e $directory/$1 && echo "$directory/$1" && return 0
    directory=$directory/..
  done
  return 1
}
{{< / highlight >}}

(it also works if you are in a project's sub-directory.)

Finally, add `$(parse_travis_status "$current_branch")` somewhere in your `$PS1`. You should set the `$current_branch` variable to the current git branch, but it defaults to the `master` branch if you leave it blank.

You may like to have a look at the [prompt section of my dotfiles](https://github.com/ndbroadbent/dotfiles/blob/master/bashrc/prompt.sh), to see how I do it.


Enjoy! Please let me know if you have any questions, or need some help.


----------------

<a name="update_travis_ci_status">[1]</a> `update_travis_ci_status` script:

{{< highlight bash >}}
#!/bin/bash
if [ -e ".travis.yml" ]; then
  if type ruby > /dev/null 2>&1 && type travis-ci > /dev/null 2>&1; then
    local stat_file=".travis_status~"
    local tmp_stat_file="$stat_file"".tmp"

    # Either update all branches, or only current branch
    if [ "$UPDATE_ALL_BRANCHES" = "true" ]; then
      local all_branches=$(\git branch -a)
      # All branches on origin remote that have local copies
      local branches=$(comm -12 <(echo "$all_branches" | \
                                  sed "s/ *remotes\/origin\///;tm;d;:m;/^HEAD/d;" | sort) \
                                <(echo "$all_branches" | \
                                  sed "/ *remotes\//d;s/^[\* ]*//" | sort))
      # Create a new, blank temp file
      echo -n > "$tmp_stat_file"
    else
      # Only current branch
      local branches="$(\git branch 2> /dev/null | sed "s/^\* \([^ ]*\)/\1/;tm;d;:m")"
      # Copy current file to temp file
      touch "$stat_file"
      cp -f "$stat_file" "$tmp_stat_file"
    fi

    for branch in $branches; do
      local travis_output=$(travis-ci "$branch" 2>&1)
      local status=""
      case "$travis_output" in
      *built\ OK*)    status="passed";;
      *failed*)       status="failed";;
      *in\ progress*) status="running";;
      esac

      # If branch has a build status
      if [ -n "$status" ]; then
        if grep -q "^$branch" "$tmp_stat_file"; then
          # Replace branch's build status
          sed -e "s/^$branch .*/$branch $status/" -i "$tmp_stat_file"
        else
          # Append new line for branch
          echo "$branch $status" >> "$tmp_stat_file"
        fi
      fi
    done

    # Replace current stat file with finished update
    mv -f "$tmp_stat_file" "$stat_file"
    # Ignore status file from git repo
    if ! ([ -e .git/info/exclude ] && grep -q "$stat_file" .git/info/exclude); then
      echo "$stat_file" >> .git/info/exclude
    fi
  fi
fi
{{< / highlight >}}
