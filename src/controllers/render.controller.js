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
}

module.exports = new RenderController();