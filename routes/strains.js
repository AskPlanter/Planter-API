var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a strain');
});

router.get('/:id', function(req, res, next) {
    console.log('hi');
    console.log(req);
    res.send('respond with a strain');
});

module.exports = router;
