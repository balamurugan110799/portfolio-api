const user = require("../model/user")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const projects = require("../model/projects");
exports.createUsers = async (req, res) => {
    try {
        var hash = await bcrypt.hash(req.body.password, 10)
        const createUser = await user.create({
            username: req.body.username,
            role: req.body.role,
            email: req.body.email,
            password: hash,
        })
        res.status(201).json({
            status: "success",
            data: createUser
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}

exports.LoginController = async (req,res)=>{
    try{
        const userEmail = await user.findOne({email:req.body.email})
        console.log(userEmail)
        if(!userEmail){
            return res.status(500).json({
                status: "failed",
                message_email: "Email Id not Register"
            })
        }

        const userPassword = await bcrypt.compare( req.body.password,userEmail.password )
        if(!userPassword){
            return res.status(500).json({
                status: "failed",
                message_email: "Password Not Matched"
            })
        }

        var token = jwt.sign({email:userEmail}, process.env.SERECT)
        res.status(200).json({
            email: req.body.email,
            token: token
        })

    }catch(err){
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}