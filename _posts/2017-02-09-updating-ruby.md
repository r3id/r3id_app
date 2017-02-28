---
layout:			  default
title:  		  Updating Ruby
type:			    post
navigation: 	false

date:   		  2017-02-09

excerpt: 		  Ruby has been updated, so lets go over how we update our Ruby version.
categories:		general
gradient: 		1
image: 			  articles/general/code.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

So previously when we were setting up Rails we installed Ruby 2.3.1, so in this post we are going to go over how you would update your Ruby version.

As you may remember we are using `rbenv` to manage our Ruby versions. And this was installed on top of [Homebrew](http://brew.sh/).

The following lines are used to install Ruby 2.4.0 (check [ruby-lang.org](http://ruby-lang.org) for the latest version) and set it as your default Ruby version:

```
$ brew update
$ brew upgrade ruby-build
$ rbenv install 2.4.0
$ rbenv global 2.4.0
$ ruby -v
```

Not as bad as you thought? Well why make things harder than they need to be. Anyway, as you see we ran `ruby -v` just to make sure we are now running the latest Ruby version.
