# AI-Dashboard

Deployment instructions
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
