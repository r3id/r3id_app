---
layout: article
title: Jekyll and links…
categories: rails jekyll development
---

Jekyll is fantastic, and I love creating posts using Markdown. However, I have found that adding links to articles can be a of a bit of a pain. While there is a way to open links in a new tab/window in Markdown, this does not always work too well.

For example, Kramdown provides the following snippet:
```
[link name](url_link){:target="_blank"}
```

GREAT! But it does not work that well *_sigh_*

I am yet to get this to function properly, I have seen many suggestions saying to use JS, while yes this is possible its still not great solution.

So I thought i would share my solution to this issue.

Let’s start by creating a new file in our `_includes directory`, and let’s call it media-link.html. With that file created, open it up, and we now need to add in our HTML.


```
<a href=”{{ include.url }}” target=”{{ include.target }}”>{{ include.text }}</a>
```

I will explain this in a moment, it will, however, become clear what we are trying to do in our next line of code.
Create yourself a blog post, `2017-01-04-test-post.md`, and make sure you have your front matter in there.
Add some text to your newly created blog post, and then when you want to add a link add the following line to the post.

```
{% raw %}{% include media-link.html url='http://google.com/' text='Google' target=”_blank” %}{% endraw %}
```

Now run your Jekyll app and go to the post, you should see this link in all its glory!

Now let me explain it a little.

We include our media-link.html page, and through this include we pass over the url, text and target. This is then picked up by our `media-link.html` include file via the {{ include.url }} liquid code. This then builds up your link and places it nicely on your page.

You could potentially add any other attribute you want to this, like `rel` or `name` a list is available on [W3CSchools](http://www.w3schools.com/TAgs/tag_a.asp){:target="_blank"}.
