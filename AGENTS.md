# NPTS Tech - Agent Instructions

This document outlines the essential conventions, commands, and patterns to help AI agents work effectively in this repository.

## 🛠 Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **Package Manager**: `pnpm`
- **Language**: TypeScript (`<script setup lang="ts">`)
- **Templates**: HTML (`<template>`)
- **Styling**: Tailwind CSS
- **UI Library**: Nuxt UI (`@nuxt/ui`)
- **Content Management**: Nuxt Content v2 (`@nuxt/content`)

## 🚀 Key Commands

- **Install Dependencies**: `pnpm i`
- **Start Development Server**: `pnpm run dev`
- **Build Application**: `pnpm run build`
- **Generate Static HTML (Production)**: `pnpm run generate`
- **Preview Production Build**: `pnpm run preview`

## 📁 Code Organization

- `/pages`: Contains the main application routes.
- `/components`: Vue components. Note that the `Content.vue` component uses Nuxt UI and Tailwind Typography (`prose`).
- `/content`: Markdown files (`.md`) used by the Nuxt Content module (e.g., `story.md`, `contact.md`, `programs.md`).
- `/public/img`: Static assets like logos and hero images.
- `/assets`: Global CSS (like `main.css`).

## ✍️ Code Patterns & Conventions

### 1. Vue Templates (HTML)
All Vue components utilize standard HTML for their templates (`<template>`).
- Use standard HTML classes and IDs.
- Apply Tailwind utility classes using the standard HTML `class=""` attribute.

### 2. Styling & Theming
- **Tailwind CSS** is fully integrated.
- The project defaults to **Dark Mode** (`colorMode: { preference: 'dark' }` in `nuxt.config.ts`). Ensure UI elements look good on dark backgrounds.
- Markdown content uses the Tailwind Typography plugin (e.g., `.prose.prose-invert`).

### 3. UI Components
- The project heavily relies on **Nuxt UI**.
- Use Nuxt UI components where possible (e.g., `UCard`, `UButton`, `UHorizontalNavigation`, `UPopover`, `UVerticalNavigation`).

### 4. Content Integration
- Nuxt Content is used to render markdown files from the `content/` directory.

## 🚢 Deployment & CI/CD

- The application is deployed statically to **GitHub Pages**.
- A GitHub Actions workflow (`.github/workflows/pages.yml`) runs on pushes to the `master` branch.
- It uses `pnpm run generate` to export static HTML to the `.output/public` directory, which is then deployed.
