# frontseat.org

This is the static website behind https://frontseat.org

It is a [NextJS](https://nextjs.org) site built using [Tailwind CSS](https://tailwindcss.com). It is hosted via [Github Pages](https://pages.github.com/) and is deployed automatically, via [GitHub Actions](https://github.com/features/actions) any time a change is made to the `main` branch. (That is: if you want to edit stuff on our website, you can do it, easily, in the GitHub web UI.)

It is currently styled as a "changelog" aka a lightweight, single-page blog. We want to build our experiments in public, so this is where we'll make tiny announcements of the things we're working on and/or have shipped. Changelogs are how all the cool nerdy kids are doing things these days, but we can quickly modify the site to suit whatever needs we foresee.

## Local development

## Getting started

You'll need `node` version 18.16.0 (LTS) installed. (I use [asdf](https://asdf-vm.com/) to manage such dependencies, but there are a zillion ways to do it.)

To get started, first install dependencies via npm:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Adding changelog entries

All of the changelog entries are stored in one big `./src/pages/index.mdx` file. This is inspired by how projects commonly maintain plaintext `CHANGELOG` files, and thought it would be cool to parse this sort of format and turn it into a nicely designed site.

Each changelog entry should be separated by a horizontal rule (`---`) and should include an `<h2>` with a date, specified as an [MDX annotation](https://github.com/bradlc/mdx-annotations):

```md
---

![](@/images/your-screenshot.png)

## A new changelog entry {{ date: '2023-04-06T00:00Z' }}

Content...
```

## Other details

### RSS feed

The site automatically generates an RSS feed at build time based on the content of `./src/pages/index.mdx`.

You can edit the metadata for the feed (like the title and description) in `./src/lib/generateRssFeed.js`.

Make sure to set your `NEXT_PUBLIC_SITE_URL` environment variable as the RSS feed needs this to generate the correct links for each entry.

### Tailwind UI

This is based on a Tailwind UI template. Dave owns a full license for Tailwind UI. (We may ultimately want for Front Seat to have its own license.)
