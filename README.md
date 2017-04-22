# Homework #1

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Node
		* Node allows coding with JavaScript on the server-side.
	* Chrome's V8 Engine
		* Chrome's V8 Engine is an extension of C++ which implements a JavaScript engine.
	* GET request
		* A `GET` request is sent from the client to the server to request data.
	* Server
		* A server is a place where a website's runtime code exists and executes.
	* express
		* Express is a framework built on Node. Express is to Node as React is to JavaScript.


2. Fork and clone this repo.
		
	* Run the command `npm init` to create a `package.json` file.
	* Install express `npm install --save express`
	* Create a file called `server.js`.
	* `require` express and create your server app.
	* Tell your app to listen to port `5000` and then start your server with `node server.js`. (Install `nodemon` globally if you would like. `npm install -g nodemon`)
	* Add a route called `/name` that returns your name.
  	* Add a route called `/friends` that returns an array of some of your friends' names.
  	* Add a route called `/favorite-film` that returns an object that has details about one of your favorite movies.
  	* All of these routes are just handling `GET` requests.



#### Congratulations on finishing Homework #1!

For more information about our other courses visit: https://www.lambdaschool.com
