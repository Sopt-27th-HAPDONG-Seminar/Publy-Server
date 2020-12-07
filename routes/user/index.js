const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

router.get('/alert', userController.alert);
router.get('/subscription', userController.subscription);

module.exports = router;