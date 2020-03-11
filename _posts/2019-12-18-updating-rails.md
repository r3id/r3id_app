---
layout: post
title: Updating Rails
categories: rails development upgrade
---

So previously when we were setting up Rails we installed Rails, so in today we are going to go over how you would update to the latest Rails release.

This will be a really short article as it and all we need to do its enter the following lines, and we will install Rails 6.0.2.1 (check [rubyonrails.org](https://rubyonrails.org){:target="_blank"} for the latest version).

Once Rails has been updated we will need to tell `rbenv` to use to use it by default.

```
$ gem install rails -v 6.0.2.1
$ rbenv rehash
$ rails -v
# Rails 6.0.2.1
```

Not as bad as you thought? Well why make things harder than they need to be. Anyway, as you see running `rails -v` we can make sure we are now running the latest Rails version.
