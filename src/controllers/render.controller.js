'use strict';

const { getBooks } = require('../services/book.service');
const { getCategories } = require('../services/category.service');
const { getAuthors } = require('../services/author.service');


class RenderController {
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
        const { name, category, author, input_range } = req.query;

        let price = parseInt(input_range);
        if (isNaN(price)) price = 1e9;

        const bookList = await getBooks({ name, author, category}, price, 0);
        const categoryList = await getCategories();
        const authorList = await getAuthors();

        res.render('book', { bookList, categoryList, authorList });
    }

    getCartPage = (req, res) => {
        res.render('cart');
    }
}

module.exports = new RenderController();