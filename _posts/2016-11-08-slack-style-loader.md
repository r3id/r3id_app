---
layout:			  default
title:  		  Slack style loader
type:			    post
navigation: 	false

date:   		  2016-11-08
excerpt: 		  Let's create a loader, which resembles the loader used by slack
categories:		html sass jquery development
gradient: 		1
image: 			  articles/general/code.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

Loaders are a nice way to keeping users informed that a page is loading, or that its simply doing something. It provides a gentle reassurance and feedback that we've not forgotten about the user, or that the page hasn't crashed or hung.

In todays post we are going to create a really simple loader based off of the one used by [Slack](https://www.slack.com).

{% include media-image.html file="articles/slack-loader/slack-logo.png" %}

<hr>

So to start off we need to add an element which will allow our CSS to build our loader. So lets create our element and give it the class name `loader`.

```
<div class="loader"></div>
```

Now on to creating our our Sass code. The first things we need to create are our variables, this will allow us to reference them later, and it keeps our SCSS clean and tidy - feel free to change the colours to suit your project.

```

$colors:
  rgba(225, 22, 101, 0.75)
  rgba(61, 186, 145, 0.75)
  rgba(112, 204, 220, 0.75)
  rgba(223, 168, 35, 0.75);
$size: 2.5em;
$thickness: 0.5em;

// Calculated variables.
$lat: ($size - $thickness) / 2;
$offset: $lat - $thickness;

```

With our variables in hand lets start to create our `.loader` class.


```

.loader {
  position: relative;
  width: $size;
  height: $size;
  transform: rotate(165deg);

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: $thickness;
    height: $thickness;
    border-radius: $thickness / 2;
    transform: translate(-50%, -50%);
  }

  &:before {
    animation: before 2s infinite;
  }

  &:after {
    animation: after 2s infinite;
  }
}

```

Now lets create our animations.

```

@keyframes before {
  0% {
    width: $thickness;
    box-shadow:
      $lat (-$offset) nth($colors, 1),
      (-$lat) $offset nth($colors, 3);
  }
  35% {
    width: $size;
    box-shadow:
      0 (-$offset) nth($colors, 1),
      0   $offset  nth($colors, 3);
  }
  70% {
    width: $thickness;
    box-shadow:
      (-$lat) (-$offset) nth($colors, 1),
      $lat $offset nth($colors, 3);
  }
  100% {
    box-shadow:
      $lat (-$offset) nth($colors, 1),
      (-$lat) $offset nth($colors, 3);
  }
}

@keyframes after {
  0% {
    height: $thickness;
    box-shadow:
      $offset $lat nth($colors, 2),
      (-$offset) (-$lat) nth($colors, 4);
  }
  35% {
    height: $size;
    box-shadow:
        $offset  0 nth($colors, 2),
      (-$offset) 0 nth($colors, 4);
  }
  70% {
    height: $thickness;
    box-shadow:
      $offset (-$lat) nth($colors, 2),
      (-$offset) $lat nth($colors, 4);
  }
  100% {
    box-shadow:
      $offset $lat nth($colors, 2),
      (-$offset) (-$lat) nth($colors, 4);
  }
}

```

Finally, this bit is optional, but this will let us center our loader.

```

html,
body {
  height: 100%;
}

.loader {
  position: absolute;
  top: calc(50% - #{$size / 2});
  left: calc(50% - #{$size / 2});
}

```

Below is a demo of our code.

<div class="demo-holder animated fadeInUp">
<div class="loader"></div>

<style>
.loader {
  margin: 0 auto;
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
}
.loader:before, .loader:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}
.loader:before {
  animation: before 2s infinite;
}
.loader:after {
  animation: after 2s infinite;
}

@keyframes before {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
  }
  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}
@keyframes after {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
  }
  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}
</style>
</div>

You can download the source code <a href="/assets/downloads/cal-clock.zip">here</a>.
