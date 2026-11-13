# Case studies

Each case study is one file in `articles/`. The page design lives in `components/case-study/`, so every article looks the same and you never need to touch layout code to publish one.

## Add a new case study

1. **Copy the template.** Duplicate `_template.ts`, move the copy into `articles/`, and rename it to the article's slug, for example `articles/carsons-village.ts`. The slug becomes the page address: `npts.tech/case-studies/carsons-village`.
2. **Add the photos.** Create `public/img/case-studies/<slug>/` (same slug) and put the logo and photos there. Use `.webp` or `.jpg` for photos; include a `.jpg` or `.png` for `shareImage` so LinkedIn and Facebook show a preview.
3. **Fill in the template.** Replace every `...`. Delete any part marked optional that you don't need.
4. **Preview it.** With `pnpm run dev` running, open `localhost:3000/case-studies/<slug>`. If something is mistyped, VS Code underlines it in red. If the file name and `slug` don't match, the browser console (Cmd + Option + J in Chrome) shows a `[case studies]` warning.
5. **Commit and sync.** The article appears on the Case studies page and in the Partners page's impact section automatically.

## Things to know

- Text goes inside quotes. If the text has an apostrophe, use a curly one (`’`) or wrap the whole text in double quotes: `"It's ready"`.
- The newest article (by `date`) is the one featured on the Partners page. The date is also shown on the article as "Published …".
- `hope-restored-missions.ts` is a complete, real example to copy from.
- Files starting with `_` (like the template) are never published.
- **Search engines and AI assistants.** The page's search title, description, publish date, and "official address" are set for you from the article. To help it get found:
  - Set `seoTitle` (under 60 characters) with the partner's name and what was built, since the headline is written to grab attention rather than to match searches.
  - Start the `summary` with the partner's name and the key fact. It's the description in Google results.
  - Use real numbers and name the source in `sources`. Specific, sourced facts are what AI assistants quote.
  - If you revise an article later, set `updated` to that day's date.
- No photo yet? Leave out `card.image` to show "Picture to be added" on the card, and use `{ placeholder: 'Demo to be added' }` in a section. Swap in the real photo later.

## How the design is split up

`CaseStudyArticle` puts the page together from smaller pieces in `components/case-study/`. To change one part for every article, edit just that piece:

| Component | Part of the page |
|---|---|
| `CaseStudyHero` | Back link, label, headline, summary, publish date, share buttons, logo |
| `CaseStudyFacts` | The facts bar under the headline |
| `CaseStudyQuote` | The partner quote |
| `CaseStudySection` | One section: label, heading, paragraphs, photos |
| `CaseStudyHighlight` | The green-bordered list box |
| `CaseStudyWhyItMatters` | The numbered "Why it matters" steps |
| `CaseStudySources` | The sources line |
| `CaseStudyCard` | The preview card on the Case studies page (`stacked`) and Partners page (`side`) |
| `CaseStudyPlaceholder` | The "Picture to be added" / "Demo to be added" box |
