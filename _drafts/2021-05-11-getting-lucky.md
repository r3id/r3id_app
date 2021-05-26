---
layout: article
title: "Getting Lucky"
categories: lucky, development
---

## Install Lucky CLI on macOS

Once the required dependencies above are installed, set up Lucky for your system.

# 1. Add the Lucky tap to Homebrew

```
brew tap luckyframework/homebrew-lucky
```

# 2. Install the Lucky CLI with Homebrew

```
brew install lucky
```

# 3. Check installation

Let’s make sure the Lucky CLI installed correctly:

```
lucky -v
```

This should return 0.27.0

## Getting started

From your terminal, we will start the Lucky wizard to generate our application. Run the lucky init command:

```
lucky init
```

This will ask us what “Project name” we would like to use. We will call it “clover” in all lowercase. Enter clover:

```
Project name?: clover
```

Next, the wizard will ask us which format of application we would like to build. We are building a “full” app which will allow us to use CSS, JavaScript, and have HTML views. Enter full:

```
API only or full support for HTML and Webpack? (api/full): full
```

Lastly, the wizard would like to know if we want to generate authentication. We do! This will give us the ability to create user accounts and login/out of our accounts. Enter y:

```
Generate authentication? (y/n): y
```

Once that’s done, Lucky will give you a few instructions on what to do next. We will follow those instructions in the next step.


Before we boot our application, we still need to complete the setup process. This portion is specific to the individual as only you will know your own database settings.

Let’s start by changing the directory into the project. Enter cd clover

```
cd clover
```
Now we need to make sure we can connect to Postgres so we can run SQL. Open up your Clover app project, and open the config/database.cr file.

The default postgres connection uses the username postgres, and the password postgres along with the hostname localhost. Look over these settings, and update them to match your own personal setup.

Done? Did you remember to save the file? 😄

For more information on setting up your database, read the Database Setup guide.
## Setup Script

Next we will run our setup script. This script does a few things:

Run a system check for 3rd party dependencies needed to run this app.
Setup our assets (css, javascript) using Yarn
Install Crystal shard dependencies. (e.g. Lucky, Avram, etc…)
Create our database. In this case, a database named clover_developement
Verify that we can connect to this new database
Run SQL code (migration) to create our users table.
Import sample data in to our database. On the first run, there’s no sample data.
Run the setup script. Enter ./script/setup:

```
./script/setup
```

This may take a bit of time to run. If anything fails at any point, let us know!

# Congratulations!

If you see the output Run 'lucky dev' to start the app, then you’ve officially started your first Lucky project! Now you can run the app, and play with it.

Start the Lucky app. Enter lucky dev:

```
lucky dev
```

Use ctrl-c at any time to stop the server.



[crystalurl]: https://crystal-lang.org
[luckyurl]: https://www.luckyframework.org
