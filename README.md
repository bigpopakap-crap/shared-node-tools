linting-config
==============

This monorepo has linting configurations for bigpopakap's Typescript/JS/React/Express projects.
In the future, this may hold other common configurations, like semantic commit formats, Renovate configs, etc.

This repo is setup up with:
- Travis CI
- Enforced semantic commits
    - `commitizen` for interactive commit message creator
    - `commitlint` for validation locally with git hooks and on Travis CI
- Linting, using the configurations defined here itself (how meta!)
- Auto-publishing of packages with `semantic-release`
- Automatic updates to package dependencies with RenovateBot
- Yarn workspaces to share node modules
- Yarn policy to keep yarn versions in sync across multiple machines
