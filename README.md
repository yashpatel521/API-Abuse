## TOPIC : [API ABUSE](https://github.com/yashpatel521/API-Abuse)

### Description

- Express JS for APIs and middleware
- Database use MySQL
- Example for SQL Injection
- Prevention

## JavaScript Library Used for view pages

- JQuery
- Bootstrap
- validate Js

## NPM packages used for backend development

- express
- express-rate-limit
- mysql
- cors

## Installation

```bash
$ npm install
```

## Running the app

```bash
# To start the app on PORT '5000'
$ npm run start
```

## APIs

```bash
# server status
$ http://localhost:5000/

#Login API [POST]
$ http://localhost:5000/api/users/login
    Request : {
                email : '',
                password : '',
              }

#Login API [POST]
$ http://localhost:5000/api/users/bruteForceLogin
    Request : {
                email : '',
                password : '',
              }
 >> This API is wil Limit set to number of requests per seconds
```

## View Pages

```bash
# Login Page
$ http://localhost:5000/views/login.html

# Secure Login Page
$ http://localhost:5000/views/securelogin.html
```
