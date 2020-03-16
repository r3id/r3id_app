---
layout: post
title:  "Let's talk about GraphQL"
categories: graphql rails
---

Historically developing API’s has been a pain for developers. And the way we develop API’s needs evolve to keep up with how we consume API’s across multiple platforms.

Enter GraphQL; a query language developed by Facebook in 2012 and which was later released publicly in 2015. It has been gaining a lot of traction over the last few years, with companies such as GitHub, Shopify, Netflix, and Spotify using it to develop their API’s.

So, let’s have a look at how GraphQL is working to solve some of the issues with REST.

_Note: My examples are written in Ruby/Rails_

---

## A lot of endpoints
In a REST API, each resource is represented by an endpoint. So, in a real-world application, we could end up having a lot of endpoints for lots of resources. If you want to make a GET request, you would need an endpoint specific to that request, with specific parameters. If you want to make a POST request, you would need another endpoint just for that request.

_What’s the problem with that?_ I hear you ask. Well, let’s imagine we are building a huge social media application like Facebook. We would potentially end up with a lot of endpoints which means more developer time is going to be spent developing, maintaining and documenting these APIs.

## Over and under fetching of data
Because a REST API always returns a fixed structure, we as developers can’t get exactly the data that we want unless we create a specific endpoint for that data.

We are left with two potential pain points - over and under fetching of data.

So, if we need only a small piece of data, we have to work with the whole object. For example, if we only need to get the firstName, lastName, and age of a user in a REST API, there’s no way we can get exactly this data without fetching the whole object.

There’s also a problem with under-fetching. If we want to get data from two different resources, we need to make different calls to two different endpoints. In a large application, this doesn’t scale so well since there will be cases where we only need to get a specific piece of data, not the entire object.

Now, imagine we’re building an application that’s going to have 100 _(or more)_ endpoints. Imagine the amount of work and code that we need to write. This will become more difficult with time and the code will become hard to maintain, and document.

## Versions
With REST, it’s very common to see a lot of APIs with v1 or v2. In GraphQL there’s no need for it since you can evolve your APIs by adding new types or removing old ones.

In GraphQL, all you need to do to evolve your API is to write new code and “deprecate” fields which are no longer in use. You can write new types, queries, and mutations without the need to ship another version of your API.

```
class UserType < Types::BaseObject
  description "Sample user type"

  field :name, String, null: true
    deprecation_reason: "We split up the name into two"
  field :firstName, String, null: false
  field :lastName, String, null: false
end
```

---

## GraphQL enters, stage left...
So, back in 2012, Facebook faced a problem while they were developing their mobile apps which in-turn led to the creation of GraphQL. Those problems were common, especially when we’re talking about RESTful API design. I’ve mentioned some issues already…

- Poor performance
- Lots of endpoints
- Over or under fetching of data
- Shipping another version each time we need to include or remove something
- Difficulty understanding APIs

With these concepts in mind, the devs from Facebook started work on a better way to design API’s and this then became… GraphQL. While GraphQL doesn’t solve everything; it’s defiantly a much better way to consume data across a variety of platforms.

With GraphQL, we get a lot of new features which make building your API’s easier and allowing users of the API to get the data they need or want.

## One endpoint to rule them all!
With GraphQL there’s no need to build a load of endpoints, in fact, we only get the one endpoint! And with this single endpoint, we can get as much data as we want with only a single request.

GraphQL wraps all of your queries, mutations, and subscriptions into a single endpoint which improves your development cycle as you don’t need to make two requests to get data from two different resources.

Imagine that we’re building a huge application, we won’t get a lot of endpoints and a load of code as with REST. We will get a single endpoint, and with that endpoint, we can make as many requests as we want.

With this “endpoint-only” approach your API is self-documented so there’s no need for you to build documentation - GraphQL documents automatically. Developers can understand the API just by looking at the code, or by looking at a “playground” like GraphiQL.

## Fetch only the data you need
No more over-fetching or under-fetching of data. With GraphQL you fetch only the data that you need. As you don’t need to call multiple endpoints to get all the data you need GraphQL improves the performance of your API, especially in case of slow network connections.

## Building consistent API's
A lot of people think that GraphQL is pretty complicated because it involves a schema and a single endpoint. However, once you start developing API’s with it, you discover that it’s easier than you thought.

It makes your API more self-documented, and there’s no need for you to write a lot of documentation about it.

GraphQL is an agnostic query language which means you can use it with any language. At the time of writing GraphQL has support for more than **18** languages.

---

## And finally...
When first heard about GraphQL a few years back and swept it under the carpet. I didn’t see the point or get what it was about. It wasn’t until I started to use the Shopify GraphQL API that I realised the potential of it.

Simply being able to get the data points you need, and building up queries makes GraphQL pretty awesome. Adding on mutations adds even more to a GraphQL API, allowing developers to have more control over things than they did with RESTful APIs.  

I would highly recommend signing up for a free [Shopify Development](https://www.shopify.com/?ref=r3id){:target="_blank"} account and working with [their API](https://shopify.dev/docs/admin-api){:target="_blank"} to see what it offers.

Thanks for reading, I will be doing more articles discussing GraphQL so keep an eye on my notes 🤓.
