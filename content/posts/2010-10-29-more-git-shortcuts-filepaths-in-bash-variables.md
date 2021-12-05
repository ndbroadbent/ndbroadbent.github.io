---
comments: true
date: 2010-10-29T22:31:35Z
tags: ["git", "guides"]
title: Make 'git status' put filepaths into numbered variables
url: /2010/10/29/more-git-shortcuts-filepaths-in-bash-variables/
wordpress_id: 192
wordpress_url: http://nathanf77.wordpress.com/?p=192
---

I like my shortcuts for git (ie. 'gst' for 'git status', 'gca' for 'git commit -a -m', etc.)
But I wanted more, so I thought it would be nice if I could somehow create 'shortcuts' to the filepaths of modified files whenever I run 'git status'.
I created a function to export the paths of each modified file into numbered environment variables, and it has really sped up my workflow.

You will need to configure git if you want to have colorized output:
{{< highlight bash >}}
git config --global color.status always
{{< / highlight >}}

Paste the following script at the bottom of your ~/.bashrc file, and use it by typing 'gs'. (Change the shortcut to whatever you like.)

{{< highlight bash >}}

# Processes your git status output, exporting bash variables

# for the filepaths of each modified file.

# To ensure colored output, please run: $ git config --global color.status always

# Written by Nathan D. Broadbent (www.madebynathan.com)

# -----------------------------------------------------------

gs() {
pfix="e" # Set your preferred shortcut letter here
max_changes=20 # Max changes before reverting to standard 'git status' (can be very slow otherwise)
IFS=$'\n'

# Only export variables for less than $max_changes

status=`git status --porcelain`
if [ `echo "$status" | wc -l` -lt $max_changes ]; then
f=0 # Counter for the number of files
for line in $status; do
      file=$(echo $line | sed "s/^...//g")
      let f++
      files[$f]=$file         # Array for formatting the output
      export $pfix$f=$file # Exporting variable for use.
done

    status=`git status`    # Fetch full status

    # Search and replace each line, showing the exported variable name next to files.
    for line in $status; do
      i=1
      while [ $i -le $f ]; do
        search=${files[$i]}
        replace="\033[2;37m[\033[1m\$$pfix$i\033[2;37m]\033[0m $search "
        #echo $replace
        # (fixes a case when a file contains another file as a substring)
        line=${line/$search/$replace }   # Substitution for files with a space suffix.
        line=${line/%$search/$replace}    # Substitution for files with a newline suffix.
        let i++
      done
      echo -e $line                        # Print the final transformed line.
    done

else # If there are too many changed files, this 'gs' function will slow down. # In this case, fall back to plain 'git status'
git status
fi

# Reset IFS separator to default.

unset IFS
}
{{< / highlight >}}

Now you can just type 'gs', and use the exported variables for commands. You can also customise the shortcut letter by changing the 'pfix' variable in the function. I chose 'e' because it's easy to slide your finger to it from the '$' key.

Example:

{{< highlight bash >}}
$ gs

# On branch master

# Your branch is ahead of 'origin/master' by 4 commits.

#

# Changed but not updated:

# (use "git add <file>..."; to update what will be committed)

# (use "git checkout -- <file>..."; to discard changes in working directory)

# (commit or discard the untracked or modified content in submodules)

#

# modified: [$e1] vendor/plugins/crm_merge (modified content)

# modified: [$e2] vendor/plugins/crm_search (new commits, modified content)

# modified: [$e3] vendor/plugins/crm_super_tags (modified content)

#

no changes added to commit (use "git add"; and/or "git commit -a")

$ cd $e2
or
$ git rm -r $e3

{{< / highlight >}}

&nbsp;

I use git version 1.7.1.1, GNU bash version 4.1.5(1), and Ubuntu 10.04.
