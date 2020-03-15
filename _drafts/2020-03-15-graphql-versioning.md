---
layout: post
title:  "GraphQL versioning"
categories: graphql rails
---

Well, I have been learning GraphQL for around a week, and how time has flown past. It's been an interesting journey I must say.

<div class="image-center">
<img src="assets/images/articles/graph-ql-logo.png" />
</div>

From importing over 1/2 Million establishments to my DB, to fixing some of the data issues, it has been a really fun learning practice.

_But what did I build? What is the API for?_

Basically, I re-wrote the [FHRS API](https://api.ratings.food.gov.uk/help){:target="_blank"}! Lets take a quick peek shall we 😁

This is the establishment query. This will lookup an establishment based on it's FHRS_ID - I haven't given them my own ID's... yet 😉

```
{
  establishment(fhrsId: 349461) {
    fhrsId
    busiessName
    addressLine1
    addressLine2
    addressLine3
    addressLine4
    postcode
    rating {
      value
      image
    }
  }
}
```

This query would return just some basic data relating to the establishment. Below shows the returned data.

```
{
  "data": {
    "establishment": [
      {
        "fhrsId": 349461,
        "busiessName": "Old Red Lion",
        "addressLine1": "Old Red Lion PH",
        "addressLine2": "Hydean Way",
        "addressLine3": "Stevenage",
        "addressLine4": "Herts",
        "postcode": "SG2 9XR",
        "rating": {
          "value": "5",
          "image": "fhrs_5_en-gb"
        }
      }
    ]
  }
}
```

But this is where the beauty of GraphQL comes into play. By allowing the user to pick the data they want, they can get even more data. The below example is now adding in the scheme name, and the local authority information.

```
{
  establishment(fhrsId: 349461) {
    fhrsId
    busiessName
    addressLine1
    addressLine2
    addressLine3
    addressLine4
    postcode
    scheme {
      name
    }
    rating {
      value
      image
    }
    authority{
      name
      email
    }
  }
}
```

This query would return the slightly more information.

```
{
  "data": {
    "establishment": [
      {
        "fhrsId": 349461,
        "busiessName": "Old Red Lion",
        "addressLine1": "Old Red Lion PH",
        "addressLine2": "Hydean Way",
        "addressLine3": "Stevenage",
        "addressLine4": "Herts",
        "postcode": "SG2 9XR",
        "scheme": {
          "name": "Food Hygiene Rating Scheme"
        },
        "rating": {
          "value": "5",
          "image": "fhrs_5_en-gb"
        },
        "authority": {
          "name": "Stevenage",
          "email": "env.health@stevenage.gov.uk"
        }
      }
    ]
  }
}
```

So my learning with GraphQL continues, the flexibility of GraphQL means the user/developer would have the option to choose the data they want to retrieve. This will end up saving valuable bandwidth when used across multiple platforms. And unlike a REST API you only use a single endpoint.

**So what's next...**

The next steps for this will be to add in pagination, and limit queries so the server wouldn't get hammered. I am also going to look at what other data I can add to this which could provide more useful information for potential users.

I will defiantly be posting a lot more on GraphQL, so keep your eyes posted.
