---
slug: CSI
title: Container Storage Interface
authors: batleforc
---

A Container Storage Interface (CSI) is a specification for storage plugins in the Kubernetes ecosystem. It defines how a container runtime should interact with a storage plugin. The CSI specification is maintained by the Cloud Native Computing Foundation (CNCF). If you want to learn more about CSI, you can read the [CSI specification](https://github.com/container-storage-interface/spec)

## Longhorn

The one used in the Weebo cluster is [Longhorn](https://longhorn.io/). Longhorn is a CSI plugin that provides storage services. It's made by Rancher. It is a very powerful tool that allows us to do a lot of things. For example, it allows us to do snapshots, backups, and more. You can read more about Longhorn [here](https://longhorn.io/docs/1.5.1/).

## Longhorn in Weebo

The main advantage used by Weebo is the hability to backup the pods.
