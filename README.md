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
