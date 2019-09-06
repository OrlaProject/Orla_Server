var express = require('express');
var router = express.Router();
var sql = require('mysql')
var db = require('../../config/pool');

router.get('/', async (req, res) => {
    const query = req.query;
    let sqlQuery = 'SELECT * FROM market';
    const marketList = await db.queryParam_None(sqlQuery);
    // res.send(marketList);
    await console.log(marketList);
});

module.exports = router;
