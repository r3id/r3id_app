---
layout:			  default
title:  		  An overview of Bourbon
type:			    post
navigation: 	false

date:   		  2016-10-24
excerpt: 		  Bourbon is not just a lovely tipple, but its also an awesome Sass mixin library, and much more!
categories:		jekyll
gradient: 		1
image: 			  articles/an-overview-of-bourbon/an-overview-of-bourbon.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

As some of you are aware, i created a Sass Library called "[Doughnut](/casestudy/doughnut-css/)", it's pretty awesome if I don’t say so myself. It has served me well on a few personal projects I have done. However, there are many others out there which are far more mature. In this post, i am going to do a quick overview of one that has stood out to me the most due to its simplicity and ability to add features quickly.

{% include media-image.html file="articles/an-overview-of-bourbon/bourbon-logo.png" %}

## Bourbon
[Bourbon](http://bourbon.io) is a semantic, lightweight, yet extensive mixin library which makes the development of a site much quicker and easily maintainable. Containing up-to-date mixins, vendor prefixes and variables sheet makes it very easy to maintain and write site-wide changes with little fuss. You can read in the [Bourbon docs](http://bourbon.io/docs/) about the dozens of others!

Here's a really simple example of a Bourbon mixin:

```

section {
  @include linear-gradient(to top, red, orange);
}

```

This compiles to:

```

section {
  background-color: red;
  background-image: -webkit-linear-gradient(bottom, red, orange);
  background-image:         linear-gradient(to top, red, orange);
}

```

And here’s just a couple of mixin examples that I’ve used (they also include the up-to-date vendor prefixes, where required):
```

//Animations
.intro-text {
    @include animation-duration(2s);
}

//Key Frames
.example {
    @include keyframes(fadeIn) {
        from {
           @include transform(scale(0));
        }
        to {
           @include transform(scale(1));
        }
     }
}

//Transitions
.example {
     @include transition(all 1.4s ease-in-out);
}

```

Bourbon also includes a great selection of [functions](http://bourbon.io/docs/#functions). One of my most used functions is the Pixels and Rems conversion function as seen below. Assuming 1rem is equal to 16px. (You can override this by defining a new size for the `$em-base`).

```
font-size: rem(12);
```

CSS Output
```
font-size: 0.75rem;
```


Developed by the team over at [thoughtbot](https://thoughtbot.com), Bourbon is part of an expanding family of other useful tools ([Neat](http://neat.bourbon.io), [Bitters](http://bitters.bourbon.io) and [Refills](http://refills.bourbon.io)) which have developed using Bourbon as a base, let's have a look at them now.

## Neat
[Neat](http://neat.bourbon.io) is a semantic grid framework built on top of Sass and Bourbon. It is simple enough to get you up and running in minutes, and powerful enough to handle virtually any responsive layout you can dream of building.

So instead of implementing the grid layout into my html markup:

```

<div class=“row”>
  <section>
    <aside class=“col-md-3”>
      ...
    </aside>
    <article class=“col-md-9”>
      ...
    </article>
  </section>
</div>

```

Bourbon Neat lets me implement the grid layout through Css:

```

section {
  @include outer-container;
  aside { @include span-columns(3); }
  article { @include span-columns(9); }
}

```

This makes my html markup stay clean and semantic:

```

<section>
  <aside>What is it about?</aside>
  <article>Neat is an open source semantic grid framework built on top of Sass and Bourbon…</article>
</section>

```

## Bitters
[Bitters](http://bitters.bourbon.io) a collection of base styles, typography, form styles, variables, and even includes an error message module. Bitters is not a library. [Thoughtbot](https://thoughtbot.com) has structured them in a way that is designed to be your starting point. Bitters are worth using and easy enough to edit to your liking.

## Refills
[Refills](http://refills.bourbon.io) are a collection of nifty UI components built using 'The Bourbon Family'. It has components and patterns built with Bourbon and Neat. It's a good thing to have in your tool belt because even if it's not really what you want, it gets you pretty close.


## Installing Bourbon

In Rails its a very simple to install. Switch to your selected project using your terminal install the Bourbon gem file.

```
$ gem bourbon
```

The run:

```
$ bundle install
```

Restart your server. Then rename `application.css` to `application.scss` this SCSS extension allows us to use Sass:

```
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
```

Delete the sprocket directive in application.scss:

```
*= require_tree .
```

Import Bourbon at the beginning of `application.scss`. All additional stylesheets should get imported below Bourbon:

```
@import "bourbon";
@import 'neat';
@import 'base/base' # This is for bitters
```

## Conclusion
I really, really like Bourbon, mainly due to it’s “just enough” approach. Bourbon gives you more than sufficient to create most of a site's styling quickly but also allows you to go a step further by providing the freedom to customise and add styles to it without becoming a pain to manage.

With the addition of Neat, Bitters and Refills thoughtbot’s [Bourbon](http://bourbon.io) should seriously be in the running for your next project.
