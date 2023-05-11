'use strict';

const { Book } = require('../models/book.model');

class BookService {
    static getBooks = async (input={}, price=1e9, page=0) => {
        const query = [];

        for (const key in input) {
            if (input[key]) {
                query.push({ [key]: { $regex: input[key], $options: 'i' } });
            }
        }
    
        return await Book.aggregate([
            {
              $match: {
                $and: [
                    query.length ? { $and: query } : {},
                    { price: { $lte: price } },
                ],
              },
            },
            {
                $sort: {
                    price: 1,
                },
            },
            {
                $skip: page * 9,
            },
            {
                $limit: 9,
            }
        ]).catch((error) => {
            console.log(error);
            return null;
        });
    }
}

module.exports = BookService;