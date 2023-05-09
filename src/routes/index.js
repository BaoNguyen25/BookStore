const router = require('express').Router();

router.use('/access', require('./access/index'));

module.exports = router;