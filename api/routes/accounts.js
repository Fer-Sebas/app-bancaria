// Importar dependencias
const router = require('express').Router()
let Account = require('../models/account.model')

// Ver cuentas
router.route('/').get( async (req, res) => {
    Account.find().then(accounts => res.json(accounts)).catch(err => res.status(500).json('Error: ' + err));
});

// Añadir una cuenta
router.route('/').post( (req,res) => {
    Account.findOneAndUpdate({number: req.body.number}, {status: req.body.status})
    .then(res.status(200)).catch(err => res.status(500).json('Error: ' + err));
});



module.exports = router;