# Implementation Detals:

## Technologies Used
Frontend: Angular

Backend: Node.js

## Backend
There are two main endpoints

/get-url
 - Gets the original url from a shortened url

/submit-url
 - Saves the original url into a map as the key and generates a shortened url that is saved as a value

### Helper Functions
shortenUrl()
 - Generates a SHA256Hash from the url and takes the first 10 characters, saves these as the shortened 'slug' of the original url

## Frontend
There are two main components

### urlshortener:
 - This takes in a url from the user and sends it to the server which then returns the shortened url

Form Validation: 
 - Makes sure that submitted url is http(s)

Error Handling: 
 - If error from server side, shows error message
 - If error is client side shows invalid url message

### urlredirector:
- If user searches shortened url, redirects to the original url page

Error Handling:
- If url is not a saved url, shows error message and a button to go back to main page

# How To Run
1. npm install to get required dependencies (do this in both lelandfrontend and lelandbackend)
2. To start lelandfrontend, enter src folder and run 'ng serve'
3. To start lelandbackend, run 'node server.js' while in the folder

# Testing
Manual testing was performed to test for 
- Rrror messages show up in correct situations
- URL redirection performs correctly
- URL is saved successfully and returns shortened url
- Basic application functionality worked correctly

No programmatic tests were created due to time limitation

# Tools Used
- Found examples of simple forms online that I incorporated and altered to fit into frontend
- Used algorithm found online to compute SHA256Hash
## AI
Used ChatGPT in the following situations:
 - to perform simple boiler-plate tasks such as setting up the node.js server
 - to remind myself of basic Angular syntax (such as module imports, data-binding) since I have not used Angular in awhile

Did NOT use ChatGPT or any other AI tools to:
 - Generate solutions to the assigned problem
