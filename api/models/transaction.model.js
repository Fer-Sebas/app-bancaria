// Importar dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Instanciación objeto Transacción
const transactionScheme = new Schema ({
    from: { type: Object, required: true },
    to: { type: Object, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now() }
});

// Relacionar objeto Usuario con DB
const Transaction = mongoose.model('Transaction', transactionScheme);

module.exports = Transaction;