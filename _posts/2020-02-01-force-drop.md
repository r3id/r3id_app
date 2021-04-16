---
layout: article
title:  "Rails Snippet: Force drop a PostgreSQL DB"
categories: postgresql rails
---

So while developing a Rails new site I discovered the need to drop (delete) my database and recreate it. Word to the wise, make sure you **DON’T** do this on your production server! I’ve not done this (_yet!_), but I thought I best give the warning. As always I decided to document this for my future reference, and it may help others out there too.

We start off in PostgreSQL by running the script below, which will force the disconnection of all clients connected to this database. This will allow you to then drop and recreate your DB. For this I am using SQLPro for Postgres in case you were wondering.
```
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = ‘your_database’;
```

Remember to do this for both the `_development` and the `_test` databases.
Dropping the database is done by running the following command:

```
DROP DATABASE “your_database”;
```

If you refresh your Postgres DB tree you should now see that your databases have been dropped.
Right so back to Rails and you then can use the following command to recreate your database.
```
rails db:drop db:create db:migrate

# If you want to add seed data you can do this now.
rails db:seed
```

---

There may be times where you want to import data back in, maybe you created some batch insert statements for example.

An issue you may face is when you come to insert data more data into the DB. It will fail more than likely. The reason for this is due to your primary keys being out of sync.

Below is an example snippet of SQL you will need to run to get the index’s fixed. You will need to append your table name at the beginning of the `_id_seq` as seen in the example below. You will then need to run a quick `select *` on your table to get the total number of row, then add one to that.

You need to then replace the as n part of the code below with that count. Once you execute the SQL you’re all set to continue on your merry way.
```
ALTER SEQUENCE products_id_seq RESTART WITH n
```

---

So this is a really simple small article, but can cause a lot of trouble if not used properly. And also please remember ❗️ **DON’T** ❗️ do this on your production server!
