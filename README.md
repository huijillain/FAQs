Topic:
Creation of an HTML/JavaScript/CSS based Website prototype.
Server-side processing with Node.js, MySQL, and MongoDB. 

Description:
Designed and constructed a prototype web-site for the Travel Experts travel agency.  A survey of travel-related websites is encouraged. At beginning in the project, the focus was on producing HTML pages with CascadingStylesheet and JavaScript enhancements.  
As the project progresses, these pages were enhanced to include server-side functionality and evolved into a dynamically generated, database-driven web application.  Developed a number of prototype components which demonstrate in three presentations. 
Developed Node.js scripts which provide dynamic generation of the web pages developed earlier, as well as capturing form data from customers.The scripts store and retrieve data using either a MySQL and a MongoDB database server. Used the following documents to enhance the web pages you developed earlier:
1.Packages
2.Products
3.Suppliers
4.Products_suppiers
5.Packages_products_suppliers
6.Agencies
7.Agents
8.Customers
9.Bookings

To install the database, used the MySQL Workbench, generated the entire database including test data. 
MySQL and MongoDB: used a tool Studio 3T to import the MySQL database into Mongo, generating collections for the MySQL tables. 

Assumptions:
1.Customers make a booking for only one package per booking
2.When a package is set up the price is never changed

Features:
1.Modify the web page that lists the packages available. Instead of providing package data that is statically coded in the HTML, insert code that will read the database and generate the package list from the travel package table. 
Each package should display a description, start and end dates, and price.  Before including a package on the page, make sure thatthe package end date is greater than (or equal to) the current date, so onlyvalid packages are listed. Also, check whether the package start date is less than the current date, and if it is, write out some CSS to make the start date bold and red.
2.Re-design the contact page so that it is generated from the database and lists all the agencies, showing the agency address and phone number, followed by the contact information for each agent at that agency.
3.When the package list is being generated, create an order button next to each package which will go to an order page that has a customer order form for that package. Customers will enter their data and submit the order which will result in creation of a customer record and a booking record. 

