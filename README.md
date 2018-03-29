# termometrouy

The server/api for the termómetro app.

## Endpoints

POSTs to `/user/signup` will trigger an attempt to create a new user. The request is expected to contain a **name**, **email**, **password** and **company** in its body.  

POSTs to `/user/login` are expected to contain an **email** and **password**. If the credentials are OK a signed token will be sent back with the response.

POSts to `/auth` will simply check if there's a valid token in the request's header, that's it.


