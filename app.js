// Dependencies
const express = require('express');
const app = express();
const tasksRoute = require('./routes/tasks');
const connectDb = require('./database/database');
require('dotenv').config();

// Middlewear
app.use(express.json()); //

app.use('/api/v1/tasks', tasksRoute);

// PORT
const port = 3000;

const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
