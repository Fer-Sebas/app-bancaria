// Importar dependencias
const router = require('express').Router()
let Transaction = require('../models/transaction.model')
let User = require('../models/users.model')

router.route('/:id').get( getUserTransactions, (req, res) => {
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

async function getUserTransactions (req, res, next) {
    try{
        transactions = await Transaction.find({$or: [{ "from.id": req.params.id }, { "to.id": req.params.id }]})
        if (transactions == null) { return res.status(404).json('Cannot find transactions') }
    } catch (err) { return res.status(500).json('Server error') }
    res.transactions = transactions
    next()
}

module.exports = router;
