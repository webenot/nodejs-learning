const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.dir(req);
  res.render('index', { title: 'Express' });
});

module.exports = router;
