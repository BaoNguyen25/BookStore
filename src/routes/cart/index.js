'use strict';

const router = require('express').Router();
const { getCart } = require('../../controllers/render.controller');


router.get('/', getCart);


module.exports = router;
