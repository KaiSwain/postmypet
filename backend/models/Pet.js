const mongoose = require("mongoose")

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    bio: {
        type: String,
    },
    avatarUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet