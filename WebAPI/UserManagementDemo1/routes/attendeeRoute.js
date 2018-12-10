let attendeeController = require('../controllers/attendeeController');
let express = require('express');

let router = express.Router();

router.post('/addOneAttendee', attendeeController.addOneAttendee);
router.get('/:userId', attendeeController.findEventOfUser);
router.post('/findAttendees', attendeeController.findAttendees);
router.put('/updateUserStatus', attendeeController.updateUserStatus);

module.exports = router;