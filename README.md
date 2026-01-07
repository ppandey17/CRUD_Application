# Internship Application Tracker

A full-stack CRUD web application to track internship applications using React.js, Node.js, Express, and MySQL.

## Prerequisites

-   Node.js installed
-   MySQL installed and running

## Environment Setup

### Backend
1.  Navigate to the `backend` directory.
2.  Copy the example environment file:
    ```bash
    cp .env.example .env
    ```
3.  Open `.env` and update the database credentials:
    ```env
    DB_HOST=localhost
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_NAME=internship_tracker
    PORT=5000
    ```

### Frontend
1.  Navigate to the `frontend` directory.
2.  (Optional) Create a `.env` file if you need to change the API URL:
    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

## Setup Instructions

### 1. Database Setup

1.  Open your MySQL client.
2.  Run the script located at `internship-application-tracker/database.sql`.

### 2. Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd internship-application-tracker/backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    node server.js
    ```

### 3. Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd internship-application-tracker/frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the React app:
    ```bash
    npm start
    ```

## Deployment

### Backend (e.g., Render, Heroku)
1.  Set the environment variables (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`) in your cloud provider's dashboard.
2.  Deploy the `backend` folder.

### Frontend (e.g., Vercel, Netlify)
1.  Set the `REACT_APP_API_URL` environment variable to your deployed backend URL.
2.  Deploy the `frontend` folder.

## Features

-   **Add Application**: Fill out the form to add a new internship application.
-   **View Applications**: See all applications in a table.
-   **Update Status**: Click "Edit Status" to change the status of an application.
-   **Delete Application**: Remove an application from the list.

## Tech Stack

-   **Frontend**: React.js, Axios
-   **Backend**: Node.js, Express.js
-   **Database**: MySQL
-   **Tools**: Dotenv (Environment Management)
