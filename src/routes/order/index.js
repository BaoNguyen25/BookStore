'use strict';

const router = require('express').Router();

const { getCartPage } = require('../../controllers/render.controller');

router.get('/cart', getCartPage);

module.exports = router;
