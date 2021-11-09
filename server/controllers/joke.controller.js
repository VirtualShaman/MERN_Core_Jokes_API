const Joke = require("../models/joke.model");

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "Something went wrong when creating a joke", err: err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({message: "Something went wrong when finding a joke", err: err}))
}

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message: "Something went wrong when finding all the jokes", err: err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body)
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({message: "Something went wrong when updating a joke", err: err}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({message: "Something went wrong when deleting a joke", err: err}))
}