// require lib
const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const connectDB = require('./models/connectDB');

// initial express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
const userRoute = require('./routes/userRoute');
const eventRoute = require('./routes/eventRoute');

connectDB.connect();

app.use('/user', userRoute);
app.use('/event', eventRoute);

// localhost:port/api/v1/user/ ->

// run server on port 3000
app.listen(PORT, () => {
  console.log('SERVER IS RUNNING...'.cyan);
})
