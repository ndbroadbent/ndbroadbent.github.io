---
comments: true
date: 2011-08-16T08:47:38Z
tags: bash scripts
title: Bash Color Index
url: /2011/08/16/bash-color-index/
wordpress_id: 552
wordpress_url: http://madebynathan.com/?p=552
---

Sometimes it's nice to add color output to your bash scripts. Here's a small 'color index' reference script for your .bashrc, for when you want to add a bit of color to your scripts.

Save the following script somewhere in your PATH (e.g. `/bin/color_index`), <br/>and make it executable. (`chmod +x /bin/color_index`)

{{< highlight bash >}}
#!/bin/bash
# Bash Colors Index
# Shows an index of all available bash colors
# ------------------------------------------------
echo -e "\n              Usage: \\\e[*;**(;**)m"
echo -e   "            Default: \\\e[0m"
blank_line="\e[0m\n     \e[0;30;40m$(printf "%41s")\e[0m"
echo -e "$blank_line" # Top border
for style in 2 0 1 4 9; do
  echo -en "     \e[0;30;40m "
  # Display black fg on white bg
  echo -en "\e[${style};30;47m${style};30\e[0;30;40m "
  for foreground in $(seq 31 37); do
      ctrl="\e[${style};${foreground};40m"
      echo -en "${ctrl}"
      echo -en "${style};${foreground}\e[0;30;40m "
  done
  echo -e "$blank_line" # Separators
done
echo -en "     \e[0;30;40m "
# Background colors
echo -en "\e[0;37;40m*;40\e[0;30;40m \e[0m" # Display white fg on black bg
for background in $(seq 41 47); do
    ctrl="\e[0;30;${background}m"
    echo -en "${ctrl}"
    echo -en "*;${background}\e[0;30;40m "
done
echo -e "$blank_line" "\n" # Bottom border
{{< / highlight >}}

Running 'color_index' will display something like this:

<img src="/images/posts/2011/08/color_index-resized-post.png" alt="color_index()" />

