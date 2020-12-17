var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');

router.get('/', loginController.loginGet);

router.post('/login', loginController.loginPost);

module.exports = router;
