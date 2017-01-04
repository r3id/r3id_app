---
layout:			  default
title:  		  Force drop a PostgreSQL database
type:			    post
navigation: 	false

date:   		  2016-12-18
excerpt: 		  Ever needed to drop and recreate your development database, here's how to do it!
categories:		development
image: 			  articles/general/code.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

So while developing a new site I discovered the need to drop (delete) my database and recreate it. Word to the wise, make sure you **DON'T** do this on your production server! I've not done this (yet!), but i thought i best give the warning. As always I decided to document this for future reference.

Running the script below will force the disconnection of all clients connected to this database. This will allow you to then drop and recreate your DB.

```
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'your_database';
```

Remember to do this for both the `_development` and the `_test` databases.

Dropping the database is done by running the following command:

```
DROP DATABASE "your_database";
```

If you refresh your Postgres DB tree you should now see that your databases have been dropped.

Right so back to Rails and you then can use the following command to recreate your database.

```
rails db:drop db:create db:migrate

# If you want to add seed data you can do this now.
rails db:seed

```

So this is a really simple small article, but can cause a lot of trouble if not done properly. So please remember **DON'T** do this on your production server!
