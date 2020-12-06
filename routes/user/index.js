const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

router.get('/alert', userController.alert);


module.exports = router;