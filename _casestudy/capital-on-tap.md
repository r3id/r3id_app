---
layout: case-study
title: Capital on Tap // Case Study
project-title: Capital on Tap
project-blurb: Capital on Tap are a responsible and ethical small business finance company, who specialise in offering simple, easy to understand financial solutions.
project-image: cot/capontap.jpg
project-tech: HTML 5, jQuery, LESS, CSS animations, .NET MVC
project-type: Development, SEO, Optimisation
project-url: https://www.capitalontap.com
---

During my time working at Capital on Tap I took on the task of reworking the company’s homepage which led to improved load times, a cleaner mobile experience, and an overall improvement to the user experience. It also provided Capital on Tap with an easily maintainable front-end code base.

It was also the project which allowed me to kick off the Capital on Tap internal CSS library.

![Capital on Tap](/assets/images/cs/cot/capontap-multi.png "Multiple screen sizes")

## Challenge
In mid-2015 the Capital on Tap website needed to be rewritten. The company was experiencing rapid growth, and a significant number of users were using mobile devices. Due to the intricate design, the site was simply not providing the user experience, which users expected. With load times of around 12 seconds, the site relied heavily on complex SVG animations (which were not mobile friendly), multiple stylesheets including the full bootstrap library, and also a load of JavaScript.

The website was only a month or two old and had only just introduced the new company branding. Upon taking on this project I set myself a few goals:

- Reduce page load times
- Improve the mobile and overall user experience
- Structure the site to improve not only the SEO but the maintainability

## Solution
After reviewing the code for the public site, I decided it would be best to write it from scratch. I started off by structuring the site based on the original content. Doing this allowed me to clean it up and remove a lot of the HTML, which was not required.

![Capital on Tap](/assets/images/cs/cot/cot-collage.png "Capital on Tap re-development")

Once the base HTML was complete, I moved onto the styling. By using a ‘mobile first’ approach, I was able to prevent unnecessary code loading when on a mobile device. I decided to use a variation of the [ITCSS methodology](https://youtu.be/1OKZOV-iLj4) (introduced by Harry Roberts), which I had been developing in my free time.

## Result
Over the four days I spent working on this project, I managed to achieve the goals I had set myself. The site worked as expected across all screen sizes and orientations, and load times improved from 12 seconds to an impressive 300ms!

The re-working of the code made the site not only quicker but far more maintainable. The CSS file size reduced from 243kb to 57kb, this was due to optimisation of the CSS and removing repeated styles. This optimisation and ‘DRY’ mentality saw the CSS drop considerably to 1,007 from 2,342 rules!

These changes also improved the overall experience for users, which meant Capital on Tap saw fewer users leaving the site, an increase in application conversations and users were able to find the information they wanted quicker.

> "Alan delivered us into the world of preprocessors (LESS/Sass) and started the cleanup of our webpages making them much smaller, much faster, and easier to maintain." - Julian Guppy, CTO Capital on Tap

![Capital on Tap](/assets/images/cs/cot/cot-home.png "Capital on Tap homepage")

![Capital on Tap](/assets/images/cs/cot/cot-about.png "Capital on Tap about page")

![Capital on Tap](/assets/images/cs/cot/cot-login.png "Capital on Tap login modal")
