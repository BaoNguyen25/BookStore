'use strict';

const router = require('express').Router();

const { getProfilePage } = require('../../controllers/render.controller');


router.get('/profile', getProfilePage);

module.exports = router;
