'use strict';

const { Category } = require('../models/category.model');

class CategoryService {
    static getCategories = async () => {
        return await Category.find({}).catch((error) => {
            console.log(error);
            return null;
        });
    }
}

module.exports = CategoryService;