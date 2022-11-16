In the fullstack-auth-client folder, initialize the client using create react app
npx create-react-app .
NPM Install react-router
npm i react-router-dom
Create a .env.local file in the project root
touch .env.local
Add the following environment variables to the .env.local file:
REACT_APP_URL_ENDPOINT = http://localhost:4000
REACT_APP_TOKEN_HEADER_KEY = ci_token_header_key
Run npm start to test that your client is running on port 3000

** CODE NEEDED TO MANAGE THE STATE OF USER AUTHENTICATION CLIENT SIDE **
Approach: For this part of the project, the code needed to manage the state of user authentication client side will be provided to you. The following code uses react context to create an application wide custom hook that stores its own internal state. This custom hook called useAuth will manage the user token and load it in from the browser local storage when the client is refreshed, in effect persisting the user's logged in status. The useAuth hook provides functionality to register, login and logout a user from the application which we will use in our application pages.
