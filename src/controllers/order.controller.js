'use strict';

const { addToCart, deleteFromCart, submitOrder } = require('../services/order.service');

class OrderController {
    addToCart = async (req, res) => {
        try {
            const { bookId } = req.body;
            const userId = req.user.id;

            const newOrderDetail = await addToCart(userId, bookId);
            
            return newOrderDetail ? res.status(200).json({ message: 'Add to cart successfully' }) 
            : res.status(400).json({ message: 'Add to cart failed' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    deleteFromCart = async (req, res) => {
        try {
            const { bookId } = req.body;
            const userId = req.user.id;

            const deleted = await deleteFromCart(userId, bookId);

            return deleted ? res.status(200).json({ message: 'Delete from cart successfully' }) :
            res.status(400).json({ message: 'Delete from cart failed' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    submitOrder = async (req, res) => {
        try {
            const { bookQuantity } = req.body;
            const userId = req.user.id;

            const submitted = await submitOrder(userId, bookQuantity);

            return submitted ? res.status(200).json({ message: 'Submit order successfully' }) :
            res.status(400).json({ message: 'Submit order failed' });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error.message });
        }
    };
}

module.exports = new OrderController();