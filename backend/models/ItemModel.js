const itemsCollection = require('../db').db().collection('items');
const { ObjectID } = require('bson');
const User = require('./UserModel');

let Item = function (data, userID) {
    this.data = data;
    this.userID = userID
}
Item.prototype.cleanUp = function () {
    this.data = {
        author: ObjectID(this.userID),
        createdDate: new Date(),
        purchaseDate: this.data.purchaseDate,
        category: this.data.category,
        asset: this.data.asset,
        quantity: this.data.quantity,
        purchasePrice: this.data.purchasePrice,
        currency: this.data.currency,
        valuePLN: this.data.valuePLN
    }
}
Item.prototype.addItem = function () {
    this.cleanUp();
    return new Promise(async (resolve, reject) => {
        await itemsCollection.insertOne(this.data);
        resolve();
    })
}
Item.getUserItems = function (userId) {
    return new Promise(async (resolve, reject) => {
        let items = await itemsCollection.aggregate(
            [{ $match: { author: ObjectID(userId) } }]
        ).toArray();
        resolve(items);
    })
}
Item.deleteItem = function (itemId, authorId) {
    return new Promise(async (resolve, reject) => {
        if (authorId) {
            await itemsCollection.findOneAndDelete({ _id: ObjectID(itemId), author: ObjectID(authorId) })
            resolve("Item has been deleted")
        } else {
            reject("Item can not be deleted")
        }
    })
}
Item.prototype.editItem = function (itemmId, authorId) {
    return new Promise(async (resolve, reject) => {
        try {
            let item = await itemsCollection.findOne({ _id: ObjectID(itemmId), author: ObjectID(authorId) });
            if (item) {
                let status = await this.update(itemmId);
                resolve(status)
            } else {
                reject()
            }
        } catch {
            reject
        }
    })
}
Item.prototype.update = function (itemId) {
    this.cleanUp();
    return new Promise(async (resolve, reject) => {
        await itemsCollection.findOneAndUpdate({ _id: new ObjectID(itemId) },
            {
                $set: {
                    purchaseDate: this.data.purchaseDate,
                    category: this.data.category,
                    asset: this.data.asset,
                    quantity: this.data.quantity,
                    purchasePrice: this.data.purchasePrice,
                    currency: this.data.currency,
                    valuePLN: this.data.valuePLN
                }
            })
        resolve("success")
    })
}
module.exports = Item;