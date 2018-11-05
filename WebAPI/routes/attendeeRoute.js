let attendeeController = require('../controllers/attendeeController');
let express = require('express');

let router = express.Router();

router.post('/addOneAttendee', attendeeController.addOneAttendee);
router.get('/:userId', attendeeController.findEventOfUser);
router.get('/findAttendees', attendeeController.findAttendees);

module.exports = router;