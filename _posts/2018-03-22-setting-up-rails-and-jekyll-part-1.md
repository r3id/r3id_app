---
layout: post
title: Setting up Rails and Jekyll (Part 1)
categories: jekyll rails homebrew setup
---

_I took the plunge back in June 2016 and decided to learn Ruby on Rails after many years developing within a .NET environment. Five months later I had discovered a new love for back-end development, heck I don’t know it all, but now I feel that I have a good level of understanding and there is an amazing community out there for support._

In the first part we are going to go over installing Rails. I use Rails for pretty much any site which needs anything data related. Jekyll is perfect for static sites, or sites which don’t rely on a database, but still need a simple way to update.

---

_**Please note:** I recently posted an update to setting up [Rails on a Mac](/rails-6-in-macos-catalina). Since macOS Catalina was released Apple moved the default terminal over to ZSH._

---

Ruby on Rails is pretty straightforward to install. There is however some prep work first. You will need to make sure you have the latest version of Xcode installed before starting.

If you don’t have Xcode installed, you will need to pop over to the Mac App Store and download yourself a copy.
I noticed with Xcode 8.1 the command tools get installed automatically, and I didn’t need to install them. If you are unsure whether you have the command line tools installed, don’t worry. You will be alerted when you install Homebrew.

## Installing Homebrew
Next, we need to install Homebrew it comes with a very simple install script. If you skipped the previous step, it might ask you to install Xcode Command Line Tools, if asked just say yes.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Installing Ruby

Now that we have Homebrew installed, we can use it to install Ruby. We’re going to use `rbenv` to install and manage our Ruby versions. To do this, run the following commands into iTerm2:
```
brew install rbenv ruby-build
```

Now we need to edit our .bash_profile and add `rbenv` to bash so that it loads every time you open a terminal.

```
touch ~/.bash_profile; open ~/.bash_profile
```

In the text editor window that opens add the following code:
```
if
  which rbenv > /dev/null; then eval "$(rbenv init -)";
fi
```

Once you have saved your .bash_profile we can then install Ruby.

We will be installing the current version of Ruby (2.6.3), so enter the following commands into your terminal window.

```
# Install Ruby.
rbenv install 2.6.3
# Set our main version to the latest version.
rbenv global 2.6.3
# Check out ruby version.
ruby -v
```

## Configuring Git
I use Git for my version control system, so we’re going to set it up to match our Github account. If you don’t already have a Github account, make sure you register as it will come in handy for the future.
Replace the example name and email address in the following steps with the ones you used for your Github account.

```
git config --global color.ui true
git config --global user.name “your name”
git config --global user.email “your@email.com”
ssh-keygen -t rsa -C “your@email.com”
```

The next step is to take the newly generated SSH key and add it to your Github account. You want to copy and paste the output of the following command and paste it here.
```
cat ~/.ssh/id_rsa.pub
```
Once you’ve done this, you can check and see if it worked:
```
ssh -T git@github.com
```
You should get a message like this:
```
Hi r3id! You’ve successfully authenticated, but GitHub does not provide shell access.
```

Nice one! You have made it this far!

## Ride the Rails
Installing Rails is really to install just enter the following command in iTerm2
```
gem install rails
```

Rails should now be installed, however for us to use the rails executable, we need to tell `rbenv` to see it:
```
rbenv rehash
```
Now lets just double check to make sure Rails has installed correctly. Run the following command in iTerm2
```
rails -v
Rails 5.2.3
```
## Setting up our database

By default Rails uses SQLite3 while this is adequate for developing locally, you will need something better in production. My personal choice is PostgreSQL, so I will cover installing this. But as a side note, you could always use MongoDB, or even MySQL if you wanted to.

We are going to use Homebrew to install our PostgreSQL server and client so open up iTerm2 and enter.
```
brew install postgresql
```

Once completed you need to run a couple of additional commands. Follow the instructions and run them.
```
# This will have launchd start postgresql at login:
ln -sfv /usr/local/opt/postgresql/*plist ~/Library/LaunchAgents
# And this will load postgresql now:
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```

The PostgreSQL default user is normally set to your current macOS username and has no password. Check out the PostgreSQL docs for more info.

## Let’s create our first Rails site
Open up an iTerm2 window, and we’ll get Rails to generate our new site which we will call “sample-app”.
```
rails new sample-app -d postgresql
```

The command will create a new directory called `sample-app` and install your Rails app in there. You may have noticed the `-d postgresql`, well this tells Rails to set the Database to use PostgreSQL. If you were to leave this off, Rails would by default use SQLite3.
Now we change into the directory that we created.
```
cd sample-app
```

As a final step, we create the database

```
rails db:create
```
Now in a similar method to Jekyll, we run the following command to start up our Rails server.

```
rails s
```

You could run rails s or rails server they are both the same thing its more personal preference.
So now you have Rails setup and your server running, all that’s left to do is to visit [http://localhost:3000](http://localhost:3000){:target="_blank"} to view your new Rails app in your browser of choice.
Next up we will move on to installing Jekyll so i will see you in [part 2](/setting-up-rails-and-jekyll-part-2)!
