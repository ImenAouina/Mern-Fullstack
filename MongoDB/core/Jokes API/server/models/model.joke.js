const mongoose = require("mongoose")


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "the setup  is required"],
        minlength:[10, "setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "the punchline  is required"],
        minlength:[3, "setup must be at least 3 characters long"]
    }
    
}, { timestamps: true })


const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke