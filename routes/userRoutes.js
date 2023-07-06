const express = require('express')
const routeUser = express.Router()
const UserController = require("../controller/UserController")

routeUser.get('/',UserController.getUser)
// routeUser.post('/register',UserController.createUser)
// routeUser.post('/login',UserController.loginUser)
routeUser.get('/gadget',UserController.showFormAddUser)




module.exports = routeUser
