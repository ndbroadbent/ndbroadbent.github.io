+++
categories = []
date = "2021-12-05T02:15:59Z"
description = ""
tags = ["docker", "hugo"]
title = "How Docker Saved My Blog"
+++

I haven't written any blog posts for a while. One reason is that I've been hard at work on [DocSpring](https://docspring.com) for the last few years, and I haven't had a lot of time to work on personal projects. But the main reason is that my blog uses an older version of [Hugo](https://gohugo.io/), which is a "static site generator" [^1].

I switched from Jekyll to Hugo in 2017, and the current version of Hugo at the time was [`0.21`](https://gohugo.io/news/0.21-relnotes/). I found a cool theme called [hugo-sustain](https://github.com/suyundukov/hugo-sustain). Everything was great for a few years.

Time passed. One day, I tried to update a post or write a new post (I can't remember which), and I realized that my `build` and `develop` scripts were broken. I was a new computer at that point, and I had updated my macOS version. I installed the latest version of `hugo` and saw a bunch of interesting and confusing error messages when it tried to compile my old themes and layouts. I tried to downgrade `hugo` to version `0.21`, and it crashed with a segfault (it was built for an older version of macOS.) I cloned the `hugo` repository and tried to compile it from source, but my Go version was too new, so it failed to compile. Finally, I downgraded my Go version to an older version that was released around the same time in 2017. I held my breath as I tried to compile `hugo` one last time. Go tried to fetch all of the required dependencies, and crashed with a bunch of 404 errors. Apparently some of the packages had been renamed and moved around, and the older versions had been removed from the Go package index.

So I gave up for a while. Instead of generating my blog from the source, I switched to editing the static files directly. Sometimes I would need to correct a typo or adjust some styles, so I'd go into the generated `./public` directory and manually modify the raw HTML and CSS.

Time passed. One day, I started to notice some activity on [a blog post that I had written 11 years ago](/2010/05/13/scanning-lots-of-photos-at-once/). This post is about a GIMP plugin called `deskew` that makes it easy to scan old photos in batches on a scanner and automatically rotate them. I had dropped this plugin file in my Google Drive and had pasted a link to the file. The link worked great for 10 years, and people were able to download the file without any issues. But eventually Google changed something and the link was no longer working. I started to receive emails from people who were requesting access to this file.

<img class="lightbox thumb" src="/images/posts/2021/12/request-to-access-deskew.jpeg" alt="Request to access the deskew file" />

I manually shared the file a few times. Then I decided to download the file and check it in to the blog repo. I started going into the `./public` directly to update the HTML, but I decided it was time to have another crack at this Hugo problem and fix my blog.

Should I switch to Ghost? I've loved using Ghost for the [DocSpring blog](https://docspring.com/blog). It's a really nice blogging platform that I self-host on [Digital Ocean for $5/mo](https://www.digitalocean.com/), and I enjoy the WYSIWYG writing experience a little more than editing plain Markdown files. (Images are a bit annoying.) But I didn't want to migrate all my posts over to [ghost.org](https://ghost.org/) and get locked in, or spend $5/mo for the rest of my life. I just want some static HTML/CSS that I can put on GitHub Pages forever.

Should I upgrade to the latest version of Hugo and spend hours fixing up the themes and tweaking all my posts until everything is working again? No thanks. Hugo runs on my local machine and produces static HTML and CSS content. It's a [pure function](https://www.wikiwand.com/en/Pure_function). There are no security vulnerabilities to watch out for. As far as I'm concerned, Hugo version `0.21` is "finished software." It generates my blog, and I'm happy with my blog. I will continue to be happy with my blog for many years to come. I don't need the latest and greatest features. I just want something stable that I can use over the next few decades without the constant grind of updating packages, breaking things, and debugging random issues. Give me Hugo `0.21` from May 2017!

I was even tempted to throw everything away and start from scratch with something old and stable. Preferably written in Bash, C, or Perl. There's a lot of cool new languages out there but they often "move fast and break things." The POSIX standard was created 33 years ago in 1988, so I could still run some shell scripts that are over 30 years old. (I asked Hacker News for some examples: [Ask HN: What is the oldest Posix script that I can still run in a modern shell?](https://news.ycombinator.com/item?id=29446380).)

I had a sudden burst of inspiration:

# Docker!

I could run Hugo in a Docker image! If I can get Hugo `0.21` running in a Docker image, then I can save that Docker image into a `*.tar.gz` file and store it right in my git repo. Then I have a static `hugo` binary that comes packaged with everything it needs to run in a consistent environment, and I can run it anywhere (Linux, Mac OS, Windows.)

I found a [Dockerfile in this docker-alpine-hugo repo](https://github.com/jonathanbp/docker-alpine-hugo/blob/master/Dockerfile), and I just needed to change `0.55.3` to `0.21`. Everything worked on the first try! [^2]

### How I use Docker

Instead of running `hugo`, I run a `./hugo` wrapper script that runs `hugo` inside a Docker container:

```bash
#!/bin/bash
docker run --rm -v "${PWD}:/src" hugo-alpine hugo "$@"
```

I have a `build_docker` script [^3] that builds the Docker image and saves it to `hugo-alpine.tar.gz`:

```bash
#!/bin/bash
set -euo pipefail

echo "Building Dockerfile..."
docker build . -t hugo-alpine
echo "Saving image to hugo-alpine.tar.gz"
docker save hugo-alpine > hugo-alpine.tar.gz
```

If I'm on a new computer, I can just run `docker load -i hugo-alpine.tar.gz` to load the `hugo-alpine` image into Docker.

I have a `dev` script that starts the `hugo` server and makes it available on port `1313`:

```bash
#!/bin/bash
docker run --rm -v "${PWD}:/src" -p 1313:1313 hugo-alpine hugo --watch serve --bind 0.0.0.0
```

Finally, I have a `deploy` script that generates the static site into `./public`, then pushes the result to a `gh-pages` branch:

```bash
#!/bin/bash
set -euo pipefail

if [ ! -d public/.git ]; then
  rm -rf public
  REMOTE="$(git remote get-url origin)"
  git clone "${REMOTE}" public
  (cd public && git checkout gh-pages)
fi

docker run --rm -v "${PWD}:/src" hugo-alpine hugo

cd public
git add -A
git commit -m "$(date)"
echo "Pushing build..."
git push

cd ..
echo "Pushing source..."
git push
```

### You can view the source code for my blog here: https://github.com/ndbroadbent/ndbroadbent.github.io

---

I'm very happy with this workaround. Now I'm back in business, and I can update or write new blog posts to my heart's content. This new Docker-based setup should last me for the next few decades, if not longer. I'm in no hurry to switch to anything else.

[^1]: A [static site generator](https://www.cloudflare.com/learning/performance/static-site-generator/) converts a folder full of Markdown files into a plain HTML/CSS website that you can host for free on [GitHub Pages](https://pages.github.com/) or [Netlify](https://www.netlify.com/).
[^2]: I think it's generally much easier to get older Linux packages running, especially when it's a single Go binary with no dependencies. I wish it was this easy on Mac!
[^3]: Hopefully I never have to run this again!
