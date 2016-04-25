---
layout: post
title:  Getting started with Jekyll
date:   2015-09-18 00:00:00
categories: jekyll development
---

So here it is my first post... finally! Let's get the ball rolling and get straight into things.

For the last couple of months I've been moving some existing sites over to [Jekyll](http://jekyllrb.com) from [.NET MVC](https://asp.net/mvc). Why? I hear you ask, well I have found that a lot of the sites didn't really require a lot of the features offered by the .NET framework, so it seemed like overkill to use it.

With that I decided what I wanted to achieve. My goals were to reduce development time, reduce the hosting resources I'm currently using (along with costs), and most important learn something new.

Armed with this I started to scour Google and look around for something. During my time exploring the interweb I stumbled upon and interesting thing called [Jekyll](http://jekyllrb.com), and I really liked what I saw.

Jekyll is quite simply a website generator. It takes a template directory containing raw text files in various formats, such as Markdown, or HTML, and runs those files through converters, it then generates a static HTML website that can be hosted on pretty much any web server.

If you require users to login, or create accounts you will need to look at a server side language like [.NET](https://asp.net), [PHP](http://php.net) or even [ruby](https://www.ruby-lang.org/en/) (Jekyll is installed as a ruby gem).

## Installing Jekyll
Ok, so with that out of the way let's move on. My aim in this post is to help you get Jekyll installed on MacOS (I will look at a Windows install post later) and get you started with a basic Jekyll site, following posts will discuss how to expand your site further.

- Download and install Xcode from the [Mac App Store](https://itunes.apple.com/gb/app/xcode/id497799835).
- Xcode once came with the Command Line Tools, but now you have to install them separately. Within Xcode, go to **Preferences > Downloads**, and install them. You can also use terminal (I use [iTerm 2](https://www.iterm2.com/)) to install them by using the following command `$ xcode-select -install`
- In terminal enter `$ sudo gem install jekyll` to install Jekyll. You will see several gems install once complete finishes up our install.

Now hopefully you have Jekyll installed so we can move on to the fun stuff, creating and running your first Jekyll site. If you did run into issues feel free to message me on [Twitter (@alr3id)](https://twitter.com/alr3id) and I'll see if i can help.

## Building our first site
So let's take our first step's to create a new site, for this we need to change directory. I have a **source** directory living inside my **documents** directory, so let's go to that within our terminal.

Switch over to terminal and type `$ cd documents/source` this will put you in our dev directory. Make sure you have this created first ;).

Now let's make our first site! Once again in terminal enter `$ jekyll new my-site`. Jekyll then creates a folder structure which contains the files needed for your new site. Once this has completed we'll need to switch to our newly created site directory.

Once again within terminal enter `$ cd my-site`. You should now be in your newly created site, we are almost done.

So there's one more command that needs to be run, and this is where the magic happens! Back into terminal you go and enter `$ jekyll serve`.

And you're done! So now in the background Jekyll is humming away watching your sites files, so as you edit your sites files your site will update. There are some things you need to watch out for, and occasionally things won't update this might because you have updated your configuration file.

If this happens simply hit **CTRL + C** to cancel the Jekyll serve command. And the restart the site using `$ jekyll serve`.

And that's about it for now. We will cover more Jekyll items in future articles, thanks for taking the time to read this post.

"Wait!!!!" I hear you say, "how do I view my site?".

Well simple visit  or  (they are the same thing!) in your chosen browser. Enjoy!

That’s a very good point! So to view the site we have just made point your favourite browser to [http://127.0.0.1:4000](http://127.0.0.1:4000). or [http://localhost:4000](http://localhost:4000) (they are the same thing!) and you will be able to view the site. Now what you do is totally down to you, but the default site is a great starting point. Now, go build something awesome!
