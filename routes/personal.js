var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('personal', {
    title: "Keith Richards - Biography",
    description: "Learn more about the personal life of Keith Richards, a Durham, NC based software developer."
  });
});

module.exports = router;