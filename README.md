# frontseat.org

This is the static website behind https://frontseat.org

It's a simple [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) site. It is hosted via [Github Pages](https://pages.github.com/) and is deployed automatically via [GitHub Actions](https://github.com/features/actions) any time a change is made to the `main` branch. 

(That is: if you want to change stuff on our website, you can do it, right here, in the GitHub web UI.)

## Local development

## Getting started

You'll need `node` version 20.* (LTS) installed. (I use [asdf](https://asdf-vm.com/) to manage such dependencies, but there are a zillion ways to do it.)

To get started, first install dependencies via npm:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

Finally, open [http://localhost:4321](http://localhost:4321) in your browser to view the website.
