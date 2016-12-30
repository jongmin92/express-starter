const express = require('express');
const router = express.Router();

const user = require('../app/controllers/userController');
router.post('/users', user.create);
router.get('/users', user.show);

module.exports = router;
