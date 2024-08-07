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

const readContact = () => {
    const data = fs.readFileSync(contactFile, 'utf8')

    console.log(data)
}
module.exports = {readContact}