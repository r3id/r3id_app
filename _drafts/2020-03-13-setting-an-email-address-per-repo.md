---
layout: post
title:  "Setting email for github"
categories: graphql rails
---


Can't finish GitHub sharing process
    Successfully created project 'myproject' on GitHub, but initial push failed:
    remote: error: GH007: Your push would publish a private email address.
    failed to push some refs to 'https://github.com/me/myproject.git'


When enabling the “Block command line pushes that expose my email” feature, you’ll also want to configure Git to use your no-reply email address. Don’t worry—this won’t affect your contribution graph. All commits will still be associated with your account.

- Open Terminal.
- Change the current working directory to the local repository where you want to configure the email address that you associate with your Git commits.
- Find your GitHub noreply address in your GitHub's [Personal Settings > Emails](https://github.com/settings/emails). It's mentioned in the description of the Keep my email address private checkbox. Usually, it starts with a unique identifier, plus your username.
- Set an email address in Git. Use your GitHub-provided no-reply email address.
- Setting your email address for every repository on your computer
- git config `--global user.email "{ID}+{username}@users.noreply.github.com"`
- Setting your email address for a single repository
  ```
  git config user.email "{ID}+{username}@users.noreply.github.com"
  ```
Reset the author information on your last commit:
```
git commit --amend --reset-author
```

If you have multiple commits with your private e-mail address, see this answer.
Now you can push the commit with the noreply e-mail address, and future commits will have the noreply e-mail address as well.
git push

Once you configure Git, commits will use your alternate “noreply” email address, and any pushes that don’t will be rejected.
