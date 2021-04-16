---
layout: article
title: Jekyll File Structure
categories: jekyll
---

In this article we are going to take a high-level look at what these directories mean. Don’t worry if you don’t pick up these concepts just yet, as we’ll be going over these files and directories in later articles.

{% include media-image.html file="articles/jekyll-structure.png" %}

## _config.yml

The `_config.yml` file contains the configuration for the Jekyll site and is commonly used to:
- Set variables which can be utilised throughout our site
- Configure Collections or defaults
- Specify runtime variables we want to run every time.

The base `_config.yml` will look similar to this:

```
title: 'Site name'
email: site@email.com
description: >- # this means to ignore newlines until "baseurl:"
  Write an awesome description for your new site here. You can edit this
  line in _config.yml. It will appear in your document head meta (for
  Google search results) and in your feed.xml site description.
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: twitter
github_username:  github

# Build settings
permalink: pretty
permalink: /:title
plugins:
  - jekyll-feed
```

## _posts
The `_posts` folder is where we place our blog posts.

The naming convention of the post files is important and must follow the format: `YEAR-MONTH-DAY-title.md`. Permalinks can be customised for each post, but keep in mind that the date and markup language are determined solely by the file name.

## _site
`_site` is where Jekyll stores its compiled HTML files. Once built, these files can be uploaded directly to a server for hosting, I would recommend GitHub Pages.

_**Tip**: If using Git, you’ll want to use a `.gitignore` file to avoid checking in the compiled `_site` folder._

## Pages

You may have noticed two files `index.md` and `about.md` these are Markdown files and something you will work with a lot in Jekyll. We will discuss Markdown in a later post.

The top of each file you will need to specify a few things about the page. This is what Jekyll references when building each page. You can control the page quite a lot using front matter, but for a basic level you will only need the following:

- _layout_ — the layout your want this page to use
- _title_ — the page title
- _permalink_ — the pretty permalink for the page

Here’s an example to add to the top of your index.html file:

```
---
layout: post
title: This is my post title
categories: category1 category2
---
```

Now that we have our page set up, all we have to do now is add our content. Simply add all of the HTML you want to show up on your page.

## gemfile and gemfile.lock
The `gemfile` is Ruby’s dependency management system, and it contains a list of gems a Ruby project needs to run. We use mainly use the `gemfile` on Jekyll sites when we have Jekyll plugins.

A gem is a little bundle of code we can get included in our Ruby projects. The `gemfile` allows us to take someone else’s code and drop it straight into our own project. Gems can perform functionality such as:

- Converting a Ruby object to JSON
- Pagination
- Interacting with APIs such as Github

Jekyll itself is a gem as well many Jekyll plugins including `jekyll-paginate` and `jekyll-feed `which get included in the base site.

When we create or modify the `gemfile`, we need to run `bundle install` which will perform two tasks:

- Creates a `gemfile.lock` file if it doesn’t exist. This file is auto-generated and includes all the gems in `gemfile` with the addition of a version number even if it wasn’t specified. The `gemfile` ensures that we can share the source code with other developers and we will all have the same version of the gems.
- Download the gems on to your system/project.

## .jekyll-metadata

The `.jekyll-metadata` file allows Jekyll to keep track of which files have not been modified since the site was last built, and which files will Jekyll to regenerate them on the next build. This file does not get included in the generated site. It’s probably a good idea to add this to your `.gitignore` file.

The next folders I want to mention are no longer included by default mainly due to the introduction of gem based themes in Jekyll 3.2.

## _layouts
In the _layouts folder, we store the templates which wrap around our content. All the repeating code on our site like the header, footer and navigation are typically in a layout.

## _includes
Partial parts of a page which can be included throughout a Jekyll site. Includes are usually used for page sections which are duplicated across the site like a newsletter subscribe form, or footer.

The liquid tag `{% raw %}{% include file.ext %}{% endraw %}` can be used to include the partial in `_includes/file.ext`.

## _drafts
All our unpublished blog posts reside in this folder. The `_draft` folder allows us to work on blog posts without publishing them to the live site.

## _data
The `_data` folder contains YAML, JSON and CSV files. The data in these files can be used throughout the Jekyll site.

## Other Files/Folders
Files with front matter are processed and output to `_site` on a build. Files without front matter (typically CSS, JavaScript and image files) are copied straight to `_site` on a build.
