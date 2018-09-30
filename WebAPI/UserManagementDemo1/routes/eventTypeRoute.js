let eventTypeController = require('../controllers/eventTypeController');
let express = require('express');

let router = express.Router();

router.post('/addOneType', eventTypeController.addOneType);
router.get('/findAllType', eventTypeController.findAllType);
router.get('/:eventTypeName', eventTypeController.findTypeByName);

module.exports = router;