# TechShortsApp

> A credibility-first short-form learning platform for technical education.

TechShortsApp is an experimental research platform exploring a simple question:

**Can short educational videos be ranked using evidence of learning rather than popularity?**

Most short-video platforms optimize for engagement metrics such as views, likes, comments, and watch time. While these signals measure attention, they do not necessarily measure usefulness, credibility, or learning.

TechShortsApp investigates an alternative approach:

> Treat user interactions as uncertain evidence and continuously update confidence in content quality.

---

## Why TechShortsApp?

Technical learners often consume educational content through short videos.

However, popularity is not the same as educational value.

A video may receive:

* Millions of views
* High watch time
* Strong engagement

while still being incomplete, misleading, or unhelpful.

TechShortsApp explores whether ranking systems can be designed around **confidence**, **evidence**, and **learning signals** instead of pure engagement.

---

## Core Research Question

**How should behavioral signals contribute to confidence in educational content quality under uncertainty?**

The project investigates:

* Which signals are meaningful evidence
* How much weight each signal should contribute
* How signal meaning changes depending on context
* How confidence should evolve as evidence accumulates

---

## Platform Features

### Short Technical Videos

Upload and discover technical content in areas such as:

* Software Engineering
* Artificial Intelligence
* Data Science
* Cloud & DevOps
* Cybersecurity
* Robotics & Automation
* Engineering Mathematics
* Systems & Infrastructure
* Hardware & Electronics

---

### Credibility-Oriented Ranking

Instead of relying solely on popularity, TechShortsApp evaluates multiple evidence signals.

Current signals include:

#### Implicit Signals

* Watch Ratio
* Replay

#### Explicit Signals

* Bookmark
* Helpful
* Follow

Each signal represents a different type of evidence and carries different levels of uncertainty.

---

### Three Discovery Feeds

#### For You

Personalized content feed based on user interactions.

#### Most Trusted

Videos with the strongest confidence based on accumulated evidence.

#### New & Emerging

Recently uploaded content that has not yet accumulated sufficient evidence.

---

## Current Research Model

The ranking system is built around three components:

### 1. Estimated Quality

Evidence accumulated from user interactions.

### 2. Confidence

How certain the system is about that estimate.

More evidence generally increases confidence.

### 3. Freshness

Information becomes stale over time.

Different technical domains decay at different rates.

Examples:

| Domain                  | Half-Life |
| ----------------------- | --------- |
| Cybersecurity           | 7 Days    |
| Artificial Intelligence | 14 Days   |
| Data Science            | 21 Days   |
| Software Engineering    | 30 Days   |
| Robotics & Automation   | 45 Days   |
| Engineering Mathematics | 365 Days  |

---

## Research Papers

The platform serves as a living research project.

### Paper 1

**Engagement Is Not Evidence**

Investigates why common engagement metrics should not automatically be treated as indicators of content quality.

### Paper 2

**How Much Credibility Should Each Signal Contribute?**

Explores weighting behavioral signals under uncertainty.

### Paper 3 (In Progress)

**Contextual Interpretation of Behavioral Signals**

Studies how context changes the meaning of user interactions.

---

## Technology Stack

### Frontend

* Next.js
* React
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* Firebase Authentication

### Storage

* Cloudflare R2

### Deployment

* Vercel
* Linode

---

## Current Status

### Version 2.3.0

Implemented:

* Watch Ratio
* Replay
* Bookmark
* Helpful
* Follow
* Confidence-Based Ranking
* Domain-Aware Time Decay
* Moderation System
* Creator Profiles
* Video Upload System
* Documentation Portal

Current focus:

* Signal Weighting Research
* Context-Aware Signal Interpretation
* Explainable Ranking
* Cold-Start Credibility Models

---

## Philosophy

TechShortsApp does not attempt to determine truth.

Instead, it attempts to answer:

> Given the available evidence, how confident should we be that this content is useful?

The goal is not certainty.

The goal is better uncertainty management.

---

## Documentation

Documentation:

https://docs.techshortsapp.com

Website:

https://www.techshortsapp.com

---

## Contact

Email:

[gotechshortsapp@gmail.com](mailto:gotechshortsapp@gmail.com)

---

## License

MIT License

Use, modify, and build upon the project with attribution.

---

Built by developers, researchers, and curious learners exploring how credibility can be modeled under uncertainty.
