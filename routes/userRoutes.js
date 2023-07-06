const express = require('express')
const routeUser = express.Router()
const UserController = require("../controller/UserController")
const { route } = require('./userRoutes')


routeUser.get('/',UserController.getUser)
// routeUser.post('/register',UserController.createUser)
// routeUser.post('/login',UserController.loginUser)
routeUser.get('/gadget',UserController.showFormAddUser)
routeUser.get('/gadget/orderdetail', UserController.userOrder)
routeUser.post('/gadget/orderdetail', UserController.postUserOrder)
routeUser.get('/gadget/order/detail/increment/:id', UserController.increment)

module.exports = routeUser
