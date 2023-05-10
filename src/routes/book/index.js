'use strict';

const router = require('express').Router();
const { getBook } = require('../../controllers/render.controller');


router.get('/', getBook);

module.exports = router;
