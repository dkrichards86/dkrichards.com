var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Keith Richards - Software Developer in Durham, NC",
    description: "Check out the portfolio of Durham, NC based software developer and consummate bro, Keith Richards."
  });
});

module.exports = router;
