const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');


router.get('/', (req, res) => {
    res.send('Works')
})
//user routes
router
    .post('/register', userController.register)
    .post('/login', userController.login)
    .post('/logout', userController.logout)
    .get('/getUsers', userController.getUsers)

module.exports = router