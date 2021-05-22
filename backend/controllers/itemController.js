const Item = require('../models/ItemModel');

exports.addItem = function (req, res) {
    let item = new Item(req.body, req.session.user._id);
    item.addItem().then(() => {
        res.send("Item added");
    }).catch((err) => {
        res.send("Task not added");
        console.log(err)
    })
}

exports.deleteItem = function (req, res) {
    Item.deleteItem(req.params.id, req.session.user._id).then(() => {
        res.send("Deleted")
    }).catch((err) => {
        console.log(err);
    })
}

exports.editItem = function (req, res) {
    let item = new Item(req.body, req.session.user._id);
    item.editItem(req.params.id, req.session.user._id).then((status) => {
        if (status === "success") {
            res.send("Item has been updated")
        } else {
            res.send("Error")
        }
    }).catch((err) => {
        console.log(err)
    })
}