const User = require('../models/UserModel');

exports.login = function (req, res) {
    let user = new User(req.body);
    user.login().then(function () {
        req.session.user = { username: user.data.username, _id: user.data._id }
        req.session.save(function () {
        })
        res.send("logged in")
    }).catch(function (err) {
        console.log(err)
        req.session.save()
    })
}
exports.register = function (req, res) {
    let user = new User(req.body);
    user.register().then(() => {
        req.session.user = { username: user.data.username, _id: user.data._id };
        req.session.save()
        res.send("Registered")
    }).catch((err) => {
        console.log(err)
    })
}
exports.logout = function (req, res) {
    req.session.destroy(function () {
        res.send('User logged out')
    });
}
exports.getUsers = function (req, res) {
    User.getUsers()
        .then((users) => res.json(users))
        .catch((err) => { console.log(err) })
}