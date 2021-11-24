---
layout: post
title: "UUID or ID's in rails?"
categories: rails ids uuid
---

A universally unique identifier (UUID) is a 128-bit number used to identify information in computer systems. Occasionally it's referred to as a ‘globally unique identifier’. UUIDs are a popular alternative to auto-incremental integer primary keys.

```
create_table :users, id: :uuid do |t|
  t.string :name
end
```

Notice that `id: :uuid` is passed to `create_table`. This is all we need to do to have UUID as primary key for users.

Now, if an application is designed to use UUID instead of Integer, then chances are that new tables too would use UUID as primary key. And it can easily get repetitive to add `id: :uuid` in `create_table` , every time a new model is generated.

Rails 5 came up with a solution. We need to set primary key as UUID in `config/application.rb`.

```
config.generators do |g|
  g.orm :active_record, primary_key_type: :uuid
end
```

This automatically adds id: :uuid to create_table in all future migrations.

If we are using the latest version of PostgreSQL then we should enable `pgcrypto` extension as per Rails guide.

To enable `pgcrypto` extension we need a migration which does something like this.

```
class EnablePgcryptoExtension < ActiveRecord::Migration
  def change
    enable_extension 'pgcrypto'
  end
end
```

But what if you want to convert existing tables to use a UUID too? Well in this case you would need to build your migration similar to the one below.

```
class ChangeUserIdTypeToUuid < ActiveRecord::Migration[5.2]

  def change
    add_column :users, :uuid, :uuid, default: "gen_random_uuid()", null: false

    change_table :users do |t|
      t.remove :id
      t.rename :uuid, :id
    end
    execute "ALTER TABLE users ADD PRIMARY KEY (id);"
  end
end
```

There is a potential issue reversing this, so it may be worth making the migration irreversible by using `ActiveRecord::IrreversibleMigration`.


---

## Instead of…
…using Rails’ default incrementing integer id.

## Use…
…PostgreSQL’s UUID support. Ruby on Rails has had the ability to use UUIDs as the id for ActiveRecord models since version 5.0.

## Enable the PostgreSQL extension
```
rails g migration enable_extension_for_uuid
```

```
class EnableExtensionForUuid < ActiveRecord::Migration[5.1]
  def change
    enable_extension 'pgcrypto' unless extension_enabled?('pgcrypto')
  end
end
```

## Create config/initializers/generators.rb

```
Rails.application.config.generators do |g|
  g.orm :active_record, primary_key_type: :uuid
end
```

This changes the default column type for primary keys, configuring your migration generator to set id: :uuid for new tables.

## In future migrations
You’ll have to use type: :uuid when creating relations.
```
class AddNewTable < ActiveRecord::Migration[5.1]
  def change
    create_table :related_model do |t|
      t.references :other, type: :uuid, index: true
    end
  end
end
```

## But why?
Using UUIDs as the id in your Rails models instead of incrementing integers helps you avoid collisions. The UUIDs are globally unique meaning you can know that different models cannot possibly have the same id and you can even assign them client-side or in other systems.

With an incrementing integer id the size of your data can be inferred from the outside i.e. id 5 is the fifth record created. With UUIDs no-one can guess the size of your database tables, which might be information you are keen to keep secret. You can get round this by generating ‘public ids’ or ‘slugs’ for exposed URLs… but then, why not use a built-in tool?

From a security perspective, using UUIDs prevents the situation where a malicious attacker could attempt to gain access to data by guessing a model id in your URLs. UUIDs are extremely hard to guess.

This is a case where you are making a choice toward a little more complexity, but for good reasons.

## Why not?
If you’re using PostgreSQL this is a straightforward change and has little performance cost. MySQL is a more complicated proposition and I wouldn’t bother.

ActiveRecord’s first and last scopes work in an unexpected way with UUID ids. You can no longer assume the ‘highest’ id is the most recent, which could be confusing for new developers to your codebase.

Using UUIDs is a good idea in brand new projects, but it might be wise to avoid transferring to UUIDs in a running production system unless you have a good reason to do so.
