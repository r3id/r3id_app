---
layout: post
title: 'Jekyll tips & tricks'
categories: jekyll development tips
---

Here are a few little helpers for you to use as you build up your site.

## Reading Time
Add the reading time to a post, like they do here on medium! Paste the code below inside a post layout. If you are using within a layout file change `content` to `page.content`.

```
{% raw %}{% capture words %}
  {{ content | number_of_words | minus: 180 }}
{% endcapture %}{% endraw %}
```

```
{% raw %}{% unless words contains “-” %}
  {{ words | plus: 180 | divided_by: 180 | append: “ minutes to read” }}
{% endunless %}{% endraw %}
```
## Dates
Month, day, year
```
{% raw %} {{ page.date | date: “%B %-d, %Y” }} {% endraw %}
```
Current year
```
{% raw %} {{ site.time | date: "%Y" }} {% endraw %}
```
