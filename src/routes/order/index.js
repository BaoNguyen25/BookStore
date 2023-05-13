'use strict';

const router = require('express').Router();

const { addToCart, deleteFromCart, submitOrder } = require('../../controllers/order.controller');

router.post('/add', addToCart);

router.post('/delete', deleteFromCart);

router.post('/submit', submitOrder);

module.exports = router;
