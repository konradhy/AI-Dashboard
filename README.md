# AI-Dashboard

Welcome to the AI-Dashboard repository. This is a dashboard built with Material-UI that connects to a MongoDB database and displays various data visualizations, including graphs, maps, charts, and grids.





## Project Structure

The project is divided into two main folders: client and server.

- The client folder contains all the code related to the front-end of the application such as assets, components, and state management.
- The server folder contains all the code related to the back-end of the application such as controllers, data models, and routes.

## Tools and Frameworks

The server-side tools used in this project include:

- cors: a node.js package for providing connect/express middleware that can be used to enable CORS
- dotenv: a zero-dependency module that loads environment variables from a .env file
- express: a minimal and flexible Node.js web application framework
- helmet: a collection of 14 middleware functions to help set some HTTP headers for security
- mongoose: a MongoDB object modeling tool designed to work in an asynchronous environment
- morgan: an HTTP request logger middleware for Node.js
- body-parser: a middleware that parses incoming request bodies in a middleware before your handlers, available under the req.body property
- country-iso-2-to-3: a library for converting ISO 3166-1 country codes to ISO 3166-2 subcountry codes.

The client-side tools and frameworks used in this project include:

- React: a JavaScript library for building user interfaces
- React Hooks: a way to use state and other React features without writing a class
- Nivo: a collection of components to easily create beautiful data visualizations
- Material-UI: a popular React UI framework
- reduxjs/toolkit redux: a set of utilities that helps writing Redux logic with less boilerplate
- react-router-dom: a collection of navigational components that compose declaratively with your application



## Deployment instructions

Below are instructions to set up at Render.com. Note that Render's free tier servers turn off if not used every 15 minutes,
this results in delays if the server isn't actively used.

- Set up environment variables on render.com for server and client

- Create a new Web Service for your backend
  - While configuring backend, set root directory to server
  - set build command to npm install
  - set start command to npm run start
  - Navigate to advanced -> Environment Variables
    - Add MONGO_URL
    - Set Port to 5002
    - Leave the rest of advanced unchanged
- Click create Web Service button

- Create a new static site for the frontend
  - Connect to the same repo as backend
  - set root directory to client
  - build command - npm run build
  - publish director - build
  - Navigate to advanced -> Environment Variables
    - Set REACT_APP_BASE_URL to the backend's url (get the url from already deployed backend)

## Summary

This project is built using MongoDB for the database, React for the front-end, Redux for State Management, and Material-UI for components. It features Material-UI carts, tables, graphs, ratings, sidebars, and data grids. It has client-side and server-side pagination, and it has custom data grid toolbars with search, filter, exports, and density selectors. The project uses a data structure that uses foreign keys and grabs relevant data across tables. It also includes MongoDB aggregate calls and it uses Nivo pie charts, line charts, and maps.
