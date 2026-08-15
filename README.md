# KubeKite

Static website for KubeKite, an education-first engineering knowledge brand for DevOps, SRE, MLOps, Cloud
Computing, AI Infrastructure and Platform Engineering.

Core message:

> Understand modern computing infrastructure.

## Content model

The site is deliberately weighted toward knowledge, with services kept small:

- **Knowledge** — a topic-led knowledge base covering the six disciplines, plus engineering notes,
  explainers, weekly news context and open-source examples. This is nearly all of the page.
- **Services** — a single compact band offering selective infrastructure help for teams that want
  direct support after reading the work.

Keep this balance when adding sections: the site is a front door to the writing, the GitHub repos
and the newsletter, not a services pitch.

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
- Navigation: Home, Topics, Insights, Latest, About and Contact
- Topic-led knowledge base as the primary section
- Insights section describing the publishing formats: Engineering Notes, KubeKite Explains,
  KubeKite Weekly and open source
- Latest section with one starter post per knowledge area
- Compact single-band services strip
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
