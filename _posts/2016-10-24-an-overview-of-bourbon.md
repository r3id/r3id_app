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

As some of you maybe aware i created a Sass Library called "[Doughnut](/casestudy/doughnut-css/)", its pretty awesome if i don't say so myself. It has served me well on a few personal projects i have worked on. However, there are many others out there which are far more mature. In this post i am going to do a quick overview of one that has really stood out to me the most due to its really simplicity and ability to add features quickly.

Please welcome Bourbon...

{% include media-image.html file="articles/an-overview-of-bourbon/bourbon-logo.png" %}

## Bourbon
[Bourbon](http://bourbon.io) is a semantic, lightweight, yet extensive mixin library which makes the development of a site much quicker and easily maintainable. Containing up-to-date mixins, vendor prefixes and variables sheet makes it very easy to maintain and make site wide changes with little fuss.

Bourbon is part of a expanding family of other useful tools also developed by the team over at [thoughtbot](https://thoughtbot.com).

## Neat
[Neat](http://neat.bourbon.io) is a semantic grid framework built on top of Sass and Bourbon. It is simple enough to get you up and running in minutes, and powerful enough to handle pretty much any responsive layout you can dream of.

## Bitters
[Bitters](http://bitters.bourbon.io) give us “scaffold styles, variables and structure for Bourbon projects”. Giving us a basic set of variables and default styling for fast use. These can be customized easily so give you an excellent starting point.

## Refills
[Refills](http://refills.bourbon.io) is basically a component library which gives you OOTB componenets and patterns built using both bourbon and neat. Refills are built using jQuery so if you’re using angular or react or simply don’t want to use jQuery you will need to create your own components or re-write them.

## Installing Bourbon

In Rails its a very simple to install. Simply switch to your selected project using your terminal install the Bourbon gem file.

`$ gem bourbon`

The run:

`$ bundle install`

Restart your server. Then rename application.css to application.scss:

```
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
```

Delete the sprocket directive in application.scss:

`*= require_tree .`

Import Bourbon at the beginning of application.scss. All additional stylesheets must be imported below Bourbon:

```
@import "bourbon";
@import 'neat';
``

## Mixin Examples
Using a mixin:
```
header {
  @include linear-gradient(to top, $primary-color-1, $secondary-color-2);
}
```

Compiled CSS:
```
header {
  background-color: $primary-color;
  background-image: -webkit-linear-gradient(bottom, $primary-color-1, $secondary-color-2);
  background-image:         linear-gradient(to top, $primary-color-1, $secondary-color-2);
}
```
Here’s just a couple of mixin examples that I’ve used frequently and recommend checking out (includes up-to-date vendor prefixes where required):

```
//Animations
.intro-text {
    @include animation-duration(2s);
}
//Flex - for grid's please refer to 'Neat' as per above.
.container {
    @include display(flex);
}
.container {
    article {
       @include flex(1);
    }
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
## Function Examples
One of my most used functions is the Pixels and Rems conversion function as seen below.

Assuming 1rem is equal to 16px. You can override this by defining a new size for the `$em-base`.

```
font-size: rem(12);
```

CSS Output
```
font-size: 0.75rem;
```

You can view the full list of mixins, functions and add-ons over on the [bourbon documentation page](http://bourbon.io/docs/).

## Conclusion
I really, really like Bourbon, mainly due to it’s “just enough” approach. Bourbon gives you more than enough to quickly create most of a sites styling, but also allows you to go a step further by providing the freedom to customize and add styles to it without becoming a pain to manage.

With the addition of Neat, Bitters and Refills thoughtbot's [Bourbon](http://bourbon.io) should be seriously considered on your next project.
