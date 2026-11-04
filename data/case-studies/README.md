# Case studies

Each case study is one file in `articles/`. The page design lives in `components/CaseStudyArticle.vue`, so every article looks the same and you never need to touch layout code to publish one.

## Add a new case study

1. **Copy the template.** Duplicate `_template.ts`, move the copy into `articles/`, and rename it to the article's slug, for example `articles/carsons-village.ts`. The slug becomes the page address: `npts.tech/case-studies/carsons-village`.
2. **Add the photos.** Create `public/img/case-studies/<slug>/` (same slug) and put the logo and photos there. Use `.webp` or `.jpg` for photos; include a `.jpg` or `.png` for `shareImage` so LinkedIn and Facebook show a preview.
3. **Fill in the template.** Replace every `...`. Delete any part marked optional that you don't need.
4. **Preview it.** With `pnpm run dev` running, open `localhost:3000/case-studies/<slug>`. If something is mistyped, VS Code underlines it in red. If the file name and `slug` don't match, the browser console (Cmd + Option + J in Chrome) shows a `[case studies]` warning.
5. **Commit and sync.** The article appears on the Case studies page and in the Partners page's impact section automatically.

## Things to know

- Text goes inside quotes. If the text has an apostrophe, use a curly one (`’`) or wrap the whole text in double quotes: `"It's ready"`.
- The newest article (by `date`) is the one featured on the Partners page.
- `hope-restored-missions.ts` is a complete, real example to copy from.
- Files starting with `_` (like the template) are never published.
