const express = require("express");
const router = express.Router();
const controller = require("../controllers/doctorController.js");

router.post("/", controller.createDoctor);

router.get("/", controller.getAllDoctors);

module.exports = router