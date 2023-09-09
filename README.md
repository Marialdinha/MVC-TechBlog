# MVC-TechBlog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
  - [Description](#description)
  - [Screenshot](#screenshot)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contact](#contact)

## Description
This is a CMS-style blog site, where developers can publish their tech blog posts and comment on other developers’ posts. <br/> 
This site followes MVC paradigm. Model-View-Controller (MVC) is an architectural pattern that structures a codebase in three distinct sections, according to a software design philosophy known as the separation of concerns. <br/>
This app uses sequelize, express-handlebars and mysql2. <br/>

## Screenshot
This appliation can run form Visual Studio Code by using npm start. <br/> <br/>
![localhost](./Develop/assets/Screenshot-TechBlog.png) <br/> <br/> 

## Installation
1 - On Develop folder start mysql , then run: source db/schema.sql <br/>
2 - On bash terminal, run: npm i (to initialize) <br/>
3 - On bash terminal, run: npm start (for the app to start running on the server) <br/>

## Usage
1 - User can see all posts in the "Blog List" without being logged in. <br/>
2-  To do anything else, user has to login. <br/>
3-  If user is not created in the database, then the user has to Sign-Up. <br/>
4-  First time user is created in the database, then user is automatically logged in. <br/> 
5 - If user is already created in the database, then user can just login in the login page.  <br/>
6-  When logged in, user can create a blog or comment in someone's else blog.  <br/> 
7-  When logged in, user sees their own blog on "My Blogs" and all other blogs in "Blog List".  <br/>

## Contact
You can contact me via email: marialda@bellsouth.net
