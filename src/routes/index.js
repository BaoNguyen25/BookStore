const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('/dashboard');
});

router.use('/access', require('./access/index'));

router.use('/dashboard', require('./dashboard/index'));

router.use('/book', require('./book/index'));

router.use('/cart', require('./cart/index'));

module.exports = router;

