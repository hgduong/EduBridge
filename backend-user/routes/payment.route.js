const express = require("express");
const router = express.Router();
const { createQR } = require("../controllers/payment.controller");

router.post("/create-qr", createQR);

module.exports = router;
