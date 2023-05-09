const router = require('express').Router();

router.use('/', (req, res) => res.send('Hello World!')); 

router.use('/access', require('./access/index'));

module.exports = router;