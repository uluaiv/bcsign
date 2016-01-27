var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('fingerprint', { title: 'fingerprint' });
});

module.exports = router;
