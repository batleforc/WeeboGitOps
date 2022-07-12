---
sidebar_position: 1
---

# Getting started

## Why?

First. Because Why Not ?

And learning the basics of GitOps seems to be a good idea with enouth background and diffenrents thing that can be learned.

In addition to that handling my own cluster with GitOps can make my life easier.

## How?

So, in our case we need to deploy some application like the basical need of a young DevOps like me:

- CI/CD engine (Concouse at first but migrating to Tekton)
- Monitoring system, log monitoring and uptime monitoring (Prometheus + Grafana + Loki + UptimeKuma)
- Identity management system (KeyCloak)
- Dashboard (because it looks cool)
- GitRepository (Gitea)
- Container image registry (GoHarbor)
- Code Quality (SonarQube)
- And some other stuff

At first i was expecting a world where all i want already exist. But this is not the case. So in order to simplify a lot's of stuff FluxCI that i discovered during the 2022 CNCF & Kubecon has been used has the GitOps engine.

```plantuml context
node Github{
  node OtherApplicationLikeWereWolf{
    node main as werewolfMain{
      folder deploy
      folder OtherSourceCode
    }
  }
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

deploy <--> FluxCI : "Another app watched in order to deploy it"
main <=> FluxCI : "Cluster definition"
SubProject <=> FluxCI : "Project used with job to deploy certain applications"
```

Inside the WeeboGitOps github repository we can find the GitOps definition of the cluster.

And in order to create what i was missing (like a working operator for KeyCloak) this project was completed with a SubProject MonoRepo workflow.

:::tip
This whole Github repository contains component that follow a SubProject monorepo workflow. if you want to learn more go to [SubProject definition](./SubProject)
:::
