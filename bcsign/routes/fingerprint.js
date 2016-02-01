var express = require('express');
var multer = require('multer');
var router = express.Router();

var storage = multer.memoryStorage()
var upload = multer({ storage: storage }).any();

router.get('/', function(req, res, next) {
  res.render('fingerprint', { title: 'fingerprint' });
});

router.post('/',function(req,res){
	upload(req,res,function(err) {
                if(err) {
                    return res.end("Error uploading file.");
		}
        //console.log(req.files[0].buffer);
        res.end('Done!');
	});
        
});

module.exports = router;
