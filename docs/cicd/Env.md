# Tekton Env

## WorkFlow

The CI/CD used in this environment is based on Tekton. If you need a deep dive into Tekton, you can read the [official documentation](https://tekton.dev/docs/).

Here i will only explain how i work with Tekton.

```mermaid
flowchart TB;
  subgraph RustTemplate;
    EventListener
    subgraph Pipeline;
      FetchSource
      BuildImage
      BuildHelm
      SonarScan
      HelmUpgrade
    end
  end
  subgraph Github;
    RepoRustTemplate
  end
  subgraph Harbor;
    NsRustTemplate
  end
  subgraph SonarQube;
    ProjectRustTemplate
  end
  subgraph Buildkit;
    BuildKit1
  end
  subgraph Notify;
    NotifyManager
    subgraph Mean;
      Gotify
      Discord
    end
  end
  NotifyManager -->|Send notification| Gotify
  NotifyManager -->|Send notification| Discord
  RepoRustTemplate -->|Receive a push| RepoRustTemplate
  RepoRustTemplate -->|Call Webhook| EventListener
  EventListener -->|Trigger| Pipeline
  EventListener -->|Start Pipeline| FetchSource
  FetchSource -->|Build image| BuildImage
  BuildImage -->|Build helm chart| BuildHelm
  BuildHelm -->|Sonar scan| SonarScan
  SonarScan -->|Helm upgrade| HelmUpgrade
  FetchSource ==>|Clone source code| RepoRustTemplate
  BuildImage -->|Build image| BuildKit1
  BuildKit1 -->|Push image| NsRustTemplate
  BuildHelm -->|Push helm chart| NsRustTemplate
  SonarScan -->|Push sonar scan| ProjectRustTemplate
  HelmUpgrade -->|Upgrade helm chart| DeployRustTemplate
  Pipeline -->|Notify of the status| NotifyManager
```
