const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

router.post('/signup', signup); // ✅ This must be here
router.post('/login', login);

module.exports = router;
