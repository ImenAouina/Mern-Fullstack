const Author = require("../models/model.author")

module.exports.createNewAuthor = (req, res) => {
    console.log(req.body)
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.json({ author: newlyCreatedAuthor })
        })
        .catch( err => {
            res.status(400).json(err)
        })
}

// Get all Authors

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json({ Authors : allAuthors })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

//Read one Author
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => {
            res.json({ Author: oneAuthor })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
//update Author
module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ Author: updatedAuthor })
        })
        .catch( err => {
            res.status(400).json(err)
        })
}
//delete Author
module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
            .then(result => {
            res.json({ result: result })
            console.log(result)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}