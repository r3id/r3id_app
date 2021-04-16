---
layout: article
title: Updating Ruby
categories: rails updateruby homebrew
---

So previously when we were setting up Rails we installed Ruby, so in this post we are going to go over how you would update your Ruby version.

As you may remember we are using `rbenv` to manage our Ruby versions. And this was installed on top of [Homebrew](https://brew.sh/){:target="_blank"}.
The following lines are used to install Ruby 2.7.2 (check [ruby-lang.org](https://www.ruby-lang.org){:target="_blank"} for the latest version) and set it as your default Ruby version:

```
brew update

brew upgrade ruby-build

rbenv install 2.7.2

rbenv global 2.7.2

# version should be >= Ruby 2.7.2
ruby -v
```

An that's it, you've updated Ruby to the latest version.
