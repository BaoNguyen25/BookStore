const router = require('express').Router();

const {checkAuthen} = require('../middleware/checkAuthen');

router.get('/', (req, res) => {
    res.redirect('/dashboard');
});

router.use('/dashboard', require('./dashboard/index'));

router.use('/access', require('./access/index'));

router.use('/order', checkAuthen, require('./order/index'));

router.use('/user', checkAuthen, require('./user/index'));

module.exports = router;

