---
layout:			  default
title:  		  CSS advent calendar
type:			    post
navigation: 	false

date:   		  2016-12-15
excerpt: 		  After speaking to a large UK based retailer yesterday it got me thinking... how would I build an advent calendar, which also works on mobile?
categories:		html sass css development
gradient: 		1
image: 			  articles/general/code.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

So if you haven’t already noticed, it's almost Christmas! And during this time of year retailers want to interact with their users even more so come up with some great ways to promote products and offers during the season.

I was speaking to the Head of Development at one of the UK’s largest flash sale retailers yesterday, and he mentioned the challenges they had building their advent calendar which would be used to promote offers in the run up to Christmas. To me, this was an awesome idea and a fantastic way to interact with users. But it got me thinking how the heck would I have gone about building this?!

So this is my attempt at making an advent calendar concept - only using CSS.

<hr>

Let's get *cracking* and create our HTML. First off we need a containing "day" `div`, this will keep the contents of our days clean and tidy.

```
<div class="day" onclick="void(0)">
  <div class="door">
    <h2>1</h2>
  </div>
  <div class="present">
    <div class="bauble">?</div>
  </div>
</div>
```

*What's this `onclick="void(0)` on our "day" `div`?* I hear you ask. Well, this will allow our door to open when we touch it on mobile, and prevent it from simply refreshing the page.

Inside our "day" `div` we will need to place our "door" so let's create another `div` for this. Now we have our "door" `div` we will put our date, for the date we will just use the number. I decided to use a `h2` tag here.

Now we want something to give to the user, so let's create a `div` and call it "present". For now, I will make a bauble to give to our users. Let's create another `div` and we will use the `:before` and `:after` selectors to help build this up more, so it looks like a bauble. To complete the advent calendar, we will just need to create a "day" for each day in the advent calendar.

For our CSS I am going to build it in Sass, it just means its a lot easier to read and we can keep it nice and clean.

```

main {
  text-align: center;
  padding: 1em;
}

.door,
.present {
  width: 100%;
  height: 100%;
}

.day {
  display: inline-block;
  width: 9em;
  height: 9em;
  margin: 0.5em;
  perspective: 850px;
}

.door {
  position: relative;
  background: rgb(163, 30, 35);
  transform-style: preserve-3d;
  transform-origin: 0;
  perspective: 850px;
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(black, 0.15);
  cursor: pointer;
  transition: all 0.3s ease-out;

  h2 {
    position: absolute;
    width: 3em;
    height: 3em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0.5em;
    font-size: 0.85em;
    line-height: 3em;
    color: white;
    border-radius: 50%;
  }
}

.day:hover,
.day:focus,
.day:active {
  .door {  
    background: darken(rgb(120, 22, 26), 10%);
    transform: rotateY(-97deg);
    perspective-origin: 0;
    transition: all .4s ease-in;

    h2 {
      backface-visibility: hidden; // hide date
    }
  }

  .bauble {
    display: inline-block;
    animation: shake 1s;
    transform-origin: 50% 0;
  }
}

.present {
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(34, 20, 11);
  z-index: -1;
}

.bauble {
  position: relative;
  width: 2.75em;
  height: 2.75em;
  background: rgb(141, 170, 60);
  margin: 25% auto 0 auto;
  font-size: 2em;
  font-weight: bold;
  line-height: 2.75em;
  color: white;
  border-radius: 50%;

  // Let's create the top of the bauble.
  &:after {
    content: "";
    position: absolute;
    top: -5%;
    left: 50%;
    margin-left: -15%;
    width: 30%;
    height: 10%;
    background: inherit;
  }

  // And then we put the hook in it, otherwise how will we hang it on our page ;)
  &:before {
    content: "";
    width: 12%;
    height: 20%;
    position: absolute;
    top: -15%;
    left: 50%;
    margin-left: -12%;
    border-radius: 50%;
    border: 0.35rem solid rgb(141, 170, 60);
    z-index: 0;
  }
}

// Shake our bauble when the door opens!
@keyframes shake {
  0%    { transform: rotate(0deg); }
  20%   { transform: rotate(-20deg); }
  40%   { transform: rotate(20deg); }
  60%   { transform: rotate(-10deg); }
  80%   { transform: rotate(10deg); }
  100%  { transform: rotate(0deg); }
}

```

In this, we got to use `perspective`, and `transform` which allowed us to get the door to open nicely. We finally added a "shake" animation to our bauble; it's a nice touch, but not needed.

Let's take a look at what our HTML and compiled CSS would look like I have only gone for ten days just to demo this.

