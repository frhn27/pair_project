const express = require('express')
const routeAdmin = express.Router()
const AdminController = require('../controller/AdminController')

routeAdmin.get('/item',AdminController.showGadgets)
routeAdmin.get('/item/add',AdminController.showAddGadget)
routeAdmin.post('/item/add',AdminController.PostCreateGadget)
routeAdmin.get('/item/:itemId/edit',AdminController.showEditGadget)
routeAdmin.post('/item/:itemId/edit',AdminController.postUpdateGadget)
routeAdmin.get('/item/:itemId/delete',AdminController.deleteGadget)


// routeUser.post('/login',UserController.loginUser)




module.exports = routeAdmin