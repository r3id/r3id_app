---
layout:        default
title:         Case Study &#58; Capital on Tap
type:          casestudy
navigation: 	 false

date:          2015-10-01
excerpt:       Capital on Tap are a responsible and ethical small business finance company, who specialise in offering simple, easy to understand financial solutions.
categories:    Development SEO Optimisation
tech:          HTML 5, jQuery, LESS, CSS, animations, .NET MVC
image:         cs/cot/capontap.jpg
details:       false
external-url:  https://www.capitalontap.com
---

During my time working at Capital on Tap I took on the task of reworking the company’s homepage which led to improved load times, a cleaner mobile experience, and an overall improvement to the user experience. It also provided Capital on Tap with an easily maintainable front-end code base.

It was also the project which allowed me to kick off the Capital on Tap internal CSS library.

{% include media-image.html file="cs/cot/capontap-multi.png" title="Responsive" caption="Multiple screen sizes" %}

## Challenge
In mid-2015 the Capital on Tap website needed to be rewritten. The company was experiencing rapid growth, and a significant number of users were using mobile devices. Due to the intricate design, the site was simply not providing the user experience, which users expected. With load times of around 12 seconds, the site relied heavily on complex SVG animations (which were not mobile friendly), multiple stylesheets including the full bootstrap library, and also a load of JavaScript.

The website was only a month or two old and had only just introduced the new company branding. Upon taking on this project I set myself a few goals:

- Reduce page load times
- Improve the mobile and overall user experience
- Structure the site to improve not only the SEO but the maintainability

## Solution
After reviewing the code for the public site, I decided it would be best to write it from scratch. I started off by structuring the site based on the original content. Doing this allowed me to clean it up and remove a lot of the HTML, which was not required.

{% include media-image.html file="cs/cot/cot-collage.png" title="Planning" caption="Capital on Tap re-development" %}

Once the base HTML was complete, I moved onto the styling. By using a ‘mobile first’ approach, I was able to prevent unnecessary code loading when on a mobile device. I had been developing a responsive [LESS](http://lesscss.org/) framework which used a variation of the [ITCSS methodology](https://youtu.be/1OKZOV-iLj4) (introduced by Harry Roberts) in my free time. The framework was ideal for this build.

## Result
Over the four days I spent working on this project, I managed to achieve the goals I had set myself. The site worked as expected across all screen sizes and orientations, and load times improved from **12 seconds** to an **impressive 300ms**!

The re-working of the code made the site not only quicker but far more maintainable. The CSS file size reduced from **243kb** to **57kb**, this was due to optimisation of the CSS and removing repeated styles. This optimisation and ‘DRY’ mentality saw the CSS drop considerably to **1,007** from **2,342** rules!

These changes also improved the overall experience for users, which meant Capital on Tap saw fewer users leaving the site, an increase in application conversations and users were able to find the information they wanted quicker.

> "Alan delivered us into the world of preprocessors (LESS/Sass) and started the cleanup of our webpages making them much smaller, much faster, and easier to maintain." <span>Julian Guppy, CTO Capital on Tap</span>

{% include media-image.html file="cs/cot/cot-home.png" title="Screens" caption="Capital on Tap homepage" %}

{% include media-image.html file="cs/cot/cot-about.png" title="Screens" caption="Capital on Tap about page" %}

{% include media-image.html file="cs/cot/cot-login.png" title="Screens" caption="Capital on Tap login modal" %}
