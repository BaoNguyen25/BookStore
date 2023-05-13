'use strict';

const router = require('express').Router();

const { getProfilePage, getCartPage } = require('../../controllers/render.controller');

router.get('/profile', getProfilePage);

router.get('/cart', getCartPage)

module.exports = router;
