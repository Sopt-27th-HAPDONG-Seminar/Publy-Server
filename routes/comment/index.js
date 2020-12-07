const express = require('express');
const router = express.Router();
const commentController = require('../../controller/commentController');

router.get('/shared', commentController.readComments);

module.exports = router;