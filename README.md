# Datifyy BE Assifnment - User Authentication

## Overview

Implemented a Secure Backend API Using Node JS, Javascript, with PostgresSQL as Database.The API provides user registration (sign up) and authentication (login) endpoints. Additionally, implemented rate limiting on a specific secure endpoint to enhance security.

## Project Structure

The project is structured as follows:

- `src`: Contains the source code of the Node.js application.
  - `models`: PostgresSQL Schema for user data.
  - `routes`: CRUD APIs.
  - `utils`: Utility functions and helper methods.
  - `repository`: Communicate with Database.
  - `services`: Business Logic.
  - `controller`: First level of Layer.
  - `config`: Setup Configuration data.
  - `middlewares`: Middleware functions.
- `config`: Configuration files for the application.
- `index.js`: Main entry point of the application.

## User Schema

- username
- email
- password

Example:
```json
{
  "username": "example_username",
  "email": "example_email",
  "password": "example_password"
}
```

## Encrypting Passwords and JWT Tokens

 - Used `bcrypt` package to encrypt Password before storing into the database.
 - Implemented validation to ensure unique usernames and emails.
 - Collected and validated user information, including username, email, and password.
 - Used `jsonwebtoken` package to generate JWT tokens and uses the token to verify the user.
 - Verified user credentials against the stored information in the database.
 - Generated and returned a secure authentication token upon successful login.

## Rate Limiting

 - used `express-rate-limiter` package to Implement rate limiting on this endpoint to prevent abuse and enhance security.
 - Created a secure API endpoint that requires authentication.
 - Rate Limit : 5 requests per 2 minutes.


## Setting Up the Project Locally

Follow these steps to set up the project on your local environment:

1. **Clone the Repository:**
   
   ```bash
   git clone https://github.com/vishnu-mouli-102408/Datifyy-BE-Assignment
   ```
2. **Install Dependencies:**
   
    ```bash
     cd Datifyy-BE-Assignment
     npm install
    ```
3. **Setting Up Environment Variables**
  - Create `.env` file in the root directory.
  - Add these following varaibles to the `.env` file:
    
     ```bash
     PORT=3000
     DB_SYNC=true
     JWT_SECRET=some_random_string
     ```
4. **Configure PostgreSQL in the Local Developement Server**
   - Navigate to the src directory `cd src`.
   - Run `npx sequelize init` to create models,migrations and config files.
   - In the `config/config.json` file, Enter your Local Postgres Credentials.
      Example :
     
       ```json
       {
        "development": {
          "username": "your_username - default - root",
          "password": "your_password",
          "database": "your_DB_Name",
          "host": "127.0.0.1",
          "dialect": "postgres"
        },
      }
      ```
    - Run `npx sequelize db:create` to Create a Database.
    - Run `npx sequelize db:migrate` to migrate the models to the Database.    
5. **Run the Application**
   
   ```bash
   npm start
   ```
6. Make Sure to comment out the `DB_SYNC=true` or make it `false`. `DB_SYNC` has to run only once.

       
# API Endpoints:

- **CRUD APIs for User Registration:** `/api/v1/signup`
- **CRUD APIs for User Login:** `/api/v1/signin`
- **Rate Limiting Secured Endpoint API:** `/api/v1/isAuthenticated`

# Usage:

- Use tools like Postman or CURL to interact with the APIs.
- Create, retrieve, update, and delete User using the CRUD APIs.
- While using the Rate Limiting Endpoint, Make sure to send the JWT Token you've got during signIn process as headers `x-access-token`: `JWT_Token`.

# Note:

- Ensure that PostgreSQL is running locally.

# Dependencies:

- Node.js
- Express.js
- sequelize
- sequelize-cli
- pg
- Other dependencies listed in `package.json`
   
