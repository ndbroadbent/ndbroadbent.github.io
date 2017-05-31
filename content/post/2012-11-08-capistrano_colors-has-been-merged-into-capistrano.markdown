---
comments: true
date: 2012-11-08T12:55:17Z
tags: rails ruby linux capistrano server administration
title: capistrano_colors has been merged into capistrano
url: /2012/11/08/capistrano_colors-has-been-merged-into-capistrano/
---

`capistrano_colors` has been [merged](https://github.com/capistrano/capistrano/pull/283) into `capistrano`. If you update `capistrano` to version `2.13.5`, you will no longer need to include `capistrano_colors` in your `Gemfile`.<br/>Don't forget to also remove `require 'capistrano_colors'` from `config/deploy.rb`.

If you've been using `capistrano` without the `capistrano_colors` gem, well, you've been missing out! Your logs will now be nicely formatted and colored by default, like this:

![Capistrano logs with colors and formatting](/images/posts/2012/11/cap_colors-resized-post.png)

However, if you happen to be a big fan of black & white logs, you can just add `disable_log_formatters` to `config/deploy.rb`. See the [Formatting Logs wiki page](https://github.com/capistrano/capistrano/wiki/Formatting-Logs) for more information about customizing the colors and styles.

Thanks to [@stjernstrom](https://github.com/stjernstrom) for creating the `capistrano_colors` gem, and to [@carsomyr](https://github.com/carsomyr) for merging my pull request!
