---
layout: article
title:  Some useful Git commands
categories: git tips
---

As developers we need to store our code somewhere. I mainly use Git, which is also one of the most popular version control systems. So, in this article we are going to look at a few Git commands which will come in handy, and most of which you'd use regularly.

<div class="image-center">
<img src="{{ site.url }}/assets/images/articles/a-gitflow.png" />
</div>

---

## git config
The `git config` command is used to set Git configuration values on a global or local project level. At its most basic level it sets the name and email which will be associated with commits.

Example: `git config –global user.name "[name]"`

Example: `git config –global user.email "[email address]"`


## git init
The `git init` command creates a new Git repository. It can be used to convert an existing, un-versioned project to a Git repository or initialise a new, empty repository.

Example: `git init`

Example: `git init [repository name]`

## git clone
If a project has already been set up in a central repository, the `git clone` command is the most common way for users to obtain a development copy. Like `git init`, cloning is generally a one-time operation.

Example: `git clone https://repourl.com/repo_name.git`  

## git add
The `git add` command adds a change in the working directory to the staging area. It lets Git know that you want to include updates to a particular file in the next commit.

### Options
`git add .`

Stage all changes in all files for the next commit.

`git add [file]`

Stage all changes in `[file]` for the next commit.

`git add [directory]`

Stage all changes in `[directory]` for the next commit.


## git commit
The git commit command captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as _safe_ versions of a project, and Git will not change them unless you explicitly ask it to.

### Options
`git commit`

Commit the staged snapshot. This will launch a text editor prompting you for a commit message. After you’ve entered a message, save the file and close the editor to create the actual commit.

`git commit -a`

Commit a snapshot of all changes in the working directory. This only includes modifications to tracked files (those that have been added with git add at some point in their history).

`git commit -m "commit message"`

A shortcut command that immediately creates a commit with a passed commit message. By default, git commit will open up the locally configured text editor, and prompt for a commit message to be entered. Passing the -m option will forgo the text editor prompt in-favour of an inline message.


## git status
The `git status` command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven’t, and which files aren’t being tracked by Git. Status output does not show you any information regarding the committed project history. For this, you need to use git log.

## git log
The `git log` command displays committed snapshots. It lets you list the project history, filter it, and search for specific changes.

## git tag
This document will discuss the Git concept of tagging and the `git tag` command. Tags are references which point to specific points in Git history. Tagging is generally used to capture a point in history that is used for a marked version release (_i.e. v1.0.1_). A tag is like a branch that doesn’t change. Unlike branches, tags, after being created, have no further history of commits

To create a new tag execute the following command:

`git tag <tagname>` replace `<tagname>` with a semantic identifier to the state of the repo at the time the tag is being created. A common pattern is to use version numbers like `git tag v1.4`.

## git branch
A branch represents an independent line of development. Branches serve as an abstraction for the edit/stage/commit process. You can think of them as a way to request a brand new working directory, staging area, and project history. New commits are recorded in the history for the current branch, which results in a fork in the history of the project.

### Options
`git branch` list all of the branches in your repository. This is synonymous with git branch --list.

`git branch <branch>` creates a new branch called <branch>. This does not check out the new branch.

`git branch -d <branch>` deletes the specified branch. This is a “safe” operation in that Git prevents you from deleting the branch if it has un-merged changes.

`git branch -D <branch>` force deletes the specified branch, even if it has un-merged changes. This is the command to use if you want to permanently throw away all of the commits associated with a particular line of development.

`git branch -m <branch>` renames the current branch to <branch>.

`git branch -a` lists all remote branches.

## git checkout
The `git checkout` command lets you navigate between the branches created by `git branch`. Checking out a branch updates the files in the working directory to match the version stored in that branch, and it tells Git to record all new commits on that branch. Think of it as a way to select which line of development you’re working on.

Switching branches is a straightforward operation. Executing the following will point HEAD to the tip of <branchname>.

`git checkout <branchname>`

The git checkout command accepts a `-b` argument that acts as a convenience method which will create the new branch and immediately switch to it. You can work on multiple features in a single repository by switching between them with git checkout.

`git checkout -b <new-branch>`


## git merge
Git merge will combine multiple sequences of commits into one unified history. In the most frequent use cases, git merge is used to combine two branches.
An example of using `git merge`:

```
# Start a new feature
git checkout -b new-feature master
# Edit some files
git add <file>
git commit -m "Start a feature"
# Edit some files
git add <file>
git commit -m "Finish a feature"
# Merge in the new-feature branch
git checkout master
git merge new-feature
git branch -d new-feature
```

## git remote
The `git remote` command is essentially an interface for managing a list of remote entries that are stored in the repository's `./.git/config` file.

`git remote` lists the remote connections you have to other repositories.

`git remote -v` is the same as the above command, but include the URL of each connection.

`git remote add` creates a new connection to a remote repository. After adding a remote, you’ll be able to use <name> as a convenient shortcut for <url> in other Git commands.

Example:
```
git remote add myrepo https://repourl.com/repo_name.git
```

`git remote rm` removes the connection to the remote repository called <name>.

`git remote rename` renames a remote connection from <old-name> to <new-name>.

## git push
The `git push` command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.

`git push` push the specified branch to <remote>, along with all of the necessary commits and internal objects. This creates a local branch in the destination repository. To prevent you from overwriting commits, Git won’t let you push when it results in a non-fast-forward merge in the destination repository.

`git push  --force` same as the above command, but force the push even if it results in a non-fast-forward merge. **Do not use the --force flag unless you’re absolutely sure you know what you’re doing.**

`git push  --all` push all of your local branches to the specified remote.

`git push  --tags` tags are not automatically pushed when you push a branch or use the `--all` option. The `--tags` flag sends all of your local tags to the remote repository.

## git pull
The `git pull` command is used to fetch and download content from a remote repository and immediately update the local repository to match that content.
