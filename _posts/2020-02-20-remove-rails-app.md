---
layout: post
title:  "Rails Snippet: Delete DB and App"
categories: rails
---

So you have created your rails app only to realise you have made some kind of error. You could delete it, but that may mean you can’t reuse the folder name straight away.

The easiest way around this is to use terminal and cd into the directory.

Once in the directory run the following command in the terminal
```
$ rails db:drop
$ cd .. && rm -rf app_name
```

First off we drop our database for the app, you may need to close off any connections that are active if you have already started development see my other article about [force dropping a database](/force-drop).

Next up we tell the terminal to `cd ..` which means go out of the directory you’re in. We then get to the terminal to `&& rm -rf` which basically is saying remove all the files and delete the folder of our app.

Once this has executed your app and database will have been removed.
