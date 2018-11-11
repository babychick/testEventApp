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
app.use(express.static('uploads'));

// routes
const userRoute = require('./routes/userRoute');
const eventRoute = require('./routes/eventRoute');
const accountRoute = require('./routes/accountRoute');
const eventTypeRoute = require('./routes/eventTypeRoute');
const attendeeRoute = require('./routes/attendeeRoute');
const registrantRoute = require('./routes/registrantRoute');
const scheduleRoute = require('./routes/scheduleRoute');
const upImageRouter = require('./routes/upImageRouter');
const sendEmail = require('./routes/sendEmailRoute')

connectDB.connect();

app.use('/User', userRoute);
app.use('/Event', eventRoute);
app.use('/Account', accountRoute);
app.use('/EvenType', eventTypeRoute);
app.use('/Attendee', attendeeRoute);
app.use('/Registrant', registrantRoute);
app.use('/Schedule', scheduleRoute);
app.use('/upload', upImageRouter);
app.use('/sendEmail',sendEmail);

// localhost:port/api/v1/user/ ->

// run server on port 3000
app.listen(PORT, () => {
  console.log('SERVER IS RUNNING...'.cyan);
})
