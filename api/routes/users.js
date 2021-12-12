// Importar dependencias
const router = require('express').Router()
const ObjectID = require("bson-objectid");
let User = require('../models/users.model')
let Account = require('../models/account.model')
let Counter = require('../models/counters.model')

// GET - Ver usuarios
router.route('/').get( async (req, res) => { User.find().then(users => res.json(users)).catch(err => res.status(500).json('Error: ' + err)); });

// POST - Añadir usuarios
router.route('/').post((req,res) => {

    const username = req.body.username
    const birthDate = req.body.birthDate
    const email = req.body.email;
    const address = req.body.address;
    const idDoc = {
        type: req.body.idType,
        number: req.body.idNumber,
        expDate: req.body.expDate
    };
    const userType = 1;
    const password = req.body.password;

    const newUser = new User( { username, birthDate, email, address, idDoc, userType, password } );
    newUser.save().then(() => res.status(201).json('User added!')).catch(err => res.status(500).json('Error: ' + err));

});

// GET - Ver usuario
router.route('/:id').get( getUser, (req, res) => { res.send(user) } );

// GET - Ver cuentas de un usuario
router.route('/:id/accounts').get( getUser, getUserAccounts, (req,res) => { res.send(accounts) })

// POST - Añadir cuenta
router.route('/:id/accounts').post( getUser, getAccountSerial, (req,res) => {

    const number = accountSerial.number + 1
    const owner = {
       name: user.username.first + ' ' + user.username.last,
       id: user._id
    }
    const _id = ObjectID()

    // Instanciación de objeto
    const newAccount = new Account( { _id, number, owner, } )
    const accountRef = { _id }

    // Crear referencia en documento de usuario
    user.accounts.push(accountRef)
    user.save()
    .then(res.status(200)).catch(err => res.status(500).json('Error: ' + err));

    // Incrementar contador
    Counter.findOneAndUpdate({title: "accounts"}, {number: number})
    .then(res.status(200)).catch(err => res.status(500).json('Error: ' + err));

    // Guardar cuenta en colección
    newAccount.save()
    .then(res.status(200)).catch(err => res.status(500).json('Error: ' + err));

});

async function getUser (req, res, next) {
    try {
        user = await User.findById(req.params.id)
        if (user == null) { return res.status(404).json('Cannot find user') }
    } catch (err) { return res.status(500).json('Server error') }
    res.user = user
    next();
}

async function getUserAccounts (req, res, next) {
    try{
        accounts = await Account.find({ "owner.id": req.params.id })
        if (accounts == null) { return res.status(404).json('Cannot find accounts') }
    } catch (err) { return res.status(500).json('Server error') }
    res.accounts = accounts
    next()
}

async function getAccountSerial (req, res, next) {
    try{ 
        accountSerial = await Counter.findOne({ title: 'accounts' })
    }
    catch (err) { return res.status(500).json('Server error !!!') }
    res.accountSerial = accountSerial
    next()
}


module.exports = router;