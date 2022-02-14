---
layout: article
title:  "Create a new Rails 7 app with Tailwind"
categories: tailwind css rails
---

Now we’re going to actually create the new Rails 7 app.

Since this tutorial is for Rails 7 with Tailwind, the command I’m going to recommend is—

```
rails new APP_NAME --css tailwind -d postgresql
```

- `rails` is the Rails CLI (command line interface) tool
- `new` tells the Rails CLI that we want to generate a new application
- `APP_NAME` is, well, your app name
- `--css tailwind` is an optional parameter that tells Rails we want to use Tailwind for styles
- `-d postgresql` is an optional parameter that tells Rails we want to use the PostgreSQL to persist our data

I normally always override the default SQLite database, this is just a personal preference.

_Quick aside: Even though it’s glorious that Rails 7 doesn’t ship with Node or Webpack, there’s an unfortunate chance that you might still need that setup. For example, if you need any sort of JavaScript transpiling (i.e., for CoffeeScript, TypeScript, JSX), you will need to default back to a bundler and a package.json file. This tutorial isn’t going to be focusing on setting up Rails 7 with a bundler, so if you’re in that boat, this tutorial isn’t going to be quite as useful for you._

After generating your new Rails app, you’ll need to cd into your new app and create your database.

Run...

```
rails db:create
```

...and then you can start up your development server...

```
rails s
```

Now you can navigate to your browser to `localhost:3000`, and if everything has gone according to plan, you should see the Rails default index page.
