const express = require('express');
const router = express.Router();
const {
  socialInfo,
  portfolioInfo,
  testimonyInfo,
  serviceInfo,
  showreelInfo,
  brandInfo,
} = require('../models/index.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', {
    socialInfo,
    portfolioInfo,
    testimonyInfo,
    serviceInfo,
    showreelInfo,
    brandInfo,
  });
});

module.exports = router;
