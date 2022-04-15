const router = require('express').Router();

const authCtrl = require('../controllers/auth');


router.post('/register', authCtrl.registerUser)
router.post('/login', authCtrl.loginUser);

module.exports = router;