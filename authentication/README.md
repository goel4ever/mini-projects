# Authentication

How to handle authentication for your Node server using Passport.js
Does not cover Frontend authentication for now. 
Use this to configure your Backend authentication (Generate token for each user & protect routes)

## Scope

* Handling protected routes
* Handling JWT tokens
* Handling unauthorised responses
* Creating a basic API
* Creating models & schemas

## Passport.js

Passport is authentication middleware for Node.js. As it’s extremely flexible and modular, Passport can be unobtrusively dropped into any Express-based web application. A comprehensive set of strategies supports authentication using a username and password, Facebook, Twitter, and more.

## Development

* $ mongod
* $ npm run dev

## API

* $ POST http://localhost:8000/api/users  {"user":{"email":"a@b.com","password":"test"}}
* $ GET http://localhost:8000/api/users/current  Header: Authorization: Token {{Token}}

## Reference

* https://medium.freecodecamp.org/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e
