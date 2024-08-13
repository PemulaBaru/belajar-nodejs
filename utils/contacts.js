const fs = require('fs');

// Membuat direktori 'data' jika belum ada
if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
}
const contactFile = './data/contact.json'

// Membuat file 'contact.json' dengan konten '[]' jika belum ada
if (!fs.existsSync(contactFile)) {
    fs.writeFileSync(contactFile, '[]', 'utf8');
}

const loadContact = () => {
    const data = fs.readFileSync(contactFile, 'utf8')
    const parseData = JSON.parse(data)
return parseData
}

const contacts = loadContact()

const addContact = (tempContact) => {
const realContact = contacts.filter((contact) => contact !== tempContact)
contacts.push(JSON.parse(realContact))

}

const deleteContact = (tempContact) => {

}

module.exports = {loadContact, addContact}
