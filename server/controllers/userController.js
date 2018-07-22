const db = require("../database/models");

module.exports = {
    findMessages: function(req, res) {
        db.User.findById({ _id: req.params.id })
        .populate("messages")
        .then(function(dbUser){
            res.json(dbUser);
        })
        .catch(function(err){
            res.json(err)
        });

    },
    getUser: function(req, res) {
        console.log("HERE:CONTROLLERS")
        db.User.findOne({ username: req.params.username })
        // .populate("messages")
        .then(function(dbUser){
            console.log(dbUser)
            res.json(dbUser);
        })
        .catch(function(err){
            res.json(err)
        });

    },
    sendMessage: function(req, res) {
        console.log("HERE:CONTROLLERS")
        db.User.findOneAndUpdate({username: req.receiver}, {$push: {message: req.body}})

    }
}