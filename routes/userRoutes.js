const express = require('express')
const routeUser = express.Router()
const UserController = require("../controller/UserController")



routeUser.get('/register',UserController.getRegister)
routeUser.post('/register',UserController.createUser)

routeUser.get('/login',UserController.getLogin)
routeUser.post('/login',UserController.loginUser)

routeUser.use(function (req, res , next){
    console.log(req.session)
    if(!req.session.userId){
        res.redirect('/login')
    }else{
        next()
    }
})



routeUser.get('/home',UserController.getUser)
// routeUser.get('/gadget',UserController.getGadget)
routeUser.get('/profile',UserController.profile)
routeUser.get('/logout',UserController.logout)


module.exports = routeUser
