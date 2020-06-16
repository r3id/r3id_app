---
layout: post
title: "PostgreSQL Tip: Resync table sequence"
categories: rails, config, development
---

I came across a small issue as I migrated to a new MacBook over the weekend, but it was a really quick fix, so I thought I would share - _for future reference_.

The issue; Occasionally after importing data into a database, your key sequence can become a little out of sync. To fix this run the SQL snippet below.

```
SELECT pg_catalog.setval(pg_get_serial_sequence('table_name', 'id'), MAX(id)) FROM table_name;
```

The snippet essentially gets the highest number in the ID sequence, and then writes that as your next key in the sequence.