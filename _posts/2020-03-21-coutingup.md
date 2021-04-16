---
layout: article
title: Counting up, a JS code snippet
categories: javascript html css
---

Working on the 'UK food data'* website today, and I decided I wanted to have some animated stats on the page.

Basically the stats would show how many establishments we hold data on and how many users we have using the API etc. I thought it would be a nice addition to the site.

<div class="image-center">
  <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g fill-rule="nonzero">
        <rect id="Rectangle" fill="#F7DF1E" x="0" y="0" width="100" height="100"></rect>
        <path d="M67.1746032,78.1253968 C69.1888889,81.4142857 71.8095238,83.831746 76.4444444,83.831746 C80.3380952,83.831746 82.8253968,81.8857143 82.8253968,79.1968254 C82.8253968,75.9746032 80.2698413,74.8333333 75.984127,72.9587302 L73.6349206,71.9507937 C66.8539683,69.0619048 62.3492063,65.4428571 62.3492063,57.7920635 C62.3492063,50.7444444 67.7190476,45.3793651 76.1111111,45.3793651 C82.0857143,45.3793651 86.3809524,47.4587302 89.4761905,52.9031746 L82.1587302,57.6015873 C80.547619,54.7126984 78.8095238,53.5746032 76.1111111,53.5746032 C73.3587302,53.5746032 71.6142857,55.3206349 71.6142857,57.6015873 C71.6142857,60.4206349 73.3603175,61.5619048 77.3920635,63.3079365 L79.7412698,64.3142857 C87.7253968,67.7380952 92.2333333,71.2285714 92.2333333,79.0761905 C92.2333333,87.5365079 85.5873016,92.1714286 76.6619048,92.1714286 C67.9349206,92.1714286 62.2968254,88.0126984 59.5380952,82.5619048 L67.1746032,78.1253968 Z M33.9793651,78.9396825 C35.4555556,81.5587302 36.7984127,83.7730159 40.0269841,83.7730159 C43.1142857,83.7730159 45.0619048,82.5650794 45.0619048,77.868254 L45.0619048,45.915873 L54.4587302,45.915873 L54.4587302,77.9952381 C54.4587302,87.7253968 48.7539683,92.1539683 40.4269841,92.1539683 C32.9031746,92.1539683 28.5460317,88.2603175 26.3301587,83.5706349 L33.9793651,78.9396825 Z" id="Shape" fill="#000000"></path>
      </g>
    </g>
  </svg>
</div>

So I started work on a simple JS function which I could call rather than relying on ones that are already out there. That said, I may move to using something like [inorganik's countUp](https://inorganik.github.io/countUp.js/){:target="_blank"}, but we shall see how this simple script works out.

---

## Demo

<p class="text-green"><span class="number">100</span></p>
<p class="text-green"><span class="number">550001</span> total</p>
<p class="text-green">£<span class="number">845</span> spent</p>

_Simply refresh the page to see the count up in action._

---

## The code

In the HTML we simply add the number to a span with the class of `.number`.

```
<p class="text-green"><span class="number">100</span></p>
<p class="text-green"><span class="number">550001</span> total</p>
<p class="text-green">£<span class="number">845</span> spent</p>
```

For the JS side we take each element using the  `.number` class and we pass that to the JS snippet. We then perform some simple math on the content of the element and step up until we reach the target number.

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
