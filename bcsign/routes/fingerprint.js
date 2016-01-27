var express = require('express');
var multer = require('multer');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('fingerprint', { title: 'fingerprint' });
});

var uploading = multer({
  dest: './uploads/',
})

router.post('/', uploading, function(req, res) {

})

module.exports = router;
