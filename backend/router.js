const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController')

router.get('/', (req, res) => {
    res.send('Works')
})
//user routes
router
    .post('/register', userController.register)
    .post('/login', userController.login)
    .post('/logout', userController.logout)
    .get('/getUsers', userController.getUsers)

//items routes
router
    .get('/getItems', userController.userMustBeLoggedIn, userController.getUserItems)
    .post('/addItem', userController.userMustBeLoggedIn, itemController.addItem)
    .delete('/deleteItem/:id', userController.userMustBeLoggedIn, itemController.deleteItem)
    .post('/editItem/:id', userController.userMustBeLoggedIn, itemController.editItem)

module.exports = router