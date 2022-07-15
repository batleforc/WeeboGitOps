---
sidebar_position: 2
---

# SubProject WorkFlow

In order to sustain my need for multiple subproject, I need to have a workflow for it and to normalize the way I manage these subproject.

## Git Structure

One of the amazing thing about Git is it's support for the char "/" in the branch name and what it means (having a folder structure).

In order to use it to it's fullest potential the branch name must be in the form of:

`<subproject>/<branch>`

And by example:

`Doc/Main` `KeyCloakOpe/Main`

## Folder Structure

So, has of now we have our subproject represented with a Git Branch but we need a common base folder in order to have the minimal information shared accros project.

```md
.
+-- README.md : Must contains the basic information and presentation about the subproject and his usage.
+-- .gitignore : Must contains the list of files to ignore in the subproject.
+-- deploy : Must contains each component to deploy the app
| +-- Dagger: dagger definition Build/Deploy
| +-- Tekton: tekton definition Build/Deploy
| +-- Helm: helm definition to deploy the app
+-- .husky : Husky script to commit and use the project
| +-- pre-commit : Pre commit script (gen swagger doc by example)
| +-- prepare-commit-msg : Prepare commit message script like with GitMoji
+-- package.json : Package.json with at least husky install
+-- yarn.lcok : Yarn lock file with all the dependencies def (because yarn is better than npm)
```

### Why ?

#### Dagger

Has of now [Dagger](https://dagger.io/) is being used in order to build image before the use of Tekton when the image is not available.

In our case Dagger is meant to be used with Github Action.

#### Tekton

Has of now [Tekton](https://tekton.dev/) is the main CI/CD engine used inside of the Weebo kubernetes cluster, he is being used when the cluster is setup.

Tekton replace the previously used enfine who was Concourse. Concourse was good in it's own way but the development of this project doesn't go the way i was expecting.

#### Husky

[Husky](https://typicode.github.io/husky/#/) is a tool who allow easier GitHooks. This tools has the downside of using nodejs but the documentation also use it so why not ?

:::info
The husky configuration is explained in the [SubProject part about husky](./SubProject/Husky)
:::

### CI/CD

What the CI/CD need to do:

- Build the image
- Code quality check
- Dependency check
- On tag make a release if needed
- Deploy the image/helm chart if needed

If your GithubAction CI/CD need environment variable please create a separated Environments with branch who has access to these variable.

### Git hooks

What my git hooks need to do:

- Format commit message with GitMoji
- Build Swagger doc or this kind of doc if needed
- Check sonarqube ? Gonna go to the CI

### GitIgnore

In order to keep your repo clean, you can use the `.gitignore` file to ignore some files.

If you need some template here is some link by language:

- [NodeJs](https://www.toptal.com/developers/gitignore/api/yarn,node,sonarqube) <- Default One
- [Go](https://www.toptal.com/developers/gitignore/api/go,yarn,node,sonarqube)
- [React](https://www.toptal.com/developers/gitignore/api/yarn,node,react,sonarqube)
