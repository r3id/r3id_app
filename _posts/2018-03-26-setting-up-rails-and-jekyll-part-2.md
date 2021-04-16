---
layout: article
title: Setting up Rails and Jekyll (Part 2)
categories: jekyll rails homebrew setup
---

So we are continuing on with our [Rails and Jekyll install](/setting-up-rails-and-jekyll-part-1). In part 2 we are going to now install Jekyll and get our basic site up and running.

## Moving onto Jekyll
So Jekyll is where I noticed the some minor changes to the way we install Jekyll over previous versions. So fire up iTerm2 and enter the following command
```
gem install jekyll bundler
```

Once this has done its thing let’s make sure Jekyll installed by typing
```
jekyll -v
```

## Working with Jekyll
So now you have Jekyll installed we can move on to the fun stuff, creating and running your first Jekyll site.
So let’s take our first step’s to create a new site, for this we need to change directory. I have a source directory which resides inside my documents directory, so let’s go to that within iTerm2.
Switch over to iTerm2 and type the following command, and this will change us in our source directory. Make sure we have this created first!
```
cd source
```

We now want to create our first site! In iTerm2 enter
```
jekyll new my-site
````

Jekyll then creates a folder structure which contains the files needed for our new site. Once this has completed, we’ll need to switch to our newly created site directory.

Switch back into iTerm2 enter
```
cd my-site
```

You should now be in your newly created site directory, and you will be pleased to know we’re coming to the end of this article!

So there’s one more command that needs to be run, and this is where the magic happens! Back into terminal we go and enter `jekyll s` you could also enter `jekyll serve`. The command simply starts up the Jekyll server locally.

And we’re done! So now in the background Jekyll is humming away watching our site files, so as you edit your sites files the site will update and rebuild. There are some things you’ll need to look out for; occasionally things won’t update this maybe because you have updated your configuration file. If this does happen, simply hit CTRL + C inside terminal to cancel/stop Jekyll. And then restart the site again by using the `jekyll s` command.

And that’s about it for now. I will be covering more on Jekyll in future articles, thanks for taking the time to read this.

> Wait!!!! How do I view my site?

That’s an excellent point! So to view the site we have just made point your browser of choice to [http://127.0.0.1:4000](http://127.0.0.1:4000){:target="_blank"} or [http://localhost:4000](http://localhost:4000){:target="_blank"} (they are the same thing!) and you will be able to view the site. Now what you do is totally down to you, but the default site is a great starting point. Now, off you go build something awesome!

## Final words…
Well, I hope you have found these articles useful. I wanted to get this guide written down as there is a lot to cover, however by the end of these articles you should now have two working environments which you can develop in.
Jekyll is fantastic for creating simple sites and blogs, which can be hosted on GitHub Pages. While the Rails as a framework can be used to create some excellent solutions, just look at Airbnb and YouTube! Anyhow, off your go, build something amazing and thanks for reading :-)
