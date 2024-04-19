---
comments: true
date: 2011-09-03T04:39:22Z
excerpt:
  You keep using 'bundle install {gem}'. I do not think it means what you think
  it means.
tags: ["bundler", "ruby", "ruby-gems"]
title: Don't use 'bundle install {gem}'.
url: /2011/09/03/dont-use-bundle-install-gem/
wordpress_id: 571
wordpress_url: https://madebynathan.com/?p=571
---

Maybe you want to update haml to the latest version. You tried to run <code>bundle install haml</code>, but now some really weird stuff is happening. Bundler decided to install all of your gems from scratch into a ./haml folder. Even when you try <code>bundle update haml</code>, the gems are still going into the ./haml folder! What's going on?

<code>bundle install haml</code> is totally different from <code>bundle update haml</code>.

What <code>bundle install haml</code> does:

<ol>
	<li>Installs all of your gems into a 'haml' folder. (creates the folder if it doesn't exist)</li>
	<li>Saves the  'haml' path in .bundle/config, so that it becomes your default gem folder for every bundle command you run in the future.</li>
</ol>

If you made this mistake and want to reset everything back to normal, just run:

```bash
rm -rf {gem} .bundle/config
```

Then, to update your gem, you should run:

```bash
bundle update {gem}
```

```

```
