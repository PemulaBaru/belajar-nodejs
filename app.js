const express = require("express")
const app = express()
const port = 3000
const {loadContact, addContact, deleteContact, checkDuplikat, findContact, takeInputValue } = require('./utils/contacts');
const expressLayouts = require('express-ejs-layouts');
const {body, check, validationResult} = require('express-validator');
app.set("view engine", "ejs")
app.use(expressLayouts)
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)  => {

    // res.sendFile("./views/index.html", {root: __dirname})
res.render("index", {layout: "layouts/main-layout", title: "Halaman Home"})
 
})
.get('/about', (req, res) => {
    res.render("about", {layout: "layouts/main-layout", title: "Halaman About"}) 
})
.get('/contact', (req, res) => {
    const contacts = loadContact()
    res.render('contact', {layout: "layouts/main-layout", title: "Halaman Contact", contacts,  })
})
.get('/contact/add-contact', (req, res) => {
    res.render('add-contact', {layout:'layouts/main-layout', title: 'Halaman tambah kontak'})
})
.post('/contact',[
    body('nama').custom((value) => {
        const duplikat = checkDuplikat(value)
        if(duplikat) {
            throw new Error('Nama contact telah digunakan!, silahkan coba yang lain.')
        }
        return true
    }),
    check('email', 'Email yang anda input tidak sesuai, coba lagi.').isEmail(),
    check('nohp', 'No hp yang anda masukkan tidak sesuai dengan No. Hp di Indonesia, coba lagi.').isMobilePhone('id-ID')
], (req, res) => {
const errors = validationResult(req)
if(!errors.isEmpty()) {
    // res.status(400).json({errors: errors.array()})
    // res.send(errors)
    res.render('add-contact', {title: "Halaman tambah kontak", layout:"layouts/main-layout", errors:errors.array()})
}
else {
addContact(req.body)
res.redirect("/contacts")
}
})
.get('/contact/:nama', (req, res) => {
const foundContact = findContact(req.params.nama)

    res.render('detail', {layout:'layouts/main-layout', title: 'Halaman detail', foundContact, deleteContact})
}
)
.get('/contact/add-contact', (req, res) => {

    res.render('add-contact', {layout:'layouts/main-layout', title: 'Halaman tambah kontak'})
})
.get('/contact/delete/:nama', (req, res) => {
    deleteContact(req.params.nama)
    console.log("h")
res.redirect('/contact')
   
})

.listen(port, () => {
console.log("Port saat ini adalah " + port)
})

