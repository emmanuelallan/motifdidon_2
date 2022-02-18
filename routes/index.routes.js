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
  res.status(200).render('index', {
    socialInfo,
    portfolioInfo,
    testimonyInfo,
    serviceInfo,
    showreelInfo,
    brandInfo,
  });
});

router.get('/about', function (req, res, next) {
  res.status(200).render('about', {});
});

router.get('/services', function (req, res, next) {
  res.status(200).render('services', { serviceInfo });
});

router.get('/contact', function (req, res, next) {
  res.status(200).render('contact', {});
});

module.exports = router;
