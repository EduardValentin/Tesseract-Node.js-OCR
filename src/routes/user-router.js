const router = require('express').Router();
const verifyToken = require('../middlewares/VerifyToken.js');
const { registerUser, getUsers, loginUser, deleteUser } = require('../controllers/user-controller');

router.get('/users', getUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/users/delete', verifyToken, deleteUser);


module.exports = router;
