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
                reject("Incorrect login data")
            }
        }).catch((err) => {
            console.log(err)
        })
    })
}
User.prototype.register = function () {
    return new Promise(async (resolve, reject) => {
        await this.validateData();
        if (!this.errors.length) {
            let salt = bcrypt.genSaltSync(10);
            this.data.password = bcrypt.hashSync(this.data.password, salt);
            await usersCollections.insertOne(this.data);
            resolve();
        } else {
            reject(this.errors)
        }
    })
}
User.getUsers = function () {
    return new Promise(async (resolve, reject) => {
        let users = await usersCollections.aggregate().toArray()
        users.forEach((user) => {
            delete user.password
        })
        resolve(users);
    })
}
User.prototype.validateData = function () {
    return new Promise(async (resolve, reject) => {
        if (this.data.username == "") { this.errors.push("You must provide username") }
        if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) { this.errors.push("Username can only cointaint letters") }
        if (this.data.password == "") { this.errors.push("Provide password") }
        if (!validator.isEmail(this.data.email)) { this.errors.push("Please provide correct address email") }

        if (this.data.password.length > 0 && this.data.password.length < 5) { this.errors.push("Password must be at least 5 characters") }
        if (this.data.password.length > 50) { this.errors("Password connot exceed 50 characters") }

        if (this.data.username.length > 0 && this.data.username.length < 3) { this.errors.push("Username must be at least 3 characters") }
        if (this.data.username.length > 30) { this.errors("Username connot exceed 30 characters") }

        if (this.data.username.length > 2 && this.data.username.length < 31 && validator.isAlphanumeric(this.data.username)) {
            let usernameExists = await usersCollections.findOne({ username: this.data.username })
            if (usernameExists) { this.errors.push("That username is already taken.") }
        }

        //check if email is already taken
        if (validator.isEmail(this.data.email)) {
            let emailExists = await usersCollections.findOne({ email: this.data.email })
            if (emailExists) { this.errors.push("That email is already taken.") }
        }
        resolve();
    })
}
module.exports = User;