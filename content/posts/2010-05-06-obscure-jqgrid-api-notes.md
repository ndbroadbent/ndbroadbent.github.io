---
comments: true
date: 2010-05-06T15:33:06Z
tags: ["javascript", "rails", "web-design", "jqgrid"]
title: obscure jqGrid API notes
url: /2010/05/06/obscure-jqgrid-api-notes/
wordpress_id: 61
wordpress_url: http://nathanf77.wordpress.com/?p=61
---

If you are using an older version of jqGrid because it comes nicely wrapped up in the
<a href="http://www.2dconcept.com/jquery-grid-rails-plugin">jquery-grid-rails-plugin</a>,
keep in mind that all the <a href="http://trirand.com/blog/jqgrid/jqgrid.html">demo code</a>
is written with the new API introduced in version 3.6.
Fortunately, most of the demo code can still be reused with our version of jqGrid (3.5).
Just get rid of any "jqGrid(' **\*\*** ')" function wrappers, and everything should work fine.
(I find this easier to do than rewriting the rails plugin for the new version)

For example:

{{< highlight javascript >}}
var ids = jQuery("#rowed2").jqGrid('getDataIDs');
{{< / highlight >}}

becomes:

{{< highlight javascript >}}
var ids = jQuery("#rowed2").getDataIDs();
{{< / highlight >}}
