# madebynathan.com

* Hugo version: `0.21`

## Development

All development happens on the `main` branch. The `gh-pages` branch contains the generated static site. The `./public` directory contains another copy of the git repo with the `gh-pages` branch checked out. Hugo builds the static site into this `./public` directory, and the changes are committed and pushed.

## Docker

I switched to using Docker so that I can easily run an older version of hugo and an older theme without needing to update anything.

### Setup

Run `docker load -i hugo-alpine.tar.gz`. This will load the `hugo` image into Docker.

Run `./dev`. You will now be able to access the blog development server at `localhost:1313` (with live reloading.)

### Building new Docker image

Run `./build_docker`. This will build the `Dockerfile` and save the new image to `hugo-alpine.tar.gz`.

### Deploying

Run `./deploy`. This will build the blog and commit to the `master` branch, then push the changes.

# Submodules

I removed the submodules and just checked in all the files.

Original `.gitmodules`:

```
[submodule "themes/herring-cove"]
	path = themes/herring-cove
	url = https://github.com/spf13/herring-cove.git
[submodule "themes/hugo-sustain"]
	path = themes/hugo-sustain
	url = https://github.com/nurlansu/hugo-sustain.git
```

Original commits:

```
$ git submodule init
$ git submodule update
Submodule path 'themes/herring-cove': checked out '4d435ffe4b0015d98a76370539e61e2944160d7f'
Submodule path 'themes/hugo-sustain': checked out 'd88e0927e2b0d7d7e2a12690960e2e3fed72f5dd'
```
