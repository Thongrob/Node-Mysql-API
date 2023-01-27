var express = require('express');
var router = express.Router();
const{message} = require("./message")

/* GET home page. */
router.get('/', message)

module.exports = router;
