const Joke = require('../models/jokes.model');

module.exports = {
    // CREATE
    createJoke: (req, res) => {
        console.log(req.body);
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.json(err));
    },
    
    // READ ALL
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes => res.json(allJokes))
            .catch(err => res.json(err));
    },
    
    // READ ONE
    getOneJoke: (req, res) => {
        console.log(req.body);
        Joke.findById(req.params.id)
            .then(oneJoke => res.json(oneJoke))
            .catch(err => err.json(err));
    },
    
    // UPDATE
    updateJoke: (req, res) => {
        console.log(req.body);
        Joke.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json(err));
    },
    
    // DELETE
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
        console.log("Joke has been deleted");
    },
};