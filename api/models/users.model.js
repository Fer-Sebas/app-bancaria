// Importar dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Instanciación objeto Usuario
const userSchema = new Schema (
    {
        username: { 
            first: {type: String, required: true, trim: true, minlenght: 3},
            last: {type: String, required: true, trim: true, minlenght: 3},
        },
        birthDate: { type: Date, required: true },
        email: { type: String, required: true },
        userType: { type: Number, required: true },
        address: { type: String, required: true },
        idDoc: {
            type: { type: Number, required: true },
            number: { type: Number, required: true, minlenght: 8 },
            expDate: { type: Date, required: true }
        },
        accounts: { type: Array }
    }, 
    {
        timestamps: true,
    }
);

// Relacionar objeto Usuario con DB
module.exports = mongoose.model('User', userSchema);;