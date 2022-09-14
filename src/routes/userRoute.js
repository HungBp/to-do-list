const express = require('express');
const { userSignup, userRemove } = require('../controller/userCRUD');
const { userModelReq } = require('../middleware/middleware');
const router = express.Router();

// middlerware
router.use(userModelReq);

// API
// signup new user
router.post("/signup", userSignup);

// login
// router.get("/login", userLogin);

// logout
// router.get("/logout", userLogout);

// remove all data of table
router.get("/remove", userRemove);

module.exports = router;