const { formatRp } = require("../helper/helper")
const { User,Gadget, Order, OrderDetail } = require("../models")
const bcrypt = require("bcryptjs")



class UserController{
    static getUser(req, res){
        res.render('home')
    }

    static createUser(req, res){
        const { name, role , email, password } = req.body
        // console.log(req.body)
        User.create({
            name :name,
            role : role,
            email : email,
            password : password
        })
        .then((data)=>{
            // console.log(data)
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static loginUser(req, res){
        const { email, password,} = req.body
        
        User.findOne({where :{email: email}})
        .then((user)=>{
            const matchPass = bcrypt.compareSync(password, user.password)
            if (!matchPass){
                throw ("Passsword Salaah bg")
            } else {
                res.status(200).json({
                    message : "bener bg",
                    data : user
                })
                // res.redirect('/home')
            }

        })
        .catch((err)=>{
            res.send(err)
        })

    }

    static showFormAddUser(req,res){
        Gadget.findAll()
        .then((data) => {
            // res.send(data)
            res.render('gadget',{data,formatRp})
        })
        .catch((err)=> {
            // console.log(err);
            res.send(err)
        })
    }


    static userOrder(req,res){
        OrderDetail.findAll({
            include: [
              {
                model: Order,
                required: true
              },
              {
                model: Gadget,
                required: true
              }
            ]
          })
        .then((data) => {
            // res.send(data);
            res.render('order-detail',{data,formatRp})
        })
        .catch((err) => {
            res.send(err);
        });
    }

    static postUserOrder(req,res){

    }

    static increment(req, res){
        const { id } = req.param
        OrderDetail.increment({quantity:1}, {where:{id : id}})
        // OrderDetail.findAll()
        .then((data)=>{
            res.send(data)
            res.redirect(`/gadget/orderdetail/increment${id}`)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    


}







module.exports = UserController