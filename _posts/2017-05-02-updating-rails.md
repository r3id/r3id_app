---
layout:			  default
title:  		  Updating Rails
type:			    post
navigation: 	false

date:   		  2017-05-02

excerpt: 		  Rails 5.1 was released on April, 27. So lets have a look at updating our current install.
categories:		general rails
gradient: 		1
image: 			  articles/general/code.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

So previously when we were setting up Rails we installed Rails 5.0.1, so in today we are going to go over how you would update to the latest Rails release.

This will be a really short article as it and all we need to do its enter the following lines, and we will install Rails 5.1 (check [rubyonrails.org](http://rubyonrails.org/) for the latest version).

Once Rails has been updated we will need to tell `rbenv` to use to use it by default.

```
$ gem install rails -v 5.1
$ rbenv rehash
$ rails -v
# Rails 5.1.0
```

Not as bad as you thought? Well why make things harder than they need to be. Anyway, as you see running `rails -v` we can make sure we are now running the latest Rails version.
