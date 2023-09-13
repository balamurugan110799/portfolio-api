const express = require("express")
const dotenv = require("dotenv")
const db = require("./config/db")
const router = require("./routers/routers")
const bodyparser = require("body-parser")
const cors = require("cors")

dotenv.config({ path: "./.env" })

const app = express()
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyparser.json({ limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use("/api", router)

app.listen(process.env.PORT, () => {
    console.log("Port is running : 4000")
})