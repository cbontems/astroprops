---
title: "Astro 2.5"
description: "Data collections • Hybrid rendering • Custom client directives • HTML minification • Parallelized rendering • Polymorphic type helper • More!"
publishDate: "May 18, 2023"
authors:
  - cedric
coverImage: "/src/content/blog/_images/blog-sample/blog-sample.jpg"
coverImageAlt: "A beautiful cover image"
socialImage: "/src/content/blog/_images/blog-sample/blog-sample.jpg"
lang: "en"
---

We just released Astro 2.5, with a big list of features including:

- **[Data collections and references](#data-collections-and-references)**: Your `src/content/` folder can now include JSON and YAML files to store data. You can reference this data from your other collections.
- **[Hybrid rendering (experimental)](#static-by-default-hybrid-rendering-experimental)**: Allow server routes in your mostly static sites.
- **[Custom client directives (experimental)](#custom-client-directives-experimental)**: A new API for integrations to define their own loading mechanics for `client:` directives.
- **[HTML minification](#html-minification)**: An option to allow you to minify your Astro templates.
- **[Parallelized rendering](#parallelized-rendering)**: Astro now runs sibling components in parallel, speeding up rendering when you have multiple components doing their own data loading.
- **[Polymorphic type helper](#polymorphic-type-helper)**: Define a component that accepts the same props as built-in elements.

## Ordered list

1. f zalv rezamev
1. f zalv rezamev
1. f zalv rezamev

## Data collections and references

Content collections are Astro's first-class solution to managing and authoring content. Astro 2.5 takes that story even further with **new data formats and collection references.**

First, we've introduced a new `type: 'data'` property to store data formats like JSON and YAML in their own collections. This unlocks using collections for new forms of content including author profiles, reusable image alt text, translation dictionaries, and more.
