---
layout:			  default
title:  		  Add some colour to iTerm
type:			    post
navigation: 	false

date:   		  2017-02-09

excerpt: 		  By default iTerm looks a little borning, so lets add some colour to it!
categories:		general
gradient: 		1
image: 			  articles/general/code.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

Open iTerm2 and enter `- touch ~/.bash_profile; open ~/.bash_profile`

This will open our bash_profile document

```
# bash_profile
if
  which rbenv > /dev/null; then eval "$(rbenv init -)"
fi

#Git branch in promp and colours
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
export PS1="@\[\033[33;1m\]\w\[\033[m\]:\[\033[36m\]\$(parse_git_branch)\[\033[m\]$ "

parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
```
