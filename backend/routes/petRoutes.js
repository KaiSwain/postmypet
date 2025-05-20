const express = require("express")
const router = express.Router()
const { createPet, getPets } = require("../controllers/PetController")

router.post("/", createPet)

router.get("/", getPets)

module.exports = router