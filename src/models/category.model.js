'use strict';

const mongoose = require('mongoose');
const { Schema, Model, Types } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    products: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        default: '',
    }
}, {
    timestamps: true,
});

categorySchema.post('update', async (doc, next) => {
    const { Book } = require('./book.model');

    try {
        await Book.updateMany({ author: doc.name }, { author: doc.name }).catch(err => err);
    } catch(e) {
        next(e);
    }
});

categorySchema.pre('findOneAndDelete', async function (next) {
    const { Book } = require('./book.model');

    try {
        const author = await this.model.findOne(this.getQuery());
  
        const book = await Book.findOne({ author: author.name });
  
        if (book) throw new Error('Author has books');
      } catch (error) {
        next(error);
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category,
    categorySchema
};