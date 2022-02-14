---
layout: article
title: Updating Rails 7
categories: rails development upgrade
---

Rails 7.0.0 is out!

Applications generated with Rails 7 will get Turbo and Stimulus (from Hotwire) by default, instead of Turbolinks and UJS.

Rails 7 now allows marking certain database fields as encrypted using the `encrypts` method on `ActiveRecord::Base`. So after an initial setup, you can write code like this:

```
class User < ApplicationRecord
  encrypts :phone
end
```

There is also a new default for debugging has changed from `byebug` to the [debug gem](https://edgeguides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem){:target="_blank"}.

Instead of calling `byebug`, you now need to call `debugger` in the code to enter a debugging session.

So let's get ourselves updated so we can use some of the new features in Rails 7.

```
gem install rails -v 7.0.0

rbenv rehash

# version should be >= Rails 7.0.0
rails -v

```
