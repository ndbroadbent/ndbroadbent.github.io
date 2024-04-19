---
comments: true
date: 2010-10-19T20:58:38Z
tags: ["wordpress"]
title: How to preserve indentation in wordpress [sourcecode] tags
url: /2010/10/19/how-to-keep-indentation-in-wordpress-sourcecode-tags/
wordpress_id: 150
wordpress_url: http://nathanf77.wordpress.com/?p=150
---

Dont use the visual editor. Copy the code into your 'HTML' view and it will preserve indentation. Copy it into 'Visual' view and your code will be all left-aligned...

Examples:

<strong>Code pasted in 'Visual' View</strong>

```html
<indent>
  <indent>
    <indent> </indent>
  </indent>
</indent>
```

<strong>Code pasted in 'HTML' View</strong>

```html
<indent>
  <indent>
    <indent> </indent>
  </indent>
</indent>
```

YMMV, but this is what works for me.
