# Finance Tracker

This is a React application to track Ethereum transactions. Users can sign up for an account to save their transaction history.

## Features

- User authentication - sign up and login 
- Add new transactions which get saved to user's account
- List of transactions persisted across sessions 
- Delete previously added transactions
- Responsive design

## Routes

- `/` - Home page with transaction list 
- `/login` - Login page
- `/signup` - Signup page

## Local Setup

Prerequisites: Node.js

1. Clone the repository

```
git clone https://github.com/shreyanshtri26/Finance-Tracker.git
```

2. Navigate into the project folder

```
cd Finance-tracker
```

3. Install dependencies

```
npm install
```

4. Start the app

```
npm run start
```

This will open the app in your browser on http://localhost:3000

## Challenges

One challenge I faced was handling user authentication with React Router. I implemented protected routes and redirecting based on auth state to create a seamless user experience.

Overall, incorporating user accounts required more state management logic on the client side. But it was good experience designing real-world features like customizable accounts.

## Standout Features

- User authentication with protected routes 
- Persisting transaction history to user accounts
- Input validation and error handling
- Modular components and routing 
- PostgreSQL integration

Let me know if you have any other questions!