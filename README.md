# JWT Authentication

This is my JWT_Authentication App it help When the client want to use the Authenticated things then it will run as a MIDDLEWARE to that and finds that if the user is login or they have the verified JWT_token then it allows to do it, otherwise redirect user to the Root ..

## Overview

This repository contains a sample implementation of JSON Web Token (JWT) authentication. JWT is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization purposes in web applications.

## Features

- **User Registration**: Register new users with unique credentials.
- **User Login**: Authenticate users and generate JWT tokens for subsequent requests.
- **Token Refresh**: Allow users to refresh their JWT tokens to extend their session.
- **Middleware**: Implement middleware to protect routes that require authentication.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens.
- **MongoDB**: NoSQL database for storing user information.
- **dotenv**: Module to load environment variables from a .env file.

## Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/JWT_authentication.git
cd JWT_authentication
Install dependencies:
```

```bash
Copy code
npm install
```

Create a .env file in the project root and configure environment variables:

# env

Copy code
PORT=8000 // give your port here
MONGODB_URI=mongodb://localhost:27017/userlist
JWT_SECRET=your-secret-key // BeAMan
Start the server:

# bash

Copy code

```bash

npm start dev

```

The server should now be running at http://localhost:8000.

### API Endpoints

POST /api/register: Register a new user.
POST /api/login: Log in and receive a JWT token.
POST /api/refresh-token: Refresh the JWT token.
GET /api/protected-route: Example protected route requiring authentication.
Usage
Register a new user using the /api/register endpoint.
Log in with the registered credentials using the /api/login endpoint to receive a JWT token.
Use the token to access protected routes like /api/protected-route.
To extend the session, use the /api/refresh-token endpoint with the refresh token.
Contributors
Your Name saiyamdubey@gmail.com
License
This project is licensed under the ISC License.

created By --- `Saiyam_Dubey`,
