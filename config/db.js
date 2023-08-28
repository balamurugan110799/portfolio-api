const mongoose = require("mongoose")
const dontenv = require("dotenv")
dontenv.config({path: "./.env"})

mongoose.connect(process.env.LOCAL_CONN_STR,{ useNewUrlParser: true })
.then(()=>{
    console.log("DB is Connected")
})
.catch((err)=>{
    console.log(err)
    console.log("DB is Dis-Connected")
})