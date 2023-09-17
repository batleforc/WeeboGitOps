---
slug: CNI
title: Container Network Interface
authors: batleforc
---

A Container Network Interface (CNI) is a specification for network plugins in the Kubernetes ecosystem. It defines how a container runtime should interact with a network plugin. The CNI specification is maintained by the Cloud Native Computing Foundation (CNCF). If you want to learn more about CNI, you can read the [CNI specification](https://github.com/containernetworking/cni)

## Cilium

The one used in the Weebo cluster is [Cilium](https://cilium.io/). Cilium is a CNI plugin that provides networking and security services. It is based on eBPF and XDP. It is a very powerful tool that allows us to do a lot of things. For example, it allows us to do network policies, load balancing, and more. You can read more about Cilium [here](https://docs.cilium.io/en/stable/overview/intro/).

## Cilium in Weebo

In Weebo Cluster, cilium is setup to replace KubeProxy and [Klipper-lb (also named service lb)](https://github.com/k3s-io/klipper-lb).
One of the main advantage of migrating from Klipper is the speed. In the past, i had the intention to deploy a Moded Minecraft server. But the performance was not good enough and player couldn't connect to the server. After migrating to Cilium, the performance is much better and the server is now playable. Even with those with the lamest internet connection.

In addition to those, with the help of hubble, we can now have a better visibility of the network. We can see the traffic between pods, the traffic between nodes, and more. You can read more about hubble [here](https://docs.cilium.io/en/stable/gettingstarted/hubble_intro/).
