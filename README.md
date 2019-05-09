# README

## About

This is a simple CRUD app written with React and Ruby on rails.

## Features

Full CRUD functionality for buy orders, which include a name, package type, and and max bid pice.

## Setup

If you'd like to run it locally, begin by installing ruby, rails, and postgres (if you don't already have them):
```
brew install rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
rbenv install 2.5.1
gem install rails
Visit Postgres.app to get postgres.
```

Next, run the following commands in the root of this project to setup rails:
```
bundle install
bundle exec rails db:create
bundle exec rails db:migrate
```

Finally, start the server:
```
rails s
```
visit http://localhost:3000/
