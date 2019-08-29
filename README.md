Basic NextJS web app with api authenticated with Auth0
===


DONE
===

create new directory
yarn init
yarn add next reat react-dom
add pages/index
add api/index
add now.json

add pages/_app.js
add lib/react-auth0-wrapper.js

yarn add axios @auth0/auth0-spa-js

add next.config.js

TODO
===

add login / signup button

signup test user
login test user

Authenticate and view private web page
---
add pages/profile.js 
profile.js - make only accessible when logged in
profile.js - show current user email

Authenticate and GET private API endpoint
---
GET /api/index.js - logged in respond with user email
GET /api/index.js - logged out respond with 401

