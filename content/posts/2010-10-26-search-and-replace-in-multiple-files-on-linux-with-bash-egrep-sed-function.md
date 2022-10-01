---
comments: true
date: 2010-10-26T18:05:53Z
tags: ["bash"]
title: Search and replace in multiple files on linux with bash, egrep, sed function
url: /2010/10/26/search-and-replace-in-multiple-files-on-linux-with-bash-egrep-sed-function/
wordpress_id: 184
wordpress_url: http://nathanf77.wordpress.com/?p=184
---

Heres a simple function to add to your shell if you ever want to replace a string in multiple files at once. It ignores everything in .git, otherwise you get 'bad index file sha1 signature' errors.

{{< highlight bash >}}
function gsed () {
if [ -z "$3" ]
then
echo "== Usage: gsed search_string replace_string [path]"
else
egrep --exclude-dir=.git -lRZ "$1" $3 | xargs -0 -l sed -i -e "s/$1/$2/g"
fi
}
{{< / highlight >}}

Add it to the bottom of ~/.bashrc

So you might want to replace all occurences of 'badly_named_method' with 'awesome_method_name', recursively for the current directory? You would type:

{{< highlight bash >}}
gsed "badly_named_ruby_method" "awesome_method_name" .
{{< / highlight >}}

Note: quotes are optional for single words.
