let attendeeController = require('../controllers/attendeeController');
let express = require('express');

let router = express.Router();

router.post('/addOneType', attendeeController.addOneAttendee);
router.get('/:userId', attendeeController.findEventOfUser);
router.get('/findAttendees', attendeeController.findAttendees);

module.exports = router;