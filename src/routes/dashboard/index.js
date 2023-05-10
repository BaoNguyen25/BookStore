'use strict';

const router = require('express').Router();
const { getDashboard } = require('../../controllers/render.controller');


router.get('/', getDashboard);

module.exports = router;

