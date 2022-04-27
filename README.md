# Another Tech Blog

## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [References](#references)
* [Process](#process)
* [Results](#results)
* [Credit](#credit)

## Description
Create CMS-style blog site where a developer can publish articles, blog posts, thoughts, and opinions about tech.

## Installation
Open the terminal and type the following to install
```
npm install
```

## Usage
To run this application, type the following into the command line:

```
npm start
``` 

Open another terminal to the side and type the following into the command line:

```
npm run seed
``` 

## Technologies
* HTML
* CSS
* VS Code
* JavaScript
* Terminal
* Git/GitHub
* MySQL
* Sequelize
* Express.js
* Dotenv
* Insomnia
* Handlebars
* bcrypt

## References

## Process
### STEP 1. - SETUP
* Created GitHub Repository with a unique name.
* Pushed first commit of files into the new Repo using Git.
* Organized folder and file directory structure.
* Installed Express, Sequelize, MySQL, Dotenv, Handlebars, and bcrypt
* Imported Sequelize connection and synced database

### STEP 2. - SETUP MODELS
* Created Comment, Post, and User models
* Established associations between models
* Created seed files for each of the models

### STEP 3. - SETUP API AND HOME ROUTES
* Created API routes for Comment, Post, and User
* Created home routes
* Used Insomnia to test all routes 

### STEP 4. - HANDLEBARS
* Created HTML and CSS templates to use as Handlebars template
* Used template to create handlebars views, layouts, partials
* Used handlebars insert variables into views

### STEP 5. - CREATE FUNCTIONALITY
* Wrote JavaScript functionality for application
* Added middleware to authenticate login

### STEP 5. - FINALIZE
* Made various commits throughout process to save progress
* Deployed to Heroku
* Made tweaks and finished README.md

## Results
* [Heroku Link](https://desolate-reaches-38004.herokuapp.com/)
* [GitHub Repository](https://github.com/etrenholm/another-tech-blog)

### Output Example
![mockup](/assets/techblog-1.png)
![mockup](/assets/techblog-2.png)
![mockup](/assets/techblog-3.png)

## Credit
Erica Trenholm: https://github.com/etrenholm

### ©️ April 2022