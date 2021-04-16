---
layout: article
title: "TailwindCSS and Jekyll"
categories: website, development, jekyll
---

This post provides a quick walkthrough on how to use PostCSS plugins like Tailwind and Autoprefixer on your Jekyll site. I’ve included an example configuration below to get you started integrating Tailwind CSS into your Jekyll site.

## Install Jekyll PostCSS plugin

The [Jekyll PostCSS](https://github.com/mhanberg/jekyll-postcss) plugin integrates PostCSS into the Jekyll build process. To install, add `gem 'jekyll-postcss'` to the Gemfile included with your Jekyll site.

```
group :jekyll_plugins do
  gem 'jekyll-postcss'
end
```

Add this line to your site’s _config.yml:

```
plugins:
  - jekyll-postcss
```

Run `bundle install` to install the gem.

## Install PostCSS and Tailwind

Use the following command to install Tailwind and PostCSS plugins.

I’ve also included the `@tailwindcss/typography` plugin. This plugin adds a set of customisable `.prose` classes that set sensible typographic defaults – perfect for parsed Markdown content.

```
$ npm install tailwindcss @tailwindcss/typography cssnano postcss postcss-import autoprefixer --save-dev
```

## Create PostCSS configuration file

Create a PostCSS [configuration file](https://github.com/postcss/postcss-load-config#postcssrcjs-or-postcssconfigjs) at the top-level of your project.

```
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.JEKYLL_ENV == "production"
      ? [require('cssnano')({ preset: 'default' })]
      : [])
  ]
};
```

This configuration uses the postcss-import to enable build time processing of @import statements. Be sure to review using with preprocessors if you are using additional plugins with Tailwind that are not listed above.

## Create Tailwind configuration file

Create a Tailwind [configuration file](https://tailwindcss.com/docs/configuration) at the top-level of your project.

```
module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

The purge configuration option includes common Jekyll directories. When building for production, Tailwind uses this option to remove unused styles and optimize your CSS. Any files in your project that reference the Tailwind styles by name should be included in this array.

## Include Tailwind in your CSS

Now you’re ready to include Tailwind in your CSS. As a reminder, your stylesheets will still need to have front matter in order for them to be processed by Jekyll.

```
---
---
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

## Deployment

When building for production, always set `JEKYLL_ENV=production` and `NODE_ENV=production` on the command line. When these variables are set to production, [unused Tailwind styles are purged](https://tailwindcss.com/docs/installation#building-for-production) and the output is processed with [cssnano](https://github.com/cssnano/cssnano).

```
$ JEKYLL_ENV=production NODE_ENV=production bundle exec jekyll build
```
