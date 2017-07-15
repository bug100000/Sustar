var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if (req.session.uid != undefined) {
    res.render('question', {state: "true"});
  }else {
    res.render('question', {state: "false"});
  }
});

module.exports = router;
