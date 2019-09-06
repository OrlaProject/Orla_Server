var express = require('express');
var router = express.Router();

router.use('/market', require('./market'));

module.exports = router;
