---
layout: article
title:  "Fixing the GitHub 'GH007' error"
categories: graphql rails
---

I am sure we've all faced the "GH007" error at one time or another when we try pushing a commit to GitHub.

```
remote: error: GH007: Your push would publish a private email address.
remote: You can make your email public or disable this protection by visiting:
remote: http://github.com/settings/emails
```
<div class="image-center">
  <svg height="128" viewBox="0 0 16 16" version="1.1" width="128" aria-hidden="true">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
</div>

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
