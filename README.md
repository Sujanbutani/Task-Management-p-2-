# Task Management API

This is a Task Management API built using Node.js, Express, MongoDB, and JWT Authentication. The API allows users to register, log in, manage their tasks, and reset passwords.

## Features

- User Registration and Login
- Password Reset Functionality
- Create, View, and Manage Tasks
- Role-based Access (Admin and User)
- JWT Authentication for secure API access

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt.js
- dotenv
- helmet
- nodemailer

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sujanbutani/Task-Management-p-2-.git

2. Install dependencies:

    ```bash
    npm install

3. .env file

     ```
    MONGODB_URI=your_mongo_db_connection_string
    EMAIL_SERVICE=gmail
    EMAIL_USERNAME=your-email@gmail.com
    EMAIL_PASSWORD=your-email-password
    JWT_SECRET=your-jwt-secret-key
    PORT=5000
    ```

4. Start the development server:

   ```bash
   npm start
   ```

## API Endpoints

### User Authentication
1. Register User (Post) :- localhost:5000/api/auth/register
2. Login User (Post) :- localhost:5000/api/auth/login

### Password  Management
1. Post(requestPasswordReset) :- localhost:5000/api/password/requestPasswordReset
2. Post(resetPassword) :- localhost:5000/api/password/resetPassword

### Task Management
1. Post :- localhost:5000/api/tasks

## Environment Variables
- PORT: The port for the server to listen on.
- MONGODB_URI: Your MongoDB connection string.
- JWT_SECRET: Secret key for signing JWT tokens.
- EMAIL_SERVICE: your-email-service
- EMAIL_USERNAME: your-email
- EMAIL_PASSWORD: your-email-password