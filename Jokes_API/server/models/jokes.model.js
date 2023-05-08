const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required."],
        minlength: [10, "Setup must be at least 10 characters long."],
        maxlength: [255, "Setup exceeds 255 characters."],
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required."],
        minlength: [3, "Punchline must be at least 3 characters long."],
        maxlength: [255, "Punchline exceeds 255 characters."],
    }
}, { timestamps: true });

Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;