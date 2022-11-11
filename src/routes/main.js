const express = require('express');
const router = express.Router();
const mainController =require('../controllers/mainController');
const usersMiddleware = require("../middlewares/users")

router.get('/',mainController.index);
router.get("/admin",usersMiddleware,mainController.admin)

module.exports=router;