const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { createRequest } = require("../controllers/createClass.controller");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/", upload.single("paymentImage"), createRequest);

module.exports = router;