<div class="demo-holder animated fadeInUp">
  <main>
    <div class="day" onclick="void(0)">
      <div class="door">
        <h2>1</h2>
      </div>
      <div class="present">
        <div class="bauble">?</div>
      </div>
    </div>
    <div class="day" onclick="void(0)">
      <div class="door">
        <h2>2</h2>
      </div>
      <div class="present">
        <div class="bauble">?</div>
      </div>
    </div>
    <div class="day" onclick="void(0)">
      <div class="door">
        <h2>3</h2>
      </div>
      <div class="present">
        <div class="bauble">?</div>
      </div>
    </div>
    <div class="day" onclick="void(0)">
      <div class="door">
        <h2>4</h2>
      </div>
      <div class="present">
        <div class="bauble">?</div>
      </div>
    </div>
    <div class="day" onclick="void(0)">
      <div class="door">
        <h2>5</h2>
      </div>
      <div class="present">
        <div class="bauble">?</div>
      </div>
    </div>
    <div class="day" onclick="void(0)">
      <div class="door">
        <h2>6</h2>
      </div>
      <div class="present">
        <div class="bauble">?</div>
      </div>
    </div>
    <div class="day" onclick="void(0)">
      <div class="door">
        <h2>7</h2>
      </div>
      <div class="present">
        <div class="bauble">?</div>
      </div>
    </div>
    <div class="day" onclick="void(0)">
      <div class="door">
        <h2>8</h2>
      </div>
      <div class="present">
        <div class="bauble">?</div>
      </div>
    </div>
    <div class="day" onclick="void(0)">
      <div class="door">
        <h2>9</h2>
      </div>
      <div class="present">
        <div class="bauble">?</div>
      </div>
    </div>
    <div class="day" onclick="void(0)">
      <div class="door">
        <h2>10</h2>
      </div>
      <div class="present">
        <div class="bauble">?</div>
      </div>
    </div>
  </main>

  <style>
  main {
    text-align: center;
    padding: 1em;
  }

  .door,
  .present {
    width: 100%;
    height: 100%;
  }

  .day {
    display: inline-block;
    width: 9em;
    height: 9em;
    margin: 0.5em;
    -webkit-perspective: 850px;
            perspective: 850px;
  }

  .door {
    position: relative;
    background: #a31e23;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    -webkit-transform-origin: 0;
            transform-origin: 0;
    -webkit-perspective: 850px;
            perspective: 850px;
    text-align: center;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.15);
    cursor: pointer;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .door h2 {
    position: absolute;
    width: 3em;
    height: 3em;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    margin: 0;
    padding: 0.5em;
    font-size: 2em;
    line-height: 3em;
    color: white;
    border-radius: 50%;
  }

  .day:hover .door,
  .day:focus .door,
  .day:active .door {
    background: #78161a;
    -webkit-transform: rotateY(-97deg);
            transform: rotateY(-97deg);
    -webkit-perspective-origin: 0;
            perspective-origin: 0;
    -webkit-transition: all .4s ease-in;
    transition: all .4s ease-in;
  }
  .day:hover .door h2,
  .day:focus .door h2,
  .day:active .door h2 {
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
  }
  .day:hover .bauble,
  .day:focus .bauble,
  .day:active .bauble {
    display: inline-block;
    -webkit-animation: shake 1s;
            animation: shake 1s;
    -webkit-transform-origin: 50% 0;
            transform-origin: 50% 0;
  }

  .present {
    position: absolute;
    top: 0;
    left: 0;
    background: #22140B;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.15), inset 0 0 30px 20px rgba(0, 0, 0, 0.4);
    z-index: -1;
  }

  .bauble {
    position: relative;
    width: 2.75em;
    height: 2.75em;
    background: #8daa3c;
    margin: 25% auto 0 auto;
    font-size: 2em;
    font-weight: bold;
    line-height: 2.75em;
    color: white;
    border-radius: 50%;
  }
  .bauble:after {
    content: "";
    position: absolute;
    top: -5%;
    left: 50%;
    margin-left: -15%;
    width: 30%;
    height: 10%;
    background: inherit;
  }
  .bauble:before {
    content: "";
    width: 12%;
    height: 20%;
    position: absolute;
    top: -15%;
    left: 50%;
    margin-left: -12%;
    border-radius: 50%;
    border: 0.35rem solid #8daa3c;
    z-index: 0;
  }

  @keyframes shake {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    20% {
      -webkit-transform: rotate(-20deg);
              transform: rotate(-20deg);
    }
    40% {
      -webkit-transform: rotate(20deg);
              transform: rotate(20deg);
    }
    60% {
      -webkit-transform: rotate(-10deg);
              transform: rotate(-10deg);
    }
    80% {
      -webkit-transform: rotate(10deg);
              transform: rotate(10deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
  }
  @-webkit-keyframes shake {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    20% {
      -webkit-transform: rotate(-20deg);
              transform: rotate(-20deg);
    }
    40% {
      -webkit-transform: rotate(20deg);
              transform: rotate(20deg);
    }
    60% {
      -webkit-transform: rotate(-10deg);
              transform: rotate(-10deg);
    }
    80% {
      -webkit-transform: rotate(10deg);
              transform: rotate(10deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
  }
  </style>
</div>

### Final thoughts
Well, this was quite good fun, and a nice challenge. Obviously, we would be a little way off putting this into production. We would need to add some JS to keep the doors open for the past days, and we'd need to find a way to populate the different offers for each day, while still keeping them secret from prying eyes.
