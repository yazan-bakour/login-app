Project plan
- Apply the requirements into a wireframe to visualize the user login journey.
- Slice the requirements into individual stories or tasks. 
- Initiate the project with react and react router.
- Build the files architecture, and setup routes.
- Develop layout page.
- Develop a login page.
- Apply route logic for login and logout.

Dependencies 
-I only used the react router as an external package, I chose it because it is the most common best practice to be used for client side routes without page refresh.

State management
- I used useContext to store the user authentication and I wrapped the entire route with AuthProvider which provides fake authentication signin and signout api.

Logic
- In the App.js I wrapped the route/page (Dashboard) that the user needs to login, with the RequireAuth function that will save the current location/page and check if the user is authenticated and redirecting to the desired new page which is Dashboard.
- I created 3 pages 
  - Layout as a parent component that hold children components such as home and dashboard. And it contains basic header and body, 
  - Home where regular user can login and falls into default page, 
  - Login where added a logic to handle user input, errors/validation, and submit form logics.
  - Dashboard where logged in user lands and with ability to logout by removing the user session and redirect back to home page.