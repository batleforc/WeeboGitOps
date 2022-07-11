---
sidebar_position: 1
---

# Getting started

## Why?

The purpose of this project is to learn the GitOps paradigm work and how to use it to control a kubernetes cluster.

## How?

```plantuml context
node Github{
  node WeeboGitOps{
    node main
    node SubProject{
      node "Doc/Main" as docMain
      node "KeyCloakOpe/Main" as keyMain
      node "OtherProject/Main" as otherMain
    }
  }
}

node ClusterKubernetes{
  node FluxCI
}

main <=> FluxCI : "Cluster definition"
SubProject <=> FluxCI : "Project used with job to deploy certain applications"
```

This whole Github repository contains component that follow a SubProject monorepo workflow. if you want to learn more go to [SubProject definition](./SubProject)
