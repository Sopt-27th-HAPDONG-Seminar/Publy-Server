var express = require('express');
var router = express.Router();

router.use('/user', require('./user'));
router.use('/creator', require('./creator'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
