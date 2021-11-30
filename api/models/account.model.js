// Importar dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Instanciación objeto Cuenta
const accountScheme = new Schema (
    {
        accountType: { type: Number, required: true },
        accountNumber: { type: Number, required: true},
        accountBalance: { type: Number, default: 0}
    },
    {
        timestamps: true,
    }
);

// Relacionar objeto Usuario con DB
const Account = mongoose.model('Account', accountScheme);

module.exports = Account;