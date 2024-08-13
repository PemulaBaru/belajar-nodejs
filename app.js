const express = require("express")
const app = express()
const port = 3000
const {loadContact, addContact} = require('./utils/contacts');
const expressLayouts = require('express-ejs-layouts');
app.set("view engine", "ejs")
app.use(expressLayouts)
app.use(express.static("public"))

console.log(loadContact().length)
app.get('/', (req, res)  => {

    // res.sendFile("./views/index.html", {root: __dirname})
res.render("index", {layout: "layouts/main-layout", title: "Halaman Home"})
 
})
.get('/about', (req, res) => {
    res.render("about", {layout: "layouts/main-layout", title: "Halaman About"}) 
})
.get('/contact', (req, res) => {
    res.render('contact', {layout: "layouts/main-layout", title: "Halaman Contact", loadContact })
})
.get('/contact/add-contact', (req, res) => {
    res.render('add-contact', {layout:'layouts/main-layout', title: 'Halaman tambah kontak'})
})
.listen(port, () => {
console.log("Port saat ini adalah " + port)
})