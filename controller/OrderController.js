const { User, Order, OrderDetail } = require('../models')

class OrderDetailController{

    static userOrder(req,res){
        const { id } = req.params
        OrderDetail.findAll({
            include : {
                models : User,
                include : [""] 
            }
        })

    } 
}