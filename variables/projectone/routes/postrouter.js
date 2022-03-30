var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/addName', function(req, res, next) {
    const details = {model:2024,ram:req.query.ram}
    details.name = req.body.name;
  res.render('details',{mobiledata : details});
});  
 
module.exports = router;
