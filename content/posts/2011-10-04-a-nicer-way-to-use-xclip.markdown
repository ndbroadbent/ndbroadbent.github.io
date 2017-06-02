---
comments: true
date: 2011-10-04T16:45:42Z
excerpt: A better way to use xclip
tags: ["ubuntu", "linux", "guides", "bash"]
title: A better way to use xclip (clipboard from the command line)
url: /2011/10/04/a-nicer-way-to-use-xclip/
---

Sometimes you just want to copy something from your terminal and paste it somewhere else.
You might have heard of a Linux program called <code>xclip</code>, which provides a command line
interface to X selections.
However, <code>xclip</code>'s default selection isn't the clipboard,
and typing <code>xclip -selection c -i ~/.ssh/id_rsa.pub<file></code> is just a bit tedious.

So here's a wrapper function that makes it less of a hassle
to integrate the clipboard with the command line.

* It handles input via pipe or parameters.
* It automatically uses the contents of a file if you pass it a valid filename.
* It prints an excerpt of what has been copied, truncated to 80 characters.

### Examples

* Pipe anything to the clipboard

{{< highlight bash >}}
$ tail -n 100 /var/log/apache2/error.log | cb
# => Copied to clipboard: [Sun Oct 02 08:02:08 2011] [notice] Apache/2.2.17 (Ubuntu) configured -- resumin...
{{< / highlight >}}

* Copy the contents of a file to the clipboard

{{< highlight bash >}}
$ cbf ~/.ssh/id_rsa.pub
# => Copied to clipboard: ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAnwaNIuOhZzUeR6/xEEudXt3zEh91dawhkkKx8p/+4Bw9...
{{< / highlight >}}

* Type straight into the clipboard

{{< highlight bash >}}
$ cb This is some unquoted text.
# => Copied to clipboard: This is some unquoted text.
{{< / highlight >}}


No options, no <code>man</code> pages.

It also comes with a handy <code>cb_ssh</code> alias that copies your SSH public key to the clipboard,
for when you are setting up your new [BitBucket account](https://bitbucket.org)
with [unlimited, free private git repositories](https://blog.bitbucket.org/2011/10/03/bitbucket-now-rocks-git/)!
I'm not affiliated with Atlassian, I just think they're awesome.

So if you think this looks handy, you can add the following to your <code>~/.bashrc</code>:

{{< highlight bash >}}
# A shortcut function that simplifies usage of xclip.
# - Accepts input from either stdin (pipe), or params.
# ------------------------------------------------
cb() {
  local _scs_col="\e[0;32m"; local _wrn_col='\e[1;31m'; local _trn_col='\e[0;33m'
  # Check that xclip is installed.
  if ! type xclip > /dev/null 2>&1; then
    echo -e "$_wrn_col""You must have the 'xclip' program installed.\e[0m"
  # Check user is not root (root doesn't have access to user xorg server)
  elif [[ "$USER" == "root" ]]; then
    echo -e "$_wrn_col""Must be regular user (not root) to copy a file to the clipboard.\e[0m"
  else
    # If no tty, data should be available on stdin
    if ! [[ "$( tty )" == /dev/* ]]; then
      input="$(< /dev/stdin)"
    # Else, fetch input from params
    else
      input="$*"
    fi
    if [ -z "$input" ]; then  # If no input, print usage message.
      echo "Copies a string to the clipboard."
      echo "Usage: cb <string>"
      echo "       echo <string> | cb"
    else
      # Copy input to clipboard
      echo -n "$input" | xclip -selection c
      # Truncate text for status
      if [ ${#input} -gt 80 ]; then input="$(echo $input | cut -c1-80)$_trn_col...\e[0m"; fi
      # Print status.
      echo -e "$_scs_col""Copied to clipboard:\e[0m $input"
    fi
  fi
}
# Aliases / functions leveraging the cb() function
# ------------------------------------------------
# Copy contents of a file
function cbf() { cat "$1" | cb; }
# Copy SSH public key
alias cbssh="cbf ~/.ssh/id_rsa.pub"
# Copy current working directory
alias cbwd="pwd | cb"
# Copy most recent command in bash history
alias cbhs="cat $HISTFILE | tail -n 1 | cb"
{{< / highlight >}}

