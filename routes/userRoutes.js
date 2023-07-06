const express = require('express')
const routeUser = express.Router()
const UserController = require("../controller/UserController")

routeUser.get('/home',UserController.getUser)
routeUser.post('/register',UserController.createUser)
routeUser.post('/login',UserController.loginUser)




module.exports = routeUser
