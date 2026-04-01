# Landing_Page_Template

A modern, customizable landing page template built with Next.js. The project is structured so most branding, copy, links, feature cards, FAQs, and metadata can be updated from a single content file.

## Overview

This template is meant to help developers launch a polished landing page quickly without rewriting every section by hand.

It includes:

- A responsive hero section
- Feature cards
- Testimonial section
- FAQ section
- Reusable header and footer
- Centralized content management
- SEO metadata support

## Content Editing

The main file you will edit is:

- [src/content/site-content.js](/Users/appajidheeraj/Downloads/GoFetch_LandingPage-main/src/content/site-content.js)

That file controls:

- Brand name and links
- Hero text and CTAs
- Navigation items
- Feature section content
- Testimonial placeholder content
- FAQ items
- Footer links
- Metadata and structured data

If you want to reuse this template for another product, start there first.

## Project Structure

- [src/app/page.js](/Users/appajidheeraj/Downloads/GoFetch_LandingPage-main/src/app/page.js) renders the landing page sections
- [src/app/layout.js](/Users/appajidheeraj/Downloads/GoFetch_LandingPage-main/src/app/layout.js) handles metadata, fonts, and theme setup
- [src/content/site-content.js](/Users/appajidheeraj/Downloads/GoFetch_LandingPage-main/src/content/site-content.js) stores editable content
- [src/components](/Users/appajidheeraj/Downloads/GoFetch_LandingPage-main/src/components) contains reusable UI sections

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Checks

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Customization Tips

- Update `site-content.js` before changing component code
- Replace placeholder links with real URLs
- Adjust colors and visual styling in [src/app/globals.css](/Users/appajidheeraj/Downloads/GoFetch_LandingPage-main/src/app/globals.css)
- Update metadata in `site-content.js` for your brand and SEO

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Lucide Icons
- Motion

## Notes

- The template currently uses centralized placeholder content so it can be reused for different products
- If you change the project branding, update both the content file and any public assets like logos or favicons
