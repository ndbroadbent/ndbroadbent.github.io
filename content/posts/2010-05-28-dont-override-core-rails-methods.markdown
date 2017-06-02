---
comments: true
date: 2010-05-28T14:55:05Z
tags: ["bugfixes", "rails"]
title: Don&#039;t override core Rails methods
url: /2010/05/28/dont-override-core-rails-methods/
wordpress_id: 90
wordpress_url: https://nathanf77.wordpress.com/?p=90
---

Every programmer makes mistakes.. But every so often though, you make those mistakes that really mess things up. I just made two of them, and feel like a right n00b.

Both mistakes simply involved overwriting ActiveRecord methods.
The first time, I made an 'update' method in my model. And just recently, I realized that I had made a named_scope called 'new' for another model.

NEVER use method names such as 'create', 'update', 'new', or 'destroy' in ANY of your models.. strange things happen!

