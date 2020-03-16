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
{% raw %}{% unless words contains "-" %}
  {% assign minutes = words | plus: 180 | divided_by: 180 %}
    {{ minutes }}
  {% if minutes == 1 %}
    {{ " minute to read." }}
  {% else %}
    {{ " minutes to read." }}
  {% endif %}
{% endunless %}{% endraw %}
```
## Dates
Month, day, year
```
{% raw %} {{ page.date | date: "%B %-d, %Y" }} {% endraw %}
```
Current year
```
{% raw %} {{ site.time | date: "%Y" }} {% endraw %}
```

## Opening a link in a new Page

A link is presented in markdown as `[User Friendly Text](http://domain.com/)`. This will open link in the same page/window/tab. To open a link in a new tab we need to add `{:target="_blank"}` right after the href syntax or alternatively use the html `<a>` tag.

## Filters
Output markup can take filters, which modify the result of the output statement. You can invoke filters by following the output statement's main expression with:

- A pipe character `(|)`
- The name of the filter

Optionally, a colon (:) and a comma-separated list of additional parameters to the filter. Each additional parameter must be a valid expression, and each filter pre-defines the parameters it accepts and the order in which they must be passed.

Filters can be chained together by adding additional filter statements (starting with another pipe character). The output of the previous filter will be the input for the next one.

```
Hello {% raw %}{{ 'alan' | upcase }}{% endraw %}
#=> Hello {{ 'alan' | upcase }}

Hello alan has {% raw %}{{ 'alan' | size }}{% endraw %} letters!
#=> Hello alan has {{ 'alan' | size }} letters!

Hello {% raw %}{{ '*alan*' | textilize | upcase }}{% endraw %}
#=> Hello {{ '*alan*' | textilize | upcase }}

It's the {% raw %}{{ 'now' | date: "%d %h, %Y " }}{% endraw %}
#=> It's the {{ 'now' | date: "%d %h, %Y " }}
```

- **capitalize** - capitalize words in the input sentence
- **ceil** - rounds a number up to the nearest integer, e.g. <br> ```{% raw %} {{ 4.6 | ceil }} {% endraw %} #=> 5```
- **downcase** - convert an input string to lowercase
- **first** - get the first element of the passed in array
- **floor** - rounds a number down to the nearest integer, e.g. <br> ```{% raw %} {{ 4.6 | floor }} {% endraw %} #=> 4```
- **last** - get the last element of the passed in array
- **prepend** - prepend a string e.g. <br> ```{% raw %} {{ 'bar' | prepend:'foo' }}{%endraw%} #=> 'foobar'```
- **slice** - slice a string. Takes an offset and length, e.g. <br> ```{% raw %} {{ "hello" | slice: -3, 3 }}{% endraw %} #=> llo```
- **split** - split a string on a matching pattern e.g. <br> ```{% raw %} {{ "a~b" | split:"~" }} {% endraw %} #=> ['a','b']```
- **strip_html** - strip html from string
- **strip_newlines** - strip all newlines `(\n)` from string
- **strip** - strips all whitespace from both ends of the string
- **truncate** - truncate a string down to x characters. It also accepts a second parameter that will append to the string e.g. <br> ```{% raw %} {{ 'foobarfoobar' | truncate: 5, '.' }} {% endraw %} #=> 'foob.'```
- **upcase** - convert an input string to uppercase
