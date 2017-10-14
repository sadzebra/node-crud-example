# node-crud-example

Get Started

Go to /config/db-config.js and change <URL GOES HERE> To db url.

To isntall:
npm install

Start Server
npm run dev

Run Unit Tests (Start server)
npm run test

This app has also been manually tested using Postman.

Dependencies
  - body-parser - Middleware used by ExpressJs reads a forms input and converts it to JavaScript Object and is accessible by req.body.
  - express - Express has simple and clear support nodes HTTP headers and allows me to used create(), get(), update() and delete() methods with minimal fuss.
  - mongoose - To interface with MongoDB

Dev Dependencies
  - chai - Assertion library used in testing
  - chai-http -  Assertion library support HTTP
  - mocha - Testing Framework
  - nodemon - Nodemon watches the project directory, if anychanges are made it resets the application
},
