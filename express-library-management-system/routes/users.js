var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/cool', function (req, res, next) {
	res.send('Just started - cool.');
	}
);

router.get("/about", function (req, res) {
	res.json({ user: 'library' })
  // res.send("About this wiki");
});


module.exports = router;
