# KubeKite

Static website for KubeKite, an education-first engineering knowledge brand for DevOps, SRE, MLOps, Cloud
Computing, AI Infrastructure and Platform Engineering.

Core message:

> Understand modern computing infrastructure.

## Content model

The site publishes three things, all free:

- **Knowledge** (`#topics`) — a topic-led base covering the six disciplines in depth.
- **Trends** (`#trends`) — a weekly read on what is moving across the software and computing
  landscape, published to LinkedIn and collected in KubeKite Weekly.
- **Repos** (`#repos`) — open-source work that makes engineers faster: Claude Code hooks, skills and
  agents, context and memory files, and starter kits.

The site is a front door to the writing, the GitHub repos and the newsletter. Keep it small: prefer
merging or removing sections over adding them, and do not ship placeholder content with invented
dates or links that go nowhere. There is deliberately no services section — that comes later.

## Knowledge areas

Each area has its own card in the `#topics` section with the subtopics it covers:

1. **DevOps** — CI/CD, GitOps and Argo CD, Terraform and IaC, release strategies, supply chain basics
2. **Site Reliability Engineering** — SLIs/SLOs and error budgets, observability, incident response, postmortems, capacity planning
3. **MLOps** — training pipelines, feature stores, model registries, serving and rollout, drift monitoring
4. **Cloud Computing** — compute and storage choices, networking and VPC design, IAM, landing zones, cost awareness
5. **AI Infrastructure** — GPU scheduling on Kubernetes, inference serving and vLLM, distributed training and Ray, accelerator networking
6. **Platform Engineering** — internal developer platforms, golden paths, self-service workflows, platform APIs, developer experience

## Features

- Static GitHub Pages-compatible homepage
- Navigation: Home, Topics, Trends, Repos, About and Contact
- **Dark theme by default**, with light as an explicit opt-in via the header toggle. The choice is
  stored in `localStorage` under `kubekite-theme` and applied by an inline pre-paint script so it
  does not flash. Colours are CSS custom properties: dark values live on `:root`, light values on
  `:root[data-theme="light"]` — add new colours as tokens in both blocks, never as literals.
- Topic-led knowledge base as the primary section
- Trends section covering the wider software and computing landscape
- Repos section for open-source work, linking the GitHub org
- Founder-led About preview
- Newsletter placeholder for KubeKite Weekly
- Existing Google Form contact mechanism
- Lightweight vanilla JavaScript for smooth scrolling and reveal-on-scroll
- Responsive enterprise-modern layout

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Forms contact link

## Local Development

Open `index.html` in a browser. The site is static and does not require a build step.

## Deployment

The site is designed for GitHub Pages and preserves the existing `CNAME` configuration for `kubekite.com`.

## License

MIT License

Copyright (c) 2026 KubeKite Technologies
