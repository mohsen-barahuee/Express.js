const usersModel = require("../models/users")


// WE CAN HANDEL SOME SECURITY THINGS ON MIDELWARE
module.exports.middleWare = async function(req,res,next){
    const users = await usersModel.find()
    console.log("Users ==>",users)
    next()
    
}


