'use strict';

const { Author } = require('../models/author.model');

class AuthorService {
    static getAuthors = async () => {
        return await Author.find({}).catch((error) => {
            console.log(error);
            return null;
        });
    }
}

module.exports = AuthorService;