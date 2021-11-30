// Importar dependencias
const router = require('express').Router();
let Transaction = require('../models/transaction.model');
let User = require('../models/users.model');

router.get('/', async (req, res) => {
    const transactions = await Transaction.find({}).sort({date: -1});
    res.send(transactions);
})

router.post('/', async (req, res) => {
    const { from, to , amount } = req.body;
    try {
        const fromUser = await User.findById(from);
        const newFromBalance = Number(fromUser.balance) - Number(amount);
        User.updateOne({ _id: from }, { balance: newFromBalance }, err => {
            if (err) {
                console.log(err);
                res.status(500).send('Server Error');
            } else {
                console.log('Updated');
            }
        })
        const toUser = await CustomElementRegistry.findById(to);
        const newToBalance = Number(toUser.balance) + Number(amount);
        User.updateOne({ _id: to }, { balance: newToBalance }, err => {
            if (err) {
                console.log(err);
                res.status(500).send('Server Error');
            } else {
                console.log('Updated');
            }
        })
        const transaction = new Transaction({
            from: fromUser,
            to: toUser,
            amount,
        })
        transaction.save();
        res.json(transaction);
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error');
    }
})

module.exports = router;
