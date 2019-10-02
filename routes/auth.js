const express  = require("express");
const path = require("path");
const router = express.Router();

/** CUSTOM IMPORTS */
const rootDir = require("../utils/path");
const authController = require("../controllers/auth");

/**LOGIN ROUTE */
router.get('/login',authController.getLogin);

router.post('/login',authController.postLogin);

module.exports = router;