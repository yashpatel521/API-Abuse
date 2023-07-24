## TOPIC : [API ABUSE](https://github.com/yashpatel521/API-Abuse)

### Description

- Express JS for APIs and middleware
- Database use MySQL
- Example for API Attacks
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
$ npm install OR npm i
```

## Running the app

```bash
# To start the app on PORT '5000'
$ npm run start
```

## View Pages

```bash
# Login Page
$ http://localhost:5000/views/login.html

# Secure Login Page
$ http://localhost:5000/views/securelogin.html
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
 >> This API is with Limit set to number of requests per seconds for '3'.
```
