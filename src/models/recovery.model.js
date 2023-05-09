'use strict';

const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const recoverySchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    email: {
        type: String,
        required: true,
        ref: 'User.email',
    },
    token: {
        type: String,
        required: true
    },
    expireAt: {
        type: Date,
        default: new Date(Date.now() + 15 * 60 * 1000),
    }
}, {
    timestamps: true
});

const Recovery = model('Recovery', recoverySchema);

module.exports = {
    recoverySchema,
    Recovery
};