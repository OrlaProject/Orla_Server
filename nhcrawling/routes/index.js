var express = require('express');
var axios = require('axios');
var router = express.Router();

const apiKey = require('../config/openapi');



router.get('/', async (req, res) => {
  await axios.get('http://data.naqs.go.kr/openapi/services/rest/FrmprdHistManageInfoInqireSvc/getGoodsAttrbInfoInqire?'
    + '?serviceKey=' + apiKey.openapiKey + '&tra_mng_no=025200740917' + '&mng_dvs=10')
    .then(data => {
      console.log(data['data']);
      res.send(data['data']);
    })
});

module.exports = router;
