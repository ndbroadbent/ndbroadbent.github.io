---
comments: true
date: 2011-02-10T03:40:52Z
tags: guides rails rails-3
title: Rails 3 caching views in development mode
url: /2011/02/10/rails3-is-caching-views-in-development-mode-but-i-told-it-not-to/
wordpress_id: 366
wordpress_url: http://www.f-77.com/?p=366
---

We are working with a Rails 3 port of Fat Free CRM. We have so many plugins modifying classes that we have to set <em>config.cache_classes</em> to <em>true</em>.
But all our view templates seemed to stay cached as well, and I had to restart the server each time I made a change to a template. I couldn't really explain why this was happening, and after a lot of searching I came across <a href="https://rails.lighthouseapp.com/projects/8994/tickets/5847-rails-301-configaction_viewcache_template_loading-is-missing">this Rails LightHouse ticket</a>.

We just needed to add this to the end of our <em>environments/development.rb</em> file to clear the view template cache after every request:

{{< highlight ruby >}}
ActiveSupport.on_load(:after_initialize) do
  ActionController::Base.before_filter do
    ActionController::Base.view_paths.each(&:clear_cache)
  end
end
{{< / highlight >}}
<br/>
Thanks to <a href="https://rails.lighthouseapp.com/users/52307">Eric</a> for this.

