const { formatRp } = require("../helper/helper")
const { Gadget } = require("../models")
// const { Op } = require("op")


class AdminController{

    static showGadgets(req,res){
        let {name} = req.query
        // console.log(name)
        Gadget.findAll()
        .then((data) => {
            // res.send(data)
            res.render('item-list',{data,name,formatRp})
        })
        .catch((err)=> {
            // console.log(err);
            res.send(err)
        })
    }

    static showAddGadget(req,res){

     res.render('item-add')

    }

    static PostCreateGadget(req,res){
        const {name,imageUrl,description,price} = req.body
        // console.log(req.body);
        Gadget.create({name,imageUrl,description,price})
        .then((data)=>{
            res.redirect('/item')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static showEditGadget(req,res){
        const {itemId} = req.params
        // console.log(req.params);
        Gadget.findByPk(itemId)
        .then((data) => {
            // res.send(data) 
            res.render('item-detail', {data,formatRp})
        })
        .catch((err) => {
            res.send(err)
        })

    }

    static postUpdateGadget(req,res){
        const {name,imageUrl,description,price} = req.body
        const{itemId} = req.params
            // console.log(req.body);
        Gadget.update({name,imageUrl,description,price},{
            where:{id:itemId}
        })
        .then((data)=>{
            res.redirect('/item')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static deleteGadget(req,res){
        const {itemId} = req.params

        let data;
        Gadget.findByPk(itemId)
        .then((item)=> {
            data = item
            return Gadget.destroy({
                where: {id:itemId}
            })
        })
        .then(()=> {
            // console.log("masuk sini >>>>>");
            res.redirect(`/item?name=${data.name}`)
        })
        .catch((err) => {
            res.send(err)
        })
    }







}

module.exports= AdminController
