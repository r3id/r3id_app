---
layout: post
title: Let's explore before? and after? methods in Rails.
categories: javascript html css
---

If you have been using Ruby, or any other language for some time. You've clearly used `>` and `<` or as we know them “greater than” and “less than”. Rails has recently added the more human readable `before?` and `after?` methods to date/time .

So previously we would compare two date/time objects using the `>` and `<` operators.

```
Time.utc(2020, 4, 4, 00, 00, 00) < Time.utc(2019, 4, 4, 00, 00, 00)
# => false

Date.tomorrow > Date.today
# => true
```

While we are used to this code by now, it's not so easy to read. We would read it as Date.tomorrow is “greater than” Date.today.

**So how can the `before?` and `after? `methods make this much better?**

Normally, when we compare dates in English, we would say:-

_"The due date for the project is before the end of month"._
or
_"All submissions after the end date will be ignored."_

So to match these, we now have the `before?` and `after?` comparison methods.

By utilising the new methods we can compare date and time values like so

```
due_date = 30.days.from_now
due_date.before?(Date.today)
# => false

due_date.after?(Date.today)
# => true
```

These new comparison methods help make our code much more readable, and would read like _"Is due date before today or after today?"_

We will start to explore more recent features of Rails in upcoming notes. Thanks for reading.
