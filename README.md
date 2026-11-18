# noofpi-ui-docs

Documentation site for [noofpi-ui](https://www.npmjs.com/package/noofpi-ui), Tailwind (v4)
components for [noofpi](https://www.npmjs.com/package/noofpi).

Live site: https://liorcodev.github.io/noofpi-ui-docs/

Built with [Nuxt](https://nuxt.com) and [Nuxt Content](https://content.nuxt.com), and deployed to
GitHub Pages.

## Development

`noofpi-ui` is installed from npm (`^1.1.0`), so the docs show the published components. To try
local changes, temporarily point it at a sibling checkout with `"noofpi-ui": "file:../noofpi-ui"`.

```sh
bun install
bun run dev
```

## Scripts

```
bun run dev        Start the dev server
bun run build      Build the site
bun run generate   Generate the static site into .output/public
bun run preview    Preview the generated site under /noofpi-ui-docs/
bun run format     Format with Prettier
```

## Structure

- `content/docs/`: documentation pages (Markdown)
- `app/`: Nuxt app (layouts, components, styles)
- `server/`: server routes
- `public/`: static assets

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which generates the site and publishes it to
GitHub Pages.

## Related

- [noofpi-ui](https://github.com/liorcodev/noofpi-ui): the component library
- [noofpi](https://github.com/liorcodev/noofpi): the framework
