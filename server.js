const express = require("express")
const app = express()
const {router} = require("./routes/routes")
const path = require("path")
const env = require("dotenv").config()

const hbs = require('hbs');



hbs.registerHelper('formatDate', function (timestamp, timezone) {
    const date = new Date((timestamp + timezone) * 1000); // Convert Unix timestamp
    return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
});



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, "public")))


app.use("/",router)

PORT= process.env.PORT
API_KEY = process.env.API_KEY


app.listen(3000,()=>{
    console.log(`server is running on ${PORT}`)
})