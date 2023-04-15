# NOTES

Commands and notes during course follow-along.

# 1 Getting started

Result of Module 1 is located in branch 1_getting_started

## Setup ExpressJS as dev server

npm i express
npx tsc src/server/server.ts
node src/server/server.js

npm i -D ts-node-dev
npx tsnd src/server/server.ts
npm run dev:server

## EJS as Templating library in server.ts

ejs.co
npm i ejs
configured in server.ts
npm run dev:server

## config.ts allows to run with ENV params

PORT=3000 HOST=127.0.0.1 npm run dev:server

## Setup MongoDB in Docker

Download and install "Docker desktop"
docker-compose.yml contains configuration for mongodb image
Run the database server:
docker-compose up
added as a script:
npm run db:server

## Setup UI for MongoDB (Compass)

Download and install "MongoDB Compass"
port is configured in docker-compose.yml
variables are defined in config.ts

## Connection to database: Install the MongoDB Driver

npm i mongodb
client connection is done in db.ts

## Load test data

npx tsnd src/dev/load-test-data.ts

## Web contents packing: Configure ReactJS and Webpack

https://eng.galoy.io/creating-a-development-environment-for-node-and-react/
npm i react react-dom
npm i webpack webpack-cli
npm i ts-loader
Pack web contents with
npm run dev:bundler

## Code Style: Configure Prettier

npm i prettier -D
uses prettier.config.js

## Linting: Configure ESLint

npm i eslint -D
npm i @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks -D
uses .eslintrc.js and .eslintignore
run code analysis with:
npm run lint

## Source control

git init
git remote add origin https://github.com/oscarcenteno/mern_contests_app.git
git branch -M main
git add .
git commit -m "initial commit"

git push --set-upstream origin main
git checkout -b 01_getting_started main
git commit -m "git commands to finish 'getting started'"

git push --set-upstream origin 01_getting_started

Create pull request:
https://github.com/oscarcenteno/mern_contests_app/pull/new/01_getting_started

git checkout -b 02_why_react main
git push --set-upstream origin 02_why_react

# 2 Wny React

React = WHAT
ReactDOM = WHY
https://eng.galoy.io/react-intro/

## Install React Developer tools for Chrome

## db init

docker db is not persisted, so this is the script to initialize it
npm run db:init

# 3 Working with data

calling apis
npm i axios
CORS middleware
npm i cors

# Using Genius ChatGPT

npm i --save-dev @types/react
