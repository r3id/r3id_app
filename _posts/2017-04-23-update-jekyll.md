---
layout: article
title: "How to: Update Jekyll"
categories: rails jekyll development
---

So, updating Jekyll is really simple, as always! So this will be a pretty short post. Fire up your terminal window of choice. I use the awesome iTerm2.

First, lets check to make sure you’ve not already updated Jekyll by running:

```
jekyll -v
```

Next up you need to enter:

```
gem update jekyll
```

Yes, seriously that is it!

---

Now after I updated, I had a couple of errors which were in regards to some missing items. I ran the following line which seemed to resolve my issues.

```
bundle install
```
