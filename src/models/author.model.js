'use strict';

const mongoose = require('mongoose');
const { Schema, Types, Model } = mongoose;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    products: {
        type: Number,
        default: 0
    },
    mostSold: {
        type: String,
    },
}, {
    timestamps: true
}); 

authorSchema.pre('findOneAndDelete', async function (next) {
    const { Book } = require('./book.model');

    try {
        const author = await this.model.findOne(this.getQuery());
  
        const book = await Book.findOne({ author: author.name });
  
        if (book) throw new Error('Author has books');
      } catch (error) {
        next(error);
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = {
    Author,
    authorSchema
};