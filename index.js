const express = require("express")
const dotenv = require("dotenv")
const db = require("./config/db")
const router = require("./routers/routers")
const bodyparser = require("body-parser")
const cors = require("cors")

dotenv.config({ path: "./.env" })

const app = express()
app.use(express.json())
app.use(cors());
app.use(bodyparser.json())
app.use("/api", router)

app.listen(process.env.PORT, () => {
    console.log("Port is running : 4000")
})