# Weebo GitOps Project

flux bootstrap github --owner=batleforc --repository=WeeboGitOps --path=./clusters --personal --branch=main

## Folow up ?

The project use the github projects and has a board that help to follow the work in progress [url of the board](https://github.com/batleforc/WeeboGitOps/projects/1).

## Sub Project

Each sub project follow a git folder branch naming convention. When the documentation part is gonna be done, each sub project need to first add basic information into the Readme.md file and the documentation.

Template is considered a part of sub project.

The infrastructure folder is like the backbone of the project. Each project is needed in order for the rest to be able to work. At the end of the day, each image used in the kube cluster has to be cached on Harbor.

### [W.I.P] KeyCloakOpe

This part of the project has his own git branch folder and logic.

- KeyCloakOpe/
  - Init = Actual Initialization of the work in progress.
  - Main = Gonna be the Main branch of the sub project.
  - Develop = Develop branch.

### [Not done YET] Documentation

This part concern the documentation of the project and follow the git branch folder logic.

- Doc/
  - Main = Main branch of the documentation.
  - Develop = Develop branch.
  - Release = Actua realease branch.

At this moment a choice is to be made concerning the documentation framework.
Lots of framework allow easy documentation and we need to make a choice between:

- GoHugo
- Docusaurus
