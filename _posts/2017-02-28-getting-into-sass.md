---
layout:			  default
title:  		  Getting into Sass
type:			    post
navigation: 	false

date:   		  2017-02-09

excerpt: 		  Get a better understanding of Sass with this simple guide
categories:		general
gradient: 		1
image: 			  articles/general/code.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

# Getting Started with Sass
First off, there is nothing in Sass that you can't do in CSS. Sass is a powerful tool which enables developers to create much cleaner and more maintainable styling for their sites.

CSS preprocessors have seen quite an increase in popularity over the last couple of years, and there is no surprise there. Let's face it, CSS has never been the most forgiving language, and itself can cause many more problems than good more often than not.

Our preprocessor of choice and the reason for this article is Sass. A preprocessor compiles your Sass markup to CSS which is much easier for a browser to understand.

**Note:** [Sass](sass-url) is just one of the many preprocessors out there, some others are [LESS](less-url), [Stylus](stylus-url) and [Myth](myth-url) each has their pros and cons, and requirements to use.

Enough talk lets get on with learning some Sass!

## Comments
What better place to start than comments. Not all CSS or Sass is as understandable at first glance, so some sections of code can benefit from adding comments.

In CSS we use `/**/` to comment our styles, this can is also in Sass.

In Sass, there is also another option which we can use `//`. `//` is particularly useful because it will **only** show up in your Sass files and does not get compiled. If you want public comments, it's best to use `/**/`.

Remember comments should only be simple notes or tips, **don't** write an essay!

## Sass VS SCSS
The "Sass vs. SCSS" argument comes down to personal preference. Many, including myself, prefer the SCSS way of writing their styles. Others swear by the cleanses of the Sass method. That's not to say either way is wrong, as they both produce the same compiled CSS in the end.

*"So what are the differences?"* I hear you ask. Well, let's take a quick look.

SCSS is more like standard CSS and uses the same syntax. Curly braces and semicolons are necessary, and SCSS will fail to compile if there is a syntax error.

```
/* SCSS example */
.class,
#id {
  color: red;
}
```

Sass, on the other hand, respects white space and indentations and it doesn't use `{}` or `;`. One of the issues with Sass is that it is not CSS compatible unlike SCSS, which allows you to write CSS and all would still compile fine.

```
/* Sass example */
.class,
#id
  color: red
```

Either way is okay to use; it's just down to personal preference. Just remember to use the right extension with your chosen method (`.sass` or `.scss`).

## Nesting
For those who are not familiar with the concept of nesting, it is a way to structure your code by indenting which donates the relationship between selectors and properties.

### Selectors
In SCSS, we nest elements and classes like this:

```
.nav {
  a {
    text-decoration: none;
  }
}
```
and this code snippet would compile to:

```
.nav a {
  text-decoration: none;
}
```

Though you *could* nest infinitely, it's good practice not to nest more than three or four levels deep as you styles would become less maintainable, and get confusing.

### &
& can be used as shorthand for parent selectors. The following code provides some examples to show how this can be useful:

```
a {
  text-decoration: none;
  &:hover {
    color: red;
  }
}
```

this code snippet would compile to:

```
a {
  text-decoration: none;
}
a:hover {
  color: red;
}
```

As you can see from the following example this stands with all parent selectors which get nested within:

```
li {
    text-decoration: none;
    &.menu-item {
        color: rgb(98,150,90);
        font-weight: 400;
        .nav & {
            display: inline-block;
        }
    }
}
```

would compile to:

```
li {
  text-decoration: none;
}
li.menu-item {
  color: #62965a;
  font-weight: 400;
}
.nav li.menu-item {
  display: inline-block;
}
```

**Note:** How Sass will convert your RGB colour to its HEX version

The & takes the parent literally, due to this you can also do something like this:

```
.nav {
    &--link {
        display: inline-block;
    }
    &--title {
        font-size: 18px;
    }
}
```

which when compiled to CSS will look like:

```
.nav--link {
  display: inline-block;
}
.nav--title {
  font-size: 18px;
}
```

Pretty impressive, right? Sass really can make life a lot easier when used correctly.

### Properties
As with selectors, we can also nest properties which have related namespaces such as `background`, `font` and `border`. Nested properties are similar to nested selectors. However, you need to include `:`. Let's look at an example:

```
.class-name {
  background: {
    color: rgb(0,0,0);
    position: center;
    size: contain;
  }
  font: {
    size: 1.5rem;
    weight: 300;
    family: 'open sans', arial, sans-serif;
  }
}
```

would compile to:

```
.class-name {
  background-color: #000000;
  background-position: center;
  background-size: contain;
  font-size: 1rem;
  font-weight: 300;
  font-family: 'open sans', arial, sans-serif;
}
```

### Media Queries
When using media queries in CSS, they must have styles nested within them. In Sass we can go both ways, in fact, we can even nest media queries within media queries. However this will cause confusion for other developers, and I would avoid doing that! Let's have a look at how we work with media queries in Sass.

