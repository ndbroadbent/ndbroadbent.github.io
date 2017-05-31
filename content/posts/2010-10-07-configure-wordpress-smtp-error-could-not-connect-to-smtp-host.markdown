---
comments: true
date: 2010-10-07T18:23:30Z
tags: ["bugfixes", "wordpress"]
title: 'Configure SMTP - SMTP Error: Could not connect to SMTP host.'
url: /2010/10/07/configure-wordpress-smtp-error-could-not-connect-to-smtp-host/
wordpress_id: 249
wordpress_url: http://www.f-77.com/?p=249
---

If you are trying to configure your wordpress installation to
send email from your gmail account: <ol> <li>Install
the 'Configure SMTP' plugin, and check the 'Send e-mail via
GMail?' box.</li> <li>Send a test email to make sure
everything is working.</li> </ol> You might get the
error message "SMTP Error: Could not connect to SMTP host."
<ul> <li>You just need to open port 465 on your
firewall. You might need to ask your hosting provider / system administrator to do
this for you.</li> <li> If it still doesn't work, you
might need to double-check your gmail password..</li>
</ul>

