# termometrouy

The server/api for the termómetro app.

## Endpoints

#### User routes

* POST `/user/signup` will attempt to create a new user. The request is expected to contain a **name**, **email**, **password** and **company** in its body. 
* POST `/user/login` are expected to contain an **email** and **password**. If the credentials are OK a signed token will be sent back with the response.
* GET `/auth` will simply check if there's a valid token in the request's header, that's it.

#### Survey routes

* POST `/survey/create` will attempt to create a new survey. *WIP*

## Testing

`npm run test` should trigger the automatic tests provided you have mocha installed globally.
