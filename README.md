# AI-Dashboard

Deployment instructions

- Set up environment variables on render.com for server and client
- Create a new Web Service for your backend
  - While configuring backend, set root directory to server
  - set build command to npm install
  - set start command to npm run start
  - Navigate to advanced -> Environment Variables
    - Add MONGO_URL
    - Set Port to 5002
    - Leave the rest of advanced unchanged
