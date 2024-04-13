# DT-Market-Place
DT Market Place is an application that can be utilized by users who need to buy or sell their products. 
If users wish to contact "DT Market Place", they can click the "Contact Us" button and will be redirected to a show page with a form to be filled out.

Users will need to login if they need to buy any item. If the item is in stock, the buy button will be shown. If not, "Out of Stock" will be displayed in lieu of the buy button. If they don't have an account they need to create account. When users click the buy button, it will make a request to update the qty. of the item by decreasing it by 1.

If anyone need to sell new product they can click the "Join us" or "Create Account" button and they will be able to fill out and submit a form. Once they submit their form, they will be able to see the store with edit and delete buttons under each item. Moreover, they will also be able to add new products by clicking the "Add New Product" button.

The following models are included: products.js & users.js

The following partial files are included: headers.ejs & footers.ejs

The following list of routes are included:

In controllers/products.js:

GET/Items/ allows users to see the home/index page
GET/Items/new/ allows sellers to add a new Item
GET/Items/:id/ allows users to see the products(show page)
POST/Items/ allows sellers to add their item
GET/Items/:id/edit/ allows sellers to edit items
PUT/Items/:id/ allows sellers to update items
DELETE/Items/:id allows sellers to delete items
In controllers/users.js:

GET/Items/login allows sellers or buyers to login
POST/Items allows users or buyers to have user name and password
DELETE/Items/logout allows users to logout
Wireframes
- Please see the wireframe for the index page below:

image

- Please see the wireframe for the show page below:

image

- Please see the wireframe for the "Contact Us" page below:

image

Please see the wireframe for the "Create Account/Login" page below:
image

User Stories
As a user, I need to see available products so that I can choose an item to buy.
As a user, I need to be able to create an account so that I can always come back and make a purchase.
As a user, I need to login in to the app so that I can access available products.
As a user, I need to see a buy button so that I can click and see the total qty. reduced.
As a user, I need to see if the item is out of stock or not so that I have the latest information.
As a user, I need to logout of my account so that I assure that someone will not be able to access my account.
As a seller, I need to create account so that I can join the team and provide my products for sale.
As a seller, I need to login in to the app. so that I can access the products.
As a seller I need to see the edit and delete buttons for every product so that I can delete or edit them.
As a seller, I need to be able to logout of the system so that I can have peace of mind.
MVP Goals
Technologies used: Javascript, Node.js, CSS, ejs, Express, MongoDB, Mongoose, Postman, and Figma(Only for wireframes without Dev Mode)
Full CRUD(Create, Read, Update, Delete) Functionality with all 7 RESTful routes
Login and Logout access for users
Stretch Goals
As a buyer, when I press the buy button under an item, I need to be redirected to a payment page where I can enter my payment information and receive "Order Placed" message. In addition, I need to have a link to track the shipment.
