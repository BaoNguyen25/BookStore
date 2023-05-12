"use strict";

const router = require('express').Router();
const { signIn, signOut, sendRecoveryEmail, recoverPassword, signUp } = require('../../controllers/access.controller');
const { getSignIn, getForgetPassword, 
    getRecoverPassword, getSignUp } = require('../../controllers/render.controller');

router.get('/signup', getSignUp);

router.post('/signup', signUp);

router.get('/signin', getSignIn);

router.post('/signin', signIn);

router.get('/signout', signOut);

router.get('/forget-password', getForgetPassword);

router.post('/forget-password', sendRecoveryEmail);

router.get('/reset-password/:id', getRecoverPassword);

router.post('/reset-password/:id', recoverPassword);


module.exports = router;