---
layout: post
title:  "Fixing the GitHub 'GH007' error"
categories: graphql rails
---

I am sure we've all faced the "GH007" error at one time or another when we try pushing a commit to GitHub.

```
remote: error: GH007: Your push would publish a private email address.
remote: You can make your email public or disable this protection by visiting:
remote: http://github.com/settings/emails
```

So in this note I want to go over how we sort this out.

---

First off we need to open terminal and `cd` into the directory where you want to configure the email address that you associate with your Git commits.

In your GitHub's [Personal Settings > Emails](https://github.com/settings/emails) grab the email address which is mentioned in the **Keep my email addresses private** and looks something like _{ID}+{username}@users.noreply.github.com_

Now if you want to update this globally (for every repo on your computer), you will need to update git config with the following
```
git config --global user.email "{ID}+{username}@users.noreply.github.com"
```

However, if you just want to update a single repository we would use
```
git config user.email "{ID}+{username}@users.noreply.github.com"
```

Once you have updated this email you will need to reset the author information on your last commit
```
git commit --amend --reset-author
```

And finally you can push the commit to GitHub in the normal way.
