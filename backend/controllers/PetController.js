const Pet = require("../models/Pet")

exports.createPet = async (req, res) => {
    try {
        const pet = new Pet(req.body)
        await pet.save()
        res.status(201).json(pet)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

exports.getPets = async (req, res) => {
    try {
        const pets = await Pet.find()
        res.status(200).json(pets)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}