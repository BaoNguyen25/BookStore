'use strict';

class RenderController {
    getSignIn = (req, res) => {
        res.render('signIn');
    }

    getForgetPassword = (req, res) => {
        res.render('forgetPassword');
    }

    getRecoverPassword = (req, res) => {
        const userId = req.params.id;
        res.render('recoverPassword', { userId });
    }

    getBookPage = (req, res) => {
        res.render('book');
    }

    getDashboard = (req, res) => {
        res.render('dashboard');
    }
}

module.exports = new RenderController();