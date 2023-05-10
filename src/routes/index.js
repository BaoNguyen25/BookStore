const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('/home');
});

router.use('/access', require('./access/index'));

router.use('/home', require('./home/index'));

module.exports = router;