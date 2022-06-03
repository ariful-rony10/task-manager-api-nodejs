// Dependencies
const express = require('express');
const app = express();
const tasksRoute = require('./routes/tasks');
const connectDb = require('./database/database');
const path = require('path');
require('dotenv').config();

// Middleware
app.use(express.static('./public'))
app.use(express.json()); //

app.use('/api/v1/tasks', tasksRoute);

//after
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

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
