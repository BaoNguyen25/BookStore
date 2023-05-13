'use strict';

const { Order, OrderDetail } = require('../models/order.model');

class OrderService {
    static addToCart = async (userId, bookId) => {
        try {
            const order = await OrderDetail.findOne({ user: userId, book: bookId });

            if (order) {
                throw new Error('Book already in cart');
            }

            const newOrderDetail = await OrderDetail.create({ user: userId, book: bookId });

            return newOrderDetail ? newOrderDetail : null;
        } catch (error) {
            return null;
        }
    };

    static deleteFromCart = async (userId, bookId) => {
        try {
            const order = await OrderDetail.findOneAndDelete({ user: userId, book: bookId });

            return order ? order : null;
        } catch (error) {
            return null;
        }
    }

    static submitOrder = async (userId, bookQuantity) => {
        try {
            const details = await OrderDetail.find({ user: userId }).populate('book').lean(); 
            let total = 0;

            details.forEach(async (detail) => {
                const book = detail.book;
                console.log(bookQuantity[book._id])
                const quantity = bookQuantity[book._id];
                detail.quantity = quantity;
                total += quantity * book.price;
            });

            const checkValid = details.every((detail) => detail.quantity <= detail.book.quantity);

            if (!checkValid) {
                throw new Error('Invalid quantity');
            }

            details.forEach(async (detail) => {
                detail.book = detail.book._id;
            });

            const newOrders = await Order.create({ user: userId, orderDetails: details, total });

            if (!newOrders) {
                throw new Error('Submit order failed');
            }

            await OrderDetail.deleteMany({ user: userId });

            return newOrders;
       } catch (error) {
            console.log(error);
            return null;
       }
    };

    static getCart = async (userId) => {
       return await OrderDetail.find({ user: userId }).populate('book').exec().catch((error) => {
            console.log(error);
            return null;
       });
    }
}

module.exports = OrderService;