const {Router} = require("express");
const { createUser,loginuser } = require("../controllers/userController");
const router = Router();


router
.post("/register",createUser )
.post("/loin",loginuser)


module.exports = router;