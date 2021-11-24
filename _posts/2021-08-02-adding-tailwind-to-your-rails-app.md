---
layout: article
title:  "Adding Tailwind CSS to your Rails app"
categories: tailwind css rails yarn
---

Today we are going to add the fantastic [TailwindCSS](https://tailwindcss.com){:target="_blank"} to our rails project.

So lets start off with installing our dependancies, because the current version of Rails leverages PostCSS 7 we will need to install some different node packages to provide the best compatibility possible.
```
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

When Rails gets updated on the PostCSS front you can upgrade your Tailwind CSS installation by running:
```
yarn remove tailwindcss @tailwindcss/postcss7-compat
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
```

<hr>

## Create the Tailwind config
Now we have that don we can generate a new `tailwind.config.js` file by running
```
npx tailwindcss init
```

This will create a minimal `tailwind.config.js` file at the root of your project:
```
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

<hr>

## Setting up TailwindCSS
Inside `app/javascript/` let's create a new folder called stylesheets, then we'll create a new `application.scss` stylesheet within `app/javascript/stylesheets`. Yes I know this seem a bit odd, but you can keep all your tailwind config and styles together for easier managment if you wish.
```
mkdir app/javascript/stylesheets
touch app/javascript/stylesheets/application.scss
```

Inside the `application.scss` we just created we need to add the tailwind import statements so we can include all of its defaults.
```
/* app/javascript/stylesheets/application.scss */
@import "tailwindcss/base";
@import "tailwindcss/components";

/* Add any custom CSS here */
@import "tailwindcss/utilities";
```

_You are able to add any custom CSS after the components import but before the utilities import._

<hr>
## Import the stylesheet inside your packs file
Ruby on Rails ships with an `application.js` file inside `app/javascript/packs`. You can add another file or import it inside `application.js` all the same. We need to import the `application.scss` file here and leverage Webpack loaders to compile things down.
```
/* app/javascript/packs/application.js */

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "stylesheets/application" // Add this line
```

<hr>

## Add TailwindCSS to postcss.config.js
To add TailwindCSS to the Rails project's postcss.config.js file you need to require it. You can then pass the relative path to your configuration file.

Require tailwindcss in postcss
Add the following require to the postcss.config.js file
```
/* postcss.config.js */
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-import"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
  ],
}
```

If you wanted to move your `tailwind.config.js` file into your stylesheet folder, you would need to pass the full relative URL `app/javascript/stylesheets/tailwind.config.js` for this to work.

```
require("tailwindcss")("./app/javascript/stylesheets/tailwind.config.js"),
```

<hr>

## Update your layout file
We now need to add the `stylesheet_pack_tag` to our project. This would be added to your the head of your playout page.
```
<!DOCTYPE html>
<html>
  <head>
    <title>Our project</title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= stylesheet_pack_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
```

<hr>

## Make sure you purge those files
Once you have Tailwind CSS up and running I highly recommend setting up the purge feature which is now built-in. Simply pass in the paths to files you use Tailwind CSS inside. The utility will traverse those files and remove any classes you aren't making use of.

This reduces file sizes and increases your website's performance dramatically.

```
/* app/javascript/stylesheets/tailwind.config.js */
module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

<hr>

All thats left to do now its to try it our and make sure it works. Open up our terminal window and start the rails server, and make sure it all works.
```
rails s
```
