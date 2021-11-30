// Importar dependencias
const router = require('express').Router();
let User = require('../models/users.model');
let Account = require('../models/account.model');

// GET - Ver usuarios
router.route('/').get( async (req, res) => {
    User.find().then(users => res.json(users)).catch(err => res.status(500).json('Error: ' + err));
});

// GET - Ver usuario
router.route('/:id').get( getUser, (req, res) => { res.send(res.user) } );

// GET - Ver cuentas
router.route('/:id/account').get( getUser, (req, res) => { res.send(res.user.accounts) } );

// POST - Añadir usuarios
router.route('/').post((req,res) => {

    // Recolección de datos
    const username = {
        first: req.body.firstName,
        last: req.body.lastName
    }
    const birthDate = req.body.birthDate;
    const email = req.body.email;
    const address = req.body.address;
    const idDoc = {
        type: req.body.idType,
        number: req.body.idNumber,
        expDate: req.body.expDate
    }
    const userType = 1;
    const password = req.body.password;

    // Instanciación de objeto
    const newUser = new User( { username, birthDate, email, address, idDoc, userType, password } );

    // Guardar objeto en DB
    newUser.save().then(() => res.status(201).json('User added!')).catch(err => res.status(500).json('Error Error: ' + err));
});

// POST - Añadir cuenta
router.route('/:id/account').post( getUser, (req,res) => {

    // Recolección de datos
    const accountType = req.body.accountType;
    const accountNumber = req.body.accountNumber;
    const accountBalance = 0;

    // Instanciación de objeto
    const newAccount = new Account ( { accountType, accountNumber, accountBalance } );

    // Guardar objeto en DB
    user.accounts.push(newAccount);
    user.save().then(() => res.status(201).json('Account created!')).catch(err => res.status(500).json('Error Error: ' + err));
});

async function getUser (req, res, next) {
    try {
        user = await User.findById(req.params.id)
        if (user == null) { return res.status(404).json('Cannot find user'); }
    } catch (err) { return res.status(500).json('Server error') }
    res.user = user;
    next();
}


module.exports = router;