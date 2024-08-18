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
    const contacts = JSON.parse(data)
    return contacts
}

const saveContact = (contacts) => {
    fs.writeFileSync('data/contact.json',JSON.stringify(contacts))
}

const addContact = (contact) => {
    const contacts = loadContact()
    contacts.push(contact)
saveContact(contacts)
}

const findContact = (findContact) => {
    const contacts = loadContact()
   const index = contacts.findIndex((contact) => contact.nama.toLowerCase() == findContact)
const contact = contacts[index]
if(index > -1) {
    return {contact, index}
} else {
return "Kontak yang kamu cari tidak dapat ditemukan, coba lagi."
}
}

const deleteContact = (tempContact) => {
    const contacts = loadContact()
const newContacts = contacts.filter(contact => contact !== tempContact)
saveContact(newContacts)
}

const checkDuplikat = (check) => {
    const contacts = loadContact()
return contacts.find(contact => contact == check)
} 

module.exports = {loadContact, addContact, findContact,deleteContact, checkDuplikat}
