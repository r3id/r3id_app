---
layout: post
title: CSS only toggle switch
categories: css sass
---

Today I am going to build up a CSS toggle switch. We will be basing the style to that of the ones used on the iPhone. We won't be using any JS for this just some clever CSS.

<div class="image-center">
<img src="assets/images/articles/toggle-switch.png" width="300"/>
</div>

<hr>

So let's start off by creating the HTML layout. We will be using a checkbox, along with the Pseudo selectors `:checked`, `:before` and `:after` to get our toggle looking like the one pictured above.

```
<form action="#">
  <div class="switch">
    <input id="sw1" type="checkbox" class="switch-input">
    <label for="sw1" class="switch-label">Switch</label>
  </div>
</form>
```

Next up we will write out our CSS, I would recommend using Sass to set some variables, but for this article, we'll use plain old CSS.
Notice we use transitions on `.switch-label:before` and `.switch-label:after` the transitions provide that animation a starting point for our animation.

To finish up, we set the background colour and the position the aformentoned classes. These classes let our transitions know what they need to do sure our transitions work properly.

```
/* Switch Container */
.switch {
  position: relative;
  display: inline-block;
}

/* Hide the checkbox input (only needed for `:checked` property) */
.switch-input {
  display: none;
}

/* Switch */
.switch-label {
  display: block;
  width: 55px;
  height: 28px;
  padding: 0;
  text-indent: -150%;
  clip: rect(0 0 0 0);
  color: transparent;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.switch-label:before,
.switch-label:after {
  content: "";
  display: block;
  position: absolute;
  cursor: pointer;
}
.switch-label:before {
  width: 100%;
  height: 100%;
  background-color: #dedede;
  border-radius: 9999em;
  -webkit-transition: background-color 0.25s ease;
  transition: background-color 0.25s ease;
}
.switch-label:after {
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
  -webkit-transition: left 0.25s ease;
  transition: left 0.25s ease;
}

/* When input is checked */
.switch-input:checked + .switch-label {

}
.switch-input:checked + .switch-label:before {
  background-color: #4bd763;
}
.switch-input:checked + .switch-label:after {
  left: 30px;
}

```

Now below we have a demo of what we have just made. You can use this in a form instead of a checkbox, or you could hook it up to some JavaScript for fire an event.

Because its based on a checkbox you have quite a bit of freedom on how you wish to use it.

You can download the [source here](https://gist.github.com/r3id/baf83e79c0e789fd239f3a1cf040c7ac){:target="_blank"}.

<div class="demo-holder">
  <form action="#">
    <div class="switch">
      <input id="switch-1" type="checkbox" class="switch-input">
      <label for="switch-1" class="switch-label">Switch</label>
    </div>
  </form>

  <style>
  form {
    margin: 0 auto;
    width: 50px;
  }
  .switch {
    position: relative;
    display: inline-block;
  }
  .switch-input {
    display: none;
  }
  .switch-label {
    display: block;
    width: 55px;
    height: 28px;
    padding: 0;
    text-indent: -150%;
    clip: rect(0 0 0 0);
    color: transparent;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  .switch-label:before,
  .switch-label:after {
    content: "";
    display: block;
    position: absolute;
    cursor: pointer;
  }
  .switch-label:before {
    width: 100%;
    height: 100%;
    background-color: #dedede;
    border-radius: 9999em;
    -webkit-transition: background-color 0.25s ease;
    transition: background-color 0.25s ease;
  }
  .switch-label:after {
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.45);
    -webkit-transition: left 0.25s ease;
    transition: left 0.25s ease;
  }
  .switch-input:checked + .switch-label {
  }
  .switch-input:checked + .switch-label:before {
    background-color: #4bd763;
  }
  .switch-input:checked + .switch-label:after {
    left: 30px;
  }
  </style>
</div>
