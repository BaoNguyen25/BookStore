'use strict';

class RenderController {
    getSignIn = (req, res) => {
        res.render('signIn');r
    }

    getForgetPassword = (req, res) => {
        res.render('forgetPassword');
    }

    getRecoverPassword = (req, res) => {
        const userId = req.params.id;
        res.render('recoverPassword', { userId });
    }

    getDashboard = (req, res) => {
        res.render('dashboard');
    }

    getBook = (req, res) => {
        res.render('book');
    }



}

module.exports = new RenderController();