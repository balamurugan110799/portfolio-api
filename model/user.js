const mongoose=require("mongoose")

const user = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
})

module.exports = mongoose.model("user",user)