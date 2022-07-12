---
sidebar_position: 1
---

# Husky

Has of now we are in needs of more details about the configuration.

## Package.json

### Template husky

In the case of Husky, we first need a base package.json

```json package.json
{
  "name": "SUBPROJECT NAME",
  "version": "0.0.1",
  "main": "",
  "author": "AUTHOR",
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {
    "husky": "^7.0.0"
  },
  "scripts": {
    "prepare": "husky install"
  }
}
```

Inside this file we find a ref to devDependencies husky and a scripts named prepare who is exectued after a dependencies install like `yarn` or `npm install`.

### Install husky

If you already have a package.json file, you can use the following command to install Husky:

```sh
npm install husky --save-dev
# or
yarn add husky --dev
```

After the dependency is added we need to enable GitHooks and edit the conf:

```sh
npx husky install
npm pkg set scripts.prepare "husky install"
```

## Usage

### prepare-commit-msg

At the moment Husky exist, is installed but do nothing. In the first place we want to use GitMoji who allow the user to complete commit with emoji.

Has we want to use the gitmoji package we first need to install it:

```sh
npm install gitmoji-cli --save-dev
# or
yarn add gitmoji-cli --dev
```

Once the package is installed we're going to setup the prepare-commit-msg script:

```sh
npx husky add .husky/prepare-commit-msg "yarn gitmoji --hook $1 $2"
```

This command create the wanted hook and indicate that we want to use the gitmoji package. In order to use it, edit a files and commit what you changed.
