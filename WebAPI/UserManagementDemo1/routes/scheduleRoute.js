let scheduleController = require('../controllers/scheduleController');
let express = require('express');

let router = express.Router();

router.post('/addOneSchedule', scheduleController.addOneSchedule);
router.get('/:eventId', scheduleController.findEventSchedule);
router.put('/:eventId', scheduleController.updateEventSchedule);
router.delete('/:eventId', scheduleController.deleteEventSchedule);

module.exports = router;