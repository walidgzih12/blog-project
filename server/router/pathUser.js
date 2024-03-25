const express = require("express");
const router = express.Router();

const {getOneUser,updateUser,deleteUser, signup ,getAllusers,login} = require('../controller/usercontroller');


router.get("/",getAllusers);
router.post("/signup",signup);
router.post("/login",login);

router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;