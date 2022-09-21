const mongoose = require('mongoose')

const { model, Schema } = mongoose

let categorySchema = Schema({
    name : {
        type : String,
        minLength : [3, 'Panjang miniman 3 karakter'],
        maxLength : [20, 'Panjang maximal 20 karakter'],
        required: [true, 'Nama kategori harus di isi']
        },
    }, 
    {timestamps : true}
);

module.exports = model('Categories', categorySchema)