const express = require("express")
const path = require("path")

const app = express()

const publicPath = path.join(__dirname, "./public")
app.use(express.static(publicPath))

app.listen(3050, () => {
    console.log("Funcionando OK")
})
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/Registro", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})

app.get("/Login", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
})