# Yasir Dental Care Website

> A private website redesign demo for Yasir Dental Care across three Karachi locations.

[Live demo](https://yasir-dental-care-karachi.ahmedunkown12.chatgpt.site)

## Overview

Yasir Dental Care presents accessible, modern dental care across branches in Gulistan-e-Johar, Gulshan Chowrangi, and Block 6 Gulshan-e-Iqbal. The site emphasizes straightforward booking, extended hours, family dentistry, and dependable follow-up.

## Features

- Multi-location clinic presentation
- Dental checkups, pain relief, root canals, braces, aligners, whitening, veneers, implants, crowns, and bridges
- Branch selection and direct booking calls to action
- Responsive desktop, tablet, and mobile layout
- Clinic details, care process, FAQs, and contact information

## Technology

- Next.js-compatible React application powered by vinext
- TypeScript
- Vite
- Tailwind CSS
- Cloudflare/OpenAI Sites deployment configuration

## Requirements

- Node.js `>=22.13.0`
- npm

## Getting started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. Create a production build with:

```bash
npm run build
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build. |
| `npm start` | Start the built application. |
| `npm test` | Build the site and run the rendered HTML checks. |
| `npm run lint` | Run ESLint. |
| `npm run db:generate` | Generate Drizzle migrations when database schema changes. |

## Project structure

```text
app/                 Application routes, components, styles, and site content
app/site-data.ts     Clinic-specific content and configuration
public/              Static assets
tests/               Render and smoke tests
.openai/hosting.json Sites hosting configuration
```

## Content and configuration

Update clinic content in `app/site-data.ts`. Review branch addresses, contact details, opening hours, services, qualifications, testimonials, prices, and claims before publishing. No required environment variables are documented for the current demo; store any future secrets in local environment files and never commit them.

## Deployment

The project includes `.openai/hosting.json` for the configured Sites hosting workflow. Run `npm test` and `npm run lint` before deployment, then use the team's approved hosting and access-control process.

## Status and usage

This is a private redesign demonstration, not the official Yasir Dental Care website. Verify all facts with the clinic before handoff or public launch. No open-source license is granted by this repository unless separately agreed in writing.

## Contributing

Keep changes focused, preserve responsive behavior and accessibility, update this README when setup changes, and run the available checks before submitting work.

