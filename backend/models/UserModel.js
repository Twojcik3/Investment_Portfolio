const usersCollections = require('../db').db().collection('users');
const bcrypt = require('bcryptjs');
const validator = require('validator');

let User = function (data) {
    this.data = data;
    this.errors = []
}
User.prototype.login = function () {
    return new Promise((resolve, reject) => {
        usersCollections.findOne({ username: this.data.username }).then((attemptedUser) => {
            if (attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)) {
                this.data = attemptedUser;
                resolve('logged in')
            } else {
                reject()
            }
        }).catch((err) => {
            console.log(err)
        })
    })
}
User.prototype.register = function () {
    return new Promise(async (resolve, reject) => {
        //await this.validateData();
        if (!this.errors.length) {
            let salt = bcrypt.genSaltSync(10);
            this.data.password = bcrypt.hashSync(this.data.password, salt);
            await usersCollections.insertOne(this.data);
            resolve();
        } else {
            reject()
        }
    })
}
User.getUsers = function () {
    return new Promise(async (resolve, reject) => {
        let users = await usersCollection.aggregate().toArray()
        users.forEach((user) => {
            delete user.password
        })
        resolve(users);
    })
}
User.prototype.validateData = function () {
    return new Promise(async (resolve, reject) => {

    })
}
module.exports = User;