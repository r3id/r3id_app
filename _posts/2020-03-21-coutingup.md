---
layout: post
title: Counting up, a JS code snippet
categories: javascript html css
---

Working on the 'UK food data'* website today, and I decided I wanted to have some animated stats on the page.

Basically the stats would show how many establishments we hold data on and how many users we have using the API etc. I thought it would be a nice addition to the site.

So I started work on a simple JS function which I could call rather than relying on ones that are already out there. That said, I may move to using something like [inorganik's countUp](https://inorganik.github.io/countUp.js/){:target="_blank"}, but we shall see how this simple script works out.

---

## Demo

<h3 class="number text-green">100</h3>
<h3 class="number text-green">550001</h3>
<h3 class="number text-green">8425</h3>

_Simply refresh the page to see the count up in action._

---

## The code

We take each element using the  `.number` class and we pass that to the JS snippet. We then perform some simple math on the content of the element and step up until we reach the target number.

```
function countUp(numberElement) {
  let current = 0;
  const total = parseInt(numberElement.textContent);
  const increment = Math.ceil(total / 100);

  function step() {
    current += increment;
    if (current > total) current = total;
    numberElement.textContent = current.toLocaleString();
    (current !== total) && requestAnimationFrame(step);
  }
  step();
}

document.querySelectorAll('.number').forEach(elem => countUp(elem));
```

---

There we go, really quick article today. Hopefully it helps someone out, however if you're after something a bit more in-depth, I'd highly recommend checking out [inorganik's countUp](https://inorganik.github.io/countUp.js/){:target="_blank"}.

_\* Still a holding name, any ideas?_

<style>
  .text-green {
    color: #009b72;
  }
</style>
<script type="text/javascript" async="" src="/assets/js/counting_up.js"></script>
