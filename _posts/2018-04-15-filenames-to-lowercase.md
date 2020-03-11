---
layout: post
title:  "How to: Set all file names in a directory to lowercase"
categories: files editing
---

I was moving a blog from Wordpress to a Jekyll site, and after finally managing to import all my posts I found a slight issue, my file names all had an uppercase character to start each word. **:sigh:**

_“Crap!”_ was one of the words that came to mind, as now my URL’s were also in this format. I personally prefer URL’s in lowercase - i suppose its a spaces vs. tabs kinda thing.

So after a little investigation I came across a handy little terminal snippet.
So, first off we need to be in our directory with the offending files

```
$ cd your-dir
```

Next we will enter the much needed snippet...
```
$ for i in *; do mv "$i" "$(echo $i|tr A-Z a-z)"; done
```

This terminal snippet will loop through each file in the current directory, and rename the files to lower case! Yay!! My OCD has been appeased for the day ✊
