---
layout: article
title:  "Rails 6 setup in macOS Monterey"
categories: macos catalina rails
---

My previous setup tutorials seemed to help a few people setup their Rails environment so I decided to create this updated version for the recently released macOS Monterey.

## Install NodeJS

Before we start you will need to make sure you have installed NodeJS. If you visit the NodeJS site at [https://nodejs.org/](https://nodejs.org/){:target="_blank"} and download and install the LTS package.
Once you have done this we can move on.

---

## Homebrew
Next up we need to install [Homebrew](http://brew.sh/){:target="_blank"} it comes with a very simple install script. During install you may be asked you to install Xcode Command Line Tools, if so just say yes.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

---

## Ruby

With Homebrew installed we can now move on to installing Ruby, the current version at time of writing this is (2.7.0). You will need to enter the following commands into your terminal window.

```
# Install Ruby.
rbenv install 3.0.2

# Set our main version to the latest version.  
rbenv global 3.0.2

# Check our ruby version.
ruby -v
```

---

## Oh-My-ZSH!

[Oh-my-ZSH](https://ohmyz.sh){:target="_blank"} is a fantastic tool for managing your zsh configuration

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```
nano ~/.zshrc
```

at the bottom add the following lines

```
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
```

---

## Git
I use Git for my version control system, so we’re going to set it up to match our [Github](https://github.com/){:target="_blank"} account. If you don’t already have a [Github](https://github.com/){:target="_blank"} account, make sure you [register](https://github.com/join){:target="_blank"} as it will come in handy for the future.

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

---

## Yarn
You now need to install Yarn. Yarn is a JavaScript a fast, reliable, and secure alternative npm client.

```
brew install yarn
```

---

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
Rails 6.1.4.1
```

## Setting up our database
By default Rails uses [SQLite3](https://sqlite.org/){:target="_blank"} while this is adequate for developing locally, you will need something better in production. My personal choice is [PostgreSQL](https://www.postgresql.org/){:target="_blank"}, so I will cover installing this. But as a side note, you could always use MongoDB, or even MySQL if you wanted to.

We are going to use Homebrew to install our PostgreSQL server and client so open up iTerm2 and enter.

```
brew install postgresql
```

To have “launchd” start postgresql at login, you will need to run the following command

```
brew services start postgresql
```

The PostgreSQL default user is normally set to your current macOS username and has no password. Check out the [PostgreSQL docs](https://www.postgresql.org/docs/){:target="_blank"} for more info.

---

## Let’s create our first Rails site
Open up an iTerm2 window, and we’ll get Rails to generate our new site which we will call “sample-app”.

```
rails new sample-app -d postgresql
```

The command will create a new directory called `sample-app` and install your Rails app in there. You may have noticed the `-d postgresql`, well this tells Rails to set the Database to use [PostgreSQL](https://www.postgresql.org/){:target="_blank"}. If you were to leave this off, Rails would by default use SQLite3.

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

You could run `rails s` or `rails server` they are both the same thing its more personal preference.

So now you have Rails setup and your server running, all that’s left to do is to visit [http://localhost:3000](http://localhost:3000){:target="_blank"} to view your new Rails app in your browser of choice.

---

As a final note, you may need to run to install webpacker, which is what Rails now uses to manage the asset pipeline.

```
rails webpacker:install
```
