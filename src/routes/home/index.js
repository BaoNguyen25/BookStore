'use strict';

const router = require('express').Router();

const { getBookPage, getDashboard } = require('../../controllers/render.controller');

router.get('/', getDashboard);

router.get('/book', getBookPage);

module.exports = router;