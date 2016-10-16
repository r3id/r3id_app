---
layout:        default
title:         Case Study &#58; Doughnut CSS
type:          casestudy
navigation: 	 false

date:          2016-10-01
excerpt:       Doughnut is a simple, easy to use, mobile first CSS boilerplate, built using Sass, which can help kickstart any project into life.
categories:    Development Design
tech:          HTML 5, Sass, CSS
image:         cs/doughnut/doughnut.png
details:       false
external-url:  http://doughnut.r3id.io
---

## Challenge
There are many CSS libraries and frameworks out there, so why build another?

Mainly because I wanted to learn more about Sass, and expand my LESS knowledge. I also wanted to get a better understanding of what goes into building something like Bootstrap, but I wanted to create something that was not as bloated and large as Bootstrap.

I also wanted to make something that was simple and easy to use, something that would make the lives of my friends, colleagues, in fact, anyone who wanted to use it, much easier while developing sites.

## Solution
I started work on an initial version of would become Doughnut while building a Pilates website. It was a simple code base and only had some elements styled, like buttons and inputs. This version also included a grid system which was similar to all the others out there. However, it used a different naming scheme `<div class="eight column">` which seemed to work well and was easy to understand.

A few people started using this initial concept which allowed me to gain some valuable feedback. With this feedback, i was able to start to thinking about how to improve the library and push it forward. I spent some time looking into ways that I could use Sass to help improve the code base and then started working on these minor modifications.

Work soon began on Doughnut. Doughnut introduced the much-improved grid system, which only generates the code for the columns which are needed. A great feature of this is that you’re able to name the columns anything you want, this opens up more freedom than other library’s or frameworks are currently providing. - Check out the [Doughnut site](http://doughnut.r3id.io) for more info and examples.

{% include media-image.html file="cs/doughnut/sample-code.png" title="Clean by design" caption="Sample code" %}

## Result
Doughnut CSS has allowed me to build great looking sites, without the complexities and size of the other library’s and frameworks offer. It has given me the freedom to develop responsive sites quicker, which work across multiple platforms and screens.

{% include media-image.html file="cs/doughnut/sample-nesting.png" title="Clean by design" caption="Sample nesting" %}

## Update
Doughnut 2 has now released for public consumption. I have fixed some browser compatibility issues. Also, there are now 2 variations of Doughnut, ‘Glazed’ and ‘with Sprinkles’. Glazed is a simple pre-compiled version of Doughnut it has pre-named columns. The with Sprinkles version provides an improved (and reduced) codebase but requires a Sass compiler to build out the styles.
