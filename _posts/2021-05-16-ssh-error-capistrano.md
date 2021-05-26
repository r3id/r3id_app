---
layout: article
title: "\"NotImplementedError\" when deploying Capistrano"
categories: analytics, app, rails
---

Really quick note today, I have been getting this error recently when deploying to production...

```
cap aborted!
NotImplementedError: OpenSSH keys only supported if ED25519 is available
net-ssh requires the following gems for ed25519 support:
 * ed25519 (>= 1.2, < 2.0)
 * bcrypt_pbkdf (>= 1.0, < 2.0)
```

Turns out that it's actually a really simple fix.

You need to run `ssh-add`, and this will re-add your SSH key back in.

This is more of a note to self, so I don't have to go Googling this haha.
