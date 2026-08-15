# KubeKite

Static website for KubeKite, a founder-led engineering brand for the AI era.

Core message:

> Work smarter in the AI era.

## Content model

The site rests on three pillars, all free:

- **Trends** (`#trends`) — a weekly read on what is moving across software and computing, published
  to LinkedIn and collected in KubeKite Weekly.
- **Repos** (`#repos`) — open-source tooling for working smartly with AI: Claude Code hooks, skills
  and agents, context and memory files, and starter kits.
- **Industries** (`#industries`) — the domains growing fastest around AI, what is being built in
  each and where the hard problems are.

The site is a front door to the writing, the GitHub repos and the newsletter. Keep it small: prefer
merging or removing sections over adding them, and do not ship placeholder content with invented
dates or links that go nowhere. There is deliberately no services section — that comes later.

The site is **not** an infrastructure-consulting site. An earlier version was built around six
infrastructure disciplines (DevOps, SRE, MLOps, Cloud, AI Infrastructure, Platform Engineering);
that framing was removed deliberately. Do not reintroduce it.

## Industries covered

Each has a card in the `#industries` section with the subtopics it covers:

1. **Healthcare & Life Sciences** — medical imaging, drug discovery, clinical workflow, patient data privacy
2. **Financial Services** — fraud detection, underwriting and risk, document processing, model governance
3. **Legal & Compliance** — contract review, discovery and research, regulatory automation, hallucination risk
4. **Robotics & Autonomy** — embodied agents, self-driving, warehouse automation, sim-to-real
5. **Energy & Climate** — grid optimisation, materials discovery, climate modelling, datacentre demand
6. **Defence & Geospatial** — geospatial intelligence, sensor fusion, autonomous systems, edge deployment

## Features

- Static GitHub Pages-compatible homepage
- Navigation: Home, Trends, Repos, Industries, About and Contact
- **Dark theme by default**, with light as an explicit opt-in via the header toggle. The choice is
  stored in `localStorage` under `kubekite-theme` and applied by an inline pre-paint script so it
  does not flash. Colours are CSS custom properties: dark values live on `:root`, light values on
  `:root[data-theme="light"]` — add new colours as tokens in both blocks, never as literals.
- Three-pillar strip under the hero: Weekly Trends, AI-Era Toolkit, Industry Domains
- Repos section linking the GitHub org and the live `workflow-builder` repo
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
