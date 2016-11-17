---
layout:			  default
title:  		  Setting up Rails and Jekyll revisited
type:			    post
navigation: 	false

date:   		  2016-11-15
excerpt: 		  Recently I had to setup both Rails and Jekyll today on a fresh install of macOS. So I thought I would revisit setting up Rails and Jekyll in one article.
categories:		rails jeykll development
gradient: 		1
image: 			  articles/general/code.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

# Setting up Rails and Jekyll
Recently I had to setup both Rails and Jekyll on a fresh install of macOS. So I thought I would revisit setting up Rails and Jekyll and put them into one article.

I noticed a couple of changes since my previous articles, so I wanted to have a place I can use for my reference, yet would be helpful to others too.

<hr>

Ruby on Rails is pretty straightforward to install, but as in my previous article, there is some prep work first. You will need to make sure you have the latest version of Xcode installed before starting.

If you don’t have Xcode installed, you will need to pop over to the [Mac App Store](https://itunes.apple.com/gb/app/xcode/id497799835?mt=12) and download yourself a copy.

I noticed with Xcode 8.1 the command tools get installed automatically, and I didn’t need to install them. If you are unsure whether you have the command line tools installed, don’t worry. You will be alerted when you install Homebrew.

## Installing Homebrew
Next, we need to install [Homebrew](http://brew.sh) it comes with a very simple install script. If you skipped the previous step, it might ask you to install Xcode Command Line Tools, if asked just say yes.

`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

<hr>

## Installing Ruby
Now that we have Homebrew installed, we can use it to install Ruby. We're going to use [rbenv](https://github.com/sstephenson/rbenv) to install and manage our Ruby versions. To do this, run the following commands into iTerm2:

`$ brew install rbenv ruby-build`

Now we need to edit our `.bash_profile` and add `rbenv` to bash so that it loads every time you open a terminal.

`$ touch ~/.bash_profile; open ~/.bash_profile`

In the text editor window that opens add the following code:
```
if
   which rbenv > /dev/null; then eval "$(rbenv init -)"
 fi
```

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

<hr>

## Configuring Git
I use Git for my version control system, so we’re going to set it up to match our [Github](https://github.com) account. If you don't already have a Github account, make sure you [register](https://github.com/join) as it will come in handy for the future.

Replace the example name and email address in the following steps with the ones you used for your Github account.

```
$ git config --global color.ui true
$ git config --global user.name "your name"
$ git config --global user.email "your@email.com"
$ ssh-keygen -t rsa -C "your@email.com"
```

The next step is to take the newly generated SSH key and add it to your Github account. You want to copy and paste the output of the following command and paste it here.

`$ cat ~/.ssh/id_rsa.pub`

Once you've done this, you can check and see if it worked:

`$  ssh -T git@github.com`

You should get a message like this:

`Hi r3id! You've successfully authenticated, but GitHub does not provide shell access.``

Nice one! You have made it this far!

<hr>

## Ride the Rails
Installing Rails is really to install just enter the following command in iTerm2

`$ gem install rails`

Rails should now be installed, however for us to use the rails executable, we need to tell `rbenv` to see it:

```
$ rbenv rehash
```

Now lets just double check to make sure Rails has installed correctly. Run the following command in iTerm2

```
$ rails -v
Rails 5.0.0.1
```

<hr>

## Setting up our database
By default Rails uses [SQLite3](https://sqlite.org) while this is adequate for developing locally, you will need something better in production. My personal choice is [PostgreSQL](https://www.postgresql.org/), so I will cover installing this. But as a side note, you could always use MongoDB, or even MySQL if you wanted to.

We are going to use Homebrew to install our PostgreSQL server and client so open up iTerm2 and enter.

`$ brew install postgresql`

Once completed you need to run a couple of additional commands. Follow the instructions and run them.
```
# This will have launchd start postgresql at login:
$ ln -sfv /usr/local/opt/postgresql/*plist ~/Library/LaunchAgents

# And this will load postgresql now:
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```

The PostgreSQL default user is normally set to your current macOS username and has no password. Check out the [PostgreSQL docs](https://www.postgresql.org/docs/) for more info.

<hr>

## Let's create our first Rails site
Open up an iTerm2 window, and we'll get Rails to generate our new site which we will call "sample-app".

```
$ rails new sample-app -d postgresql
```

The command will create a new directory called `sample-app` and install your Rails app in there. You may have noticed the `-d postgresql`, well this tells Rails to set the Database to use [PostgreSQL](https://www.postgresql.org/). If you were to leave this off, Rails would by default use [SQLite3](https://sqlite.org).

Now we change into the directory that we created.

```
$ cd sample-app
```

As a final step, we create the database

```
$ rails db:create
```

Now in a similar method to Jekyll, we run the following command to start up our Rails server.

```
$ rails s
```

You could run `rails s` or `rails server` they are both the same thing its more personal preference.

So now you have Rails setup and your server running, all that's left to do is to visit [http://localhost:3000](http://localhost:3000) to view your new Rails app in your browser of choice.

<hr>

## Moving onto Jekyll
So Jekyll is where I noticed the main changes. Nothing too major really, but still it's nice to have them documented. So fire up iTerm2 and enter the following command

`$ gem install jekyll bundler`

Once this has done its thing let's make sure Jekyll installed by typing `jekyll -v`

<hr>

## Working with Jekyll
So now you have Jekyll installed we can move on to the fun stuff, creating and running your first Jekyll site.

So let’s take our first step’s to create a new site, for this we need to change directory. I have a `source` directory which resides inside my `documents` directory, so let’s go to that within iTerm2.

Switch over to iTerm2 and type the following command, and this will change us in our source directory. Make sure we have this created first!

`$ cd source`

We now want to create our first site! In iTerm2 enter

`$ jekyll new my-site`

Jekyll then creates a folder structure which contains the files needed for our new site. Once this has completed, we’ll need to switch to our newly created site directory.

Switch back into iTerm2 enter
`$ cd my-site`

You should now be in your newly created site directory, and you will be pleased to know we're coming to the end of this article!

So there’s one more command that needs to be run, and this is where the magic happens! Back into terminal we go and enter `$ jekyll s` you could also enter `$ jekyll serve`. The command simply starts up the Jekyll server locally.

And we’re done! So now in the background Jekyll is humming away watching our site files, so as you edit your sites files the site will update and rebuild. There are some things you’ll need to look out for; occasionally things won’t update this maybe because you have updated your configuration file. If this does happen, simply hit `CTRL + C` inside terminal to cancel/stop Jekyll. And then restart the site again by using the `$ jekyll s` command.

And that’s about it for now. I will be covering more on Jekyll in future articles, thanks for taking the time to read this.

*“Wait!!!! How do I view my site?”* I hear you say…

That’s an excellent point! So to view the site we have just made point your browser of choice to [http://127.0.0.1:4000](http://127.0.0.1:4000) or [http://localhost:4000](http://localhost:4000) (they are the same thing!) and you will be able to view the site. Now what you do is totally down to you, but the default site is a great starting point. Now, off you go build something awesome!

## Final words...
Well, I hope you have found this article useful. I wanted to get this written down as there is a lot to cover, however by the end of the article you should have two working environments to develop in.

Jekyll is fantastic for creating simple blog sites, which can be hosted on GitHub Pages. While Rails as a framework can be used to create some excellent solutions, just look at Airbnb and YouTube! Anyhow, off your trott, build something amazing!
