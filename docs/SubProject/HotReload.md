---
sidebar_position: 3
---

# Hot Reload

Has we already have the nodejs package installed why not go further with integrating a base hot reload ?

You need to take into account that if you create a project who natively support hot reload (like React / Csharp / Java Quarkus) you should not use the hot reload provided by this doc.

:::info
During your reading of the next part i ask you to take into account the fact that these example need to be modified in order to follow you need.
:::

## What is HotReload ?

Hot Reload allow you to watch a folder or multiple for change. if a file change, the server will stop the current process and restart it.

In a lot's of case it allow for faster workflow when the language you use has fast start and stop process like golang.

## Install Nodemon

Your first need for the two next part is the `nodemon` package.

```sh
npm install nodemon --save-dev
# or
yarn add nodemon --dev
```

In the next exemple nodemon support more flag like:

- '-w [path]' | '--watch [path]' allow you to watch a folder for changes. can be repeated to watch multiple folders.

## Setup Hot Reload with NodeTs

Because you are the kind of person whoknow what to do and has a big brain, you use TypeScript and has already banished Js since a long time ago.

So to getStarted you need to add the `ts-node` package to your dependencies.

```sh
npm install ts-node --save-dev
# or
yarn add ts-node --dev
```

then add a script to you `package.json` in order for it to run on your repo.

```json
{
  ... // your package.json
  "scripts": {
    "watch": "nodemon ./main.ts"
  }
}
```

:::info
If needed a past project use a more complexe startup workflow based on multiple package.

[UnlabeledProject](https://github.com/batleforc/UnlabeledProject/blob/master/package.json)
:::

## Setup Hot Reload with Golang

Once you have installed nodemon you need to add a scripts inside your `package.json`

```json
{
  ... // your package.json
  "scripts": {
    "watch": "nodemon --exec go run main.go"
  }
}
```

this script is gonna watch your currrent directory and on change will restart the application.