```
.selector {
  color: rgb(98,150,90);
  @media screen and (min-width: 300px) {
    color: rgb(255,0,0);
    @media screen and (max-width: 700px) {
      color: rgb(255,212,84);
    }
  }
}
```

and this would compile to:

```
.selector {
  color: #62965a;
}
@media screen and (min-width: 300px) {
  .selector {
    color: #ff0000;
  }
}
@media screen and (min-width: 300px) and (max-width: 700px) {
  .selector {
    color: #ffd454;
  }
}
```
*There are some excellent mixins out there which make working with media queries much easier I will discuss which mixins I use in another article.*

## Variables
One of the best bits about Sass is the ability to create variables. These variables allow you to keep your styles [DRY](dry-url). You will find that setting `colors`, `borders`, even the `font-family` in a variables file will make life so much easier when using Sass. With this, it also means everything becomes a little more consistent throughout a site or app.

Variable are not a new concept, and many other programming and logic-based languages use variables. A variable is in its simplest form is something you can assign a value. You only need to assign it once, but it can be changed or overwritten later on - so be careful.

A perfect example of this when dealing with company branding. When you create your company's site, you set the main brand colour. You then need to modify this colour to match a brand update. Instead of hunting through lines and lines of code to change every instance, you change it in one place!

The format for creating Sass variables is like so:
`$` + your logical name + `:` + value.

Lets have a look and see this in action:

```
// VARIABLES
// colors
$brand-color:  rgb(98,150,90);
$link-color:  rgb(66,134,244);
$white-color:  rgb(255,255,255);
.main-container {
    background-color: $white-color;
}
```

when we compile our Sass we will get the following CSS:

```
.main-container {
  background-color: #ffffff;
}
```

I also make sure I have a `_variables.scss` file, mainly for ease of editing, even if I have only a few variables. Remember to import this file at the top of your main SCSS file.

**Note:**  `z-index` values should get stored in the variable file. By storing them in this file is not only best practice but allows you to create layers.

### @extend
`@extend` can be used with a selector to pass the already defines styles to another selector.

```
a {
  color: rgb(255,212,84);
  display: list-item;
  text-decoration: none;
}
button {
  @extend a;
}
```

would compile to:

```
a, button {
  color: #ffd454;
  display: list-item;
  text-decoration: none;
}
```

**Note:** `@extend` will copy all instances of what is being extended, and not just exact matches. This is best show through the following example:

```
$yellow-color: rgb(255,212,84);
$blue-color: rgb(66,134,244);
a {
    color: $yellow-color;
    display: list-item;
    text-decoration: none;
    &:hover {
        color: $blue-color;
    }
    &.link {
        border: 1px solid $yellow-color;
    }
}
div a {
    position: relative;
}
button {
    @extend a;
}
```

which will compile to:

```
a, button {
  color: #ffd454;
  display: list-item;
  text-decoration: none;
}
a:hover, button:hover {
  color: #4286f4;
}
a.link, button.link {
  border: 1px solid #ffd454;
}
div a, div button {
  position: relative;
}
```
*Did you notice our use of variables too?*

### Mixins
Mixins let you create reusable snippets of code, which can be used in your code later. A good example of this is when we add a `border-radius` to an element. Typically we need also to include all the vendor prefixes too, which can be a pain. Well with our example mixin below you can see how we simply these to our CSS class, and mixins allow us to pass over the property too.

```
@mixin border-radius($radius) {
  background-clip: padding-box;  // prevents bg color from leaking outside the border
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
       -o-border-radius: $radius;
          border-radius: $radius;
}
.class {
  @include border-radius(4px);
  background: rgb(66,134,244);
  color: rgb(255,255,255);
}
```
would compile to:

```
.class {
  background-clip: padding-box;
  -webkit-border-radius: 4px;
     -moz-border-radius: 4px;
      -ms-border-radius: 4px;
       -o-border-radius: 4px;
          border-radius: 4px;
  background: #4286f4;
  color: #ffffff;
}
```

Mixins are great; I will be creating an article in the future to discuss some of the ones I use personally in projects.

## Functions
Creating functions in Sass is very similar to creating mixins. Sass has a large selection of functions by built-in, you can see a [full list here](sass-functions). Functions perform a variety to tasks such as `lighten` and `darken` which would lighten or darken a colour, or make it greyscale.

I will be covering creating custom functions in a later article, as I think we have covered most of the basics today.

[sass-url]: http://sass-lang.com/
[less-url]: http://lesscss.org/
[stylus-url]: http://learnboost.github.io/stylus/
[myth-url]: http://www.myth.io/
[dry-url]: https://en.wikipedia.org/wiki/Don't_repeat_yourself

[sass-docs]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html
[sass-functions]: http://sass-lang.com/documentation/Sass/Script/Functions.html
