# Employee Management

A simple employee management application built with:
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, Mongoose
- Database: MongoDB

## Project Overview

This app allows you to:
- Add new employees
- View all employees in a table
- Search employees by any field
- Update employee details
- Delete employees
- See total employee count dynamically

The client UI is served from `client/index.html` and interacts with the Express API on `server/`.

## Repository Structure

- `client/` - frontend files
  - `index.html` - main UI
  - `style.css` - styling
  - `script.js` - client logic and API calls
- `server/` - backend files
  - `index.js` - Express server setup
  - `db.js` - MongoDB connection
  - `controller/UserController.js` - employee CRUD controllers
  - `model/userSchema.js` - Mongoose employee schema
  - `view/routes.js` - API routes
- `.gitignore` - ignored files
- `README.md` - project documentation

## Features

- Add employee with unique `id`, `email`, `phone`, and `employeeId`
- Edit employee details using a modal
- Delete employees with confirmation
- Search table rows instantly
- Display current employee count
- Backend validation using Mongoose schema

## Setup

1. Clone the repository:

```bash
git clone https://github.com/Syedmuneer07/EmployeeManager.git
cd EmployeeManager
```

2. Install server dependencies:

```bash
cd server
npm install
```

3. Create a `.env` file in `server/` with your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/your-db-name
PORT=5000
```

4. Start the backend server:

```bash
npm start
```

## Running the App

- Open `client/index.html` in your browser
- Or use a static server to serve the `client/` folder
- Make sure the backend is running on `http://localhost:5000`

The frontend will call endpoints such as:
- `GET /getAll`
- `POST /addEmp`
- `PUT /updateEmp/:employeeId`
- `DELETE /deleteEmp/:employeeId`

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/getAll` | Get all employees |
| POST | `/addEmp` | Create a new employee |
| PUT | `/updateEmp/:employeeId` | Update employee data |
| DELETE | `/deleteEmp/:employeeId` | Delete an employee |

## Notes

- The app uses CORS to allow frontend requests from the browser.
- The Mongoose schema ensures unique `id`, `email`, `phonenumber`, and `employeeId`.
- Use the browser console for debugging fetch requests and backend responses.

## License

This project is provided as-is.
