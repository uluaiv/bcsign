var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('transactions', { title: 'transactions' });
});


module.exports = router;
