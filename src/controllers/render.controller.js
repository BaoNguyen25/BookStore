'use strict';

const { getBooks, getBooksMaxLength } = require('../services/book.service');
const { getCategories } = require('../services/category.service');
const { getAuthors } = require('../services/author.service');
const { getCart } = require('../services/order.service');

const qs = require('qs');

class RenderController {
    getSignUp = async (req, res) => {
        res.render('signUp');
    }

    getSignIn = async (req, res) => {
        res.render('signIn');
    }

    getForgetPassword = async (req, res) => {
        res.render('forgetPassword');
    }

    getRecoverPassword = async (req, res) => {
        const userId = req.params.id;
        res.render('recoverPassword', { userId });
    }

    getDashboard = async (req, res) => {
        res.render('dashboard');
    }

    getBookPage = async (req, res) => {
        const { name, category, author, input_range, page=0 } = req.query;

        let price = parseInt(input_range);
        if (isNaN(price)) price = 1e9;

        const bookList = await getBooks({ name, author, category}, price, page);
        const categoryList = await getCategories();
        const authorList = await getAuthors();
        const maxLength = await getBooksMaxLength({ name, author, category}, price);
        const pagination = {
            maxPage: maxLength.length / 9 + 1,
            curPage: page,
            queryString: req.baseUrl + req.path +"?" + qs.stringify({ name, category, author, input_range })
        }

        res.render('book', { bookList, categoryList, authorList, pagination, user: req.user });
    }

    getCartPage = async (req, res) => {
        const cart = await getCart(req.user._id);

        res.render('cart', { cart, user: req.user });
    }

    getProfilePage = (req, res) => {
        res.render('profile', { user: req.user });
    }
}

module.exports = new RenderController();