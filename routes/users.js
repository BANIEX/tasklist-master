var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('myusers', {
    firstname: "James",
    lastname: "Jerry"
  });
});

module.exports = router;
