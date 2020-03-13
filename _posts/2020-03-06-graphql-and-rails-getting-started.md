---
layout: post
title:  "GraphQL and Rails, getting started"
categories: graphql rails
---

I was working with the [ShopifyAPI](https://shopify.dev/docs/admin-api){:target="_blank"}, and developing an app which utilised the REST API, and connected up to a development store.

Then I came across an issue, the REST API was very slow to update the large amount of data I was needing to pass updates too. So I started to look at GraphQL.

> "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015"
<br>**Source:** Wikipedia (of course!)

After spending a few hours reading up on GraphQL, and trying to get it to work — unsuccessfully i must add. I had a rest, only to come back to it an hour later and upon restarting my rails server, it started working!

This is simply a getting started helper for anyone who needs it, so let's have a look at my initial code. I had created a method, which would run this code in a simple Rails app, by adding byebug just above result you’re able to see whats been returned in the terminal.
```
def shopify_test    
    shop_url = "https://#{API_KEY}:#{PASSWORD}@#.{SHOP_NAME}.myshopify.com"
    ShopifyAPI::Base.site = shop_url
    ShopifyAPI::Base.api_version = '2020-01'

    client = ShopifyAPI::GraphQL.client

    SHOP_NAME_QUERY = client.parse <<-'GRAPHQL'
    {
      shop {
        name
      }
    }
    GRAPHQL

    result = client.query(SHOP_NAME_QUERY)
    puts result.data.shop.name
end
```

You can get your `api_key` and `password` through the [App > Private Apps](https://bkservicesonline.myshopify.com/admin/apps/private) section of the Shopify Store.
Running this would return simply your shop name. But once you have this working you can start to explore the rest of the GraphQL API.

```
{
  “data”: {
    “shop”: {
      “id”: “gid:\/\/shopify\/Shop\/{SHOP_ID}”,
      “name”: “{SHOP_NAME}”
    }
  }
}
```
While this is just a basic overview of how to get up and running, the [Shopify Docs](https://shopify.dev/docs/admin-api) provide a much more in-depth look at their GraphQL queries and mutations.

I am sure i will be posting more about my experiences with GraphQL, and maybe write up some better “How To” guides.
