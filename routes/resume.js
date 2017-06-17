var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('resume', {
    title: "Keith Richards - Resume",
    description: "View the resume and work history of Keith Richards, a software developer from Durham, NC."
  });
});

module.exports = router;