// Importar dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Instanciación objeto Usuario
const userSchema = new Schema (
    {
        _id: { type: Number },
        username: { type: String, required: true, trim: true, minlenght: 3 },
        birthDate: { type: Date, required: true },
        email: { type: String, required: true },
        userType: { type: Number, required: true },
        address: { type: String, required: true },
        accounts: { type: Array },
        userType: { type: String }
    }, 
    {
        timestamps: true,
    }
);

// Relacionar objeto Usuario con DB
module.exports = mongoose.model('User', userSchema);;