var express = require('express');
var multer = require('multer');
var sha256 = require('js-sha256').sha256;
var router = express.Router();

var storage = multer.memoryStorage();
var upload = multer({ storage: storage }).single('userFile');

router.get('/', function(req, res, next) {
  res.render('test', { title: 'fingerprint' });
});

router.post('/',function(req,res){
	upload(req,res,function(err) {
                if(err) {
                    return res.end("Error uploading file.");
		}
        console.log(sha256(req.file.buffer));
        res.end(sha256(req.file.buffer));
	});
        
});

module.exports = router;
