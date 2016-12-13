---
layout:			  default
title:  		  Setting up Rails
type:			    post
navigation: 	false

date:   		  2016-10-24
excerpt: 		  Following on from my article on Setting up Jekyll we will now move on to setting up Rails.
categories:		rails development
gradient: 		1
image: 			  articles/setting-up-rails/setting-up-rails.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

I finally took the plunge back in June and decided to learn [Ruby on Rails](http://rubyonrails.org/). Five months on I have discovered a new love for back-end development, heck I don’t know it all, but now I feel that I have a decent level of understanding and there is an amazing community out there for support.

One must read book is [The Rails Tutorial](https://www.learnenough.com/), by Michael Hartl. It is one of the best places to start learning rails. And I must give a **huge shout** out to Chris Oliver over at [GoRails](http://gorails.com) for providing some of the best resources out there. Not to mention the community he has built up there, and has helped me out more than once!

Anyway on with the show. Today we are setting up Ruby on Rails; I am once again on my Mac. I am assuming you have followed my previous article and already have [Homebrew](http://brew.sh/) and [Ruby](https://www.ruby-lang.org/) installed. If not check out my [setting up Jekyll](/blog/setting-up-jekyll/) post.

<hr>

Installing Rails is really simple

```
gem install rails -v 5.0.0.1
```
{% include media-image.html file="articles/setting-up-rails/rails-install.png" %}

Rails should now be installed, however for us to use the rails  executable, we need to tell `rbenv` to see it:

```
rbenv rehash
```
{% include media-image.html file="articles/setting-up-rails/rails-rbenv.png" %}

Now lets just double check to make sure Rails has installed correctly. Run the following command in your terminal window.

```
rails -v
# Rails 5.0.0.1
```

{% include media-image.html file="articles/setting-up-rails/rails-version.png" %}

## Lets create our first Rails site

First off we have rails create our new site. We shall call this "sample-app".

```
rails new sample-app
```

The command will create a new directory called `sample-app` and install your Rails app in there.

{% include media-image.html file="articles/setting-up-rails/rails-new-app.png" %}

Now we change into the directory that we created.

```
cd sample-app
```

As a final step, we create the database *(by default Rails uses sqlite3. We will cover databases in a later article.)*

```
rails db:create
```

Now in a similar method to Jekyll, we run the following command to start up our Rails server.

```
rails s
```

You could run `rails s` or `rails server` they are both the same thing its more personal preference.

So now you have Rails setup and your server running, all that's left to do is to visit [http://localhost:3000](http://localhost:3000) to view your new Rails app in your browser of choice.
