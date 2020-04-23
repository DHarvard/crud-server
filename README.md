## RESTful CRUD Node Server 

### Mongoose as your data modeling tool
I use Mongoose as my data modeling tool. I create a schema for user and post in the models folder using Mongoose. (I commented out any of the code that uses the users inside my posts so that I have the basics working)

### Cloud-based MongoDB as your data store
I use MongoDB as my data store and it is connected in my app.js file.

### At least 3 endpoints to GET data from your server
I use 2 GET endpoints in my recipes.js file in the routes folder

### At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs
I use 1 PUT endpoint in my routes.js file in the routes folder and 1 PUT endpoint in my auth.js file in the routes folder

### At least 1 endpoint allowing user to create an item via POST
I use 1 POST endpoint in my routes.js file in the routes folder and 1 POST endpoint in my auth.js file in the routes folder

### At least 1 endpoint allowing user to delete an item via DELETE
I use 1 DELETE endpoint in my routes.js file in the routes folder

### Your datastore will contain at least 25 items
I have included 25 post examples using mongoDB

### Your app will be deployed to production using some service like Heroku, Digital Ocean, etc.
This is the link to my Heroku app but it doesn't seem to be working. I used the auto-deploy method in the settings and then linked my github repo for the app to Heroku.
[View Heroku app](https://thawing-chamber-73654.herokuapp.com/recipes/posts)

### All of your source code will be properly uploaded to GitHub
This is my Github repo. [View Github repo](https://github.com/DHarvard/crud-server)

### Your ReadMe file will accurately describe the server install process (if any) and how to use the APIs
After cloning the repo:

Run an 'npm install' in the terminal under the correct directory.

Run 'npm run start' to locally run the application




