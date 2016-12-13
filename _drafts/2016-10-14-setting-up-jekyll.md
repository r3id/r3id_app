---
layout:			  default
title:  		  Setting up Jekyll
type:			    post
navigation: 	false

date:   		  2016-10-16
excerpt: 		  Setting up Jekyll is really simple, in this article we take things a step further.
categories:		jekyll
gradient: 		1
image: 			  articles/setting-up-jekyll/jekyll-elcap-install.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

Late last year I began moving my existing sites over to [Jekyll](https://jekyllrb.com/) from asp.net MVC. Why? I hear you ask, well I had found that a lot of the sites didn’t require a lot of the features offered by the .net framework, and it seemed like overkill using it.

I decided it was time to change, so I set myself some goals. I wanted to reduce development time, reduce the hosting resources which I was using (along with costs), and most important learn something new.

Armed with these I started to scour Google and look around for something. As I explored the interweb, I stumbled upon an interesting thing called [Jekyll](https://jekyllrb.com/), and I liked what I saw.

Jekyll is quite simply a website generator. It takes a template directory containing raw text files in various formats, such as Markdown, or HTML, and runs those files through converters, it then generates a static HTML website which can get deployed on almost any web server.

If you require users to log in or create accounts, you will need to look at a server side language like asp.net, PHP or even Ruby (Jekyll itself is a [Ruby gem](https://rubygems.org/gems/jekyll)).

Ok, so with that out of the way let’s move on. My aim in this post is to help you get Jekyll installed on macOS and get you started with a basic Jekyll site. In later articles we'll discuss how to expand your site further.

<hr>

First things first, you will need to download and install XCode (8.0) from the [Mac App Store](https://itunes.apple.com/gb/app/xcode/id497799835?mt=12).

XCode once came with the Command Line Tools, but now you have to install them separately. The easiest way to install them is to open up terminal (I personally use [iTerm 2](https://www.iterm2.com)) and install them using the following command

`$ xcode-select -install`

{% include media-image.html file="articles/setting-up-jekyll/install-xcode.png" title="Getting started" caption="Install the XCode command line tools" %}

## Installing Homebrew
Next up we need to install Homebrew - [http://brew.sh](http://brew.sh)
It comes with a very simple install script. If you skipped the previous step it may ask you to install XCode Command Line Tools, if asked just say yes.

`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

{% include media-image.html file="articles/setting-up-jekyll/installing-homebrew.png" title="Getting started" caption="Installing homebrew" %}

## Installing Ruby
Now that we have Homebrew installed, we can use it to install Ruby. We're going to use [rbenv](https://github.com/sstephenson/rbenv) to install and manage our Ruby versions. To do this, run the following commands in your Terminal:

`$ brew install rbenv ruby-build`

Now we need to edit our `.bash_profile` and add `rbenv` to bash so that it loads every time you open a terminal.

`$ touch ~/.bash_profile; open ~/.bash_profile`

In the text editor window that opens add the follow code:
```
if
   which rbenv > /dev/null; then eval "$(rbenv init -)"
 fi
```

{% include media-image.html file="articles/setting-up-jekyll/edit-bash-profile.png" title="Getting started" caption="Edit your .bash_profile" %}

Once you have saved your `.bash_profile` we can then install Ruby.

We will be installing the current version of Ruby (2.3.1), so enter the following commands into your terminal window.

```
# Install Ruby.
$ rbenv install 2.3.1

# Set our main version to the latest version.
$ rbenv global 2.3.1

# Check out ruby version.
$ ruby -v
```

{% include media-image.html file="articles/setting-up-jekyll/ruby-installed.png" title="Getting started" caption="If Ruby has installed correctly you should see similar" %}

## Configuring Git
I use Git for my version control system so we're going to set it up to match our [Github](https://github.com) account. If you don't already have a Github account, make sure to [register](https://github.com/join). It will come in handy for the future.

Replace the example name and email address in the following steps with the ones you used for your Github account.

```
git config --global color.ui true
 git config --global user.name "Your Name"
 git config --global user.email "your@email.com"
 ssh-keygen -t rsa -C "your@email.com"
```

The next step is to take the newly generated SSH key and add it to your Github account. You want to copy and paste the output of the following command and paste it here.

`cat ~/.ssh/id_rsa.pub`

Once you've done this, you can check and see if it worked:

`ssh -T git@github.com`

You should get a message like this:

`Hi r3id! You've successfully authenticated, but GitHub does not provide shell access.``

Nice one! You have made it this far. Really not much to do now other than install Jekyll, so let's crack on.

## Installing Jekyll
Open up your terminal window and enter...

`gem install jekyll bundle`

{% include media-image.html file="articles/setting-up-jekyll/jekyll-install.png" title="Getting started" caption="Let's install Jekyll" %}

Let's make sure Jekyll installed by typing `jekyll -v`

{% include media-image.html file="articles/setting-up-jekyll/jekyll-version.png" title="Getting started" caption="If Jekyll installed correctly you should see the version you have installed" %}

## Final Steps: Working with Jekyll
Now hopefully you have Jekyll installed so we can move on to the fun stuff, creating and running your first Jekyll site.

So let’s take our first step’s to create a new site, for this we need to change directory. I have a `source` directory which resides inside my `documents` directory, so let’s go to that within our terminal.

Switch over to terminal and type the next command, this will put us in our dev directory. Make sure we have this created first ;).

`$ cd source`

Now let’s make our first site! Once again in terminal enter

`$ jekyll new my-site`

Jekyll then creates a folder structure which contains the files needed for our new site. Once this has completed we’ll need to switch to our newly created site directory.

Once again within terminal enter
`$ cd my-site`

We should now be in your newly created site, and we are almost done! Yes, it’s that easy.

{% include media-image.html file="articles/setting-up-jekyll/jekyll-new-site.png" title="Getting started" caption="Our newly created Jekyll site" %}

So there’s one more command that needs to be run, and this is where the magic happens! Back into terminal we go and enter `$ jekyll s` you could also enter `$ jekyll serve`. This simply starts up the Jekyll server locally.

{% include media-image.html file="articles/setting-up-jekyll/jekyll-serve.png" title="Getting started" caption="The Jeykll server is now running" %}

And we’re done! So now in the background Jekyll is humming away watching our site files, so as you edit your sites files the site will update and rebuild. There are some things you’ll need to watch out for, occasionally things won’t update this maybe because you have updated your configuration file. If this does happen simply hit `CTRL + C` inside terminal to cancel/stop Jekyll. And then restart the site again by using the `$ jekyll s`command.

And that’s about it for now. I will be covering more on Jekyll in future articles, thanks for taking the time to read this.

*“Wait!!!! How do I view my site?”* I hear you say…

That’s a very good point! So to view the site we have just made point your browser of choice to [http://127.0.0.1:4000](http://127.0.0.1:4000). or [http://localhost:4000](http://localhost:4000) (they are the same thing!) and you will be able to view the site. Now what you do is totally down to you, but the default site is a great starting point. Now, go build something awesome!
