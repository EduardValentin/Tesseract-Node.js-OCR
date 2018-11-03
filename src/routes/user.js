const router = require('express').Router();
const { registerUser, getUsers, loginUser } = require('../controllers/user');

router.get('/users', getUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;