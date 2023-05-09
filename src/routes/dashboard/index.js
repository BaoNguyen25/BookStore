'use strict';

const router = require('express').Router();
const { getDashboard, getBookPage, getCategoryPage, 
    getAuthorPage, getImportPage, getEmployeePage, getInvoicePage } = require('../../controllers/render.controller');

router.get('/', getDashboard);