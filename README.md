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

One challenge I faced was handling asynchronous calls to the PostgreSQL database from React components. I solved this by using async/await syntax. For example:

```js

const getTransactions = async () => {

  const res = await pool.query('SELECT * FROM transactions');

  setTransactions(res.rows); 

}

```

This allowed me to query the database and update component state once the results are returned.

Overall, integrating a PostgreSQL database into a React app took some learning and troubleshooting. But I gained good experience with managing application state, effects, and writing async logic.
