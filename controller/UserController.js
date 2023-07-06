const { User , Gadget , Profile } = require("../models")
const bcrypt = require("bcryptjs")

class UserController{
    static getUser(req, res){
        res.render('card-items')
    }

    static getRegister(req, res){
        res.render("register")
    }
    
    
    static createUser(req, res, next){
        const { name,email, password, role } = req.body
        // console.log(req.body)
        User.create({
            name :name,
            role : User.userRole(role),
            email : email,
            password : password
        })
        .then((data)=>{
            // res.send(data)
            res.redirect('/home')
        })
        .catch((err)=>{
            res.send(err)
        
        })
        // next()
    }

    static getLogin(req, res){
        res.render('login')
    }

    static loginUser(req, res){
        const { email, password,} = req.body
        
        User.findOne({where :{email: email}})
        .then((user)=>{
            const matchPass = bcrypt.compareSync(password, user.password)
            if(!user){
               res.redirect('/login')
            }else {
                if (!matchPass){
                    // throw ("Passsword Salaah bg")
                    res.redirect('/login')
                } else {
    
                    // cara memanggil seesion 
                    req.session.userId = user.id // set session di controller login
                    // res.send(user)
                    res.redirect('/home')
                }
            }
        })
        .catch((err)=>{
            res.send(err)
        })

    }

    // setiap butuh user sekarang memanggil nya lewat req.seesion.userId

    static profile(req, res){
        let id = req.session.userId
        User.findByPk(id, {
            include : Profile
        })
        .then((user)=>{
            res.send(user)
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static updateUser(req, res){
        let { id } = req.session
        const { firsname, lastname, phoneNumber, address } = req.body

        User.update({firsname, lastname, phoneNumber, address},{
            where : {
                id : id
            }
        })
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static logout(req, res){
        req.session.destroy()
        res.redirect('/login')
    }
}

module.exports = UserController