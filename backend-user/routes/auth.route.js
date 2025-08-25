const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/auth.controller");
const { getUserById } = require("../controllers/auth.controller");

router.post("/register", registerUser);
router.get("/users/:role/:id", getUserById);
module.exports = router;
