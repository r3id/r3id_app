---
layout: post
title:  Installing Jekyll on Mac OSX El Capitan
date:   2015-10-27 00:00:00
categories: jekyll development update
---

30th September has been and now gone. And with it a new Mac OSX update has arrived. This is great news, unless you have installed Jekyll using the standard `gem install jekyll` method.

So what’s the issue? Well, it would appear Apple is has upped their game with System Integrity Protection (SIP) which further restricts write access to some system directories. This includes the Ruby directory within Library the default location that comes with Mac OS.

Due to this when we try to use Jekyll to create new sites, or compile and serve them we get errors.

What’s the fix? I’ve been following some conversations on GitHub in relation to this and it would appear the easiest way around the issue is to install home brew ruby. I’ll run through this method below.

First off, make sure you have installed Xcode from the [Mac App Store](https://itunes.apple.com/gb/app/xcode/id497799835).

Next, fire up terminal, and enter the following to install the Xcode command line utilities: `xcode-select --install`

Next up install Homebrew, follow the instructions over at [http://brew.sh](http://brew.sh), its pretty easy to follow.

Now we need to modify $PATH to use our Homebrew install: `export PATH=/usr/local/bin:$PATH`

Then we modify $PATH for GUI apps: `launchctl setenv PATH “/usr/local/bin:$PATH”`

Not much more to do now, so let’s install the latest Ruby: `brew install ruby`

Finally we install the latest Jekyll, once Jekyll has installed we are back up and running as normal: `gem install jekyll`

*Note: Homebrew is designed to work without using sudo.*

So there you go, we are done. Hopefully this helps other Jekyll users out a bit, and avoid all the searching i had to do, when trying to work out what the issue was!
