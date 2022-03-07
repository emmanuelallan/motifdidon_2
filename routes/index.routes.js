const express = require('express');
const router = express.Router();
const {
  socialInfo,
  portfolioInfo,
  testimonyInfo,
  serviceInfo,
  showreelInfo,
  projectsInfo,
  brandInfo,
} = require('../models/index.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).render('index', {
    socialInfo,
    testimonyInfo,
    serviceInfo,
    showreelInfo,
    brandInfo,
    title: 'Music Producer & Audio Engineer',
  });
});

router.get('/about', function (req, res, next) {
  res.status(200).render('about', {
    title: 'About Me',
    showreelInfo,
    portfolioInfo,
    projectsInfo,
  });
});

router.get('/services', function (req, res, next) {
  res.status(200).render('services', { title: 'Services', serviceInfo });
});

router.get('/iconik', function (req, res, next) {
  res.status(200).render('iconik', { title: 'Iconik Sounds Studio' });
});

router.get('/contact', function (req, res, next) {
  res.status(200).render('contact', { title: 'Contact Me' });
});

router.get('/coming_soon', function (req, res, next) {
  res.status(200).render('coming_soon', { title: 'Coming Soon' });
});

module.exports = router;
