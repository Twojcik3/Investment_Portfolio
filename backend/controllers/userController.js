const User = require('../models/UserModel');

exports.login = function (req, res) {
    let user = new User(req.body);
    user.login().then(function (response) {
        req.session.user = { username: user.data.username, _id: user.data._id }
        req.session.save(function () {
        })
        res.send(response)
    }).catch(function (err) {
        console.log("error: " + err)
        req.session.save()
    })
}
exports.register = function (req, res) {
    let user = new User(req.body);
    user.register().then(() => {
        req.session.user = { username: user.data.username, _id: user.data._id };
        req.session.save()
        res.send("Registered")
    }).catch((reqErrors) => {
        console.log(reqErrors)
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