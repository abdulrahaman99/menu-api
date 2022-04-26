const {Router} = require("express")
const {createFood, getMenu} =require("../controllers/foodController")
const {protect, admin} = require("../middlewares/authMiddleware");


const router = Router()

router.route("/").post(protect, createFood).get(protect, getMenu)


module.exports=router;