const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "the title  is required"],
        minlength:[3, "title must be at least 10 characters long"]
    },
    price: {
        type: Number,
        required: [true, "the price is required"],
    },
    description: {
        type: String,
        required: [true, "the description  is required"],
        minlength:[20, "description must be at least 20 characters long"]
    }
    
}, { timestamps: true })


const Product = mongoose.model("Product", ProductSchema)

module.exports = Product