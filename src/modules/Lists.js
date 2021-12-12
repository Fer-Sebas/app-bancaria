import { Card, AccountCard, RequestCard, DialogCard } from "./Cards"
import TransactionCard from "./cards/TransactionCard"
import { Button, ButtonIcon } from './Buttons'
import { IconCheck, IconCancel, IconPencil } from './Icons'
import { useEffect, useState } from 'react'
import axios from 'axios'

const formatAccountNumber = (n) => { return n.toString().match(/.{1,3}/g).join(' ') }

const complaints = [
    {
        username: 'Pedro Fernandez',
        id: 1,
        accountNumber: 111111111,
        transactionNumber: 91928,
        complaintDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    }, 
    {
        username: 'Pablo Perez',
        id: 2,
        accountNumber: 111111112,
        transactionNumber: 12742,
        complaintDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    }
]

const products = [
    {id: 1, username: 'Pedro Fernandez', docNumber: 1234092366, accountNumber: 111111111, accountStatus: 'Activa', timestamp: '1 Dec 2021'}, 
    {id: 2, username: 'Pablo Perez', docNumber: 9874043312, accountNumber: 111111112, accountStatus: 'Cancelada', timestamp: '30 Nov 2021'}
]

function AccountList ({user}) {

    function handleRequestAccount () { 
        axios.post(`http://localhost:5000/users/${user._id}/accounts`)
        console.log('Cuenta Solicitada') 
    }
    
    const [userAccounts, setUserAccounts] = useState('')
    
    const fetchUserAccounts = async () => {
        return axios.get(`http://localhost:5000/users/${user._id}/accounts`)
        .then(({data}) => { return data }).catch(err => { console.error(err) })
    }

    useEffect(() => { fetchUserAccounts().then(accounts => { setUserAccounts(accounts) }) }, [])

    return(
        <>
            <Button label="Solicitar Cuenta" onClick={() => handleRequestAccount()} />
            { userAccounts.length === 0 && <Card title="Hola!" body="Aun no tienes cuentas. Solicta una haciendo click en el boton de arriba." /> } 
            { userAccounts.length > 0 && userAccounts.map ( account => { return <AccountCard key={account.number} account={account} /> } ) }
        </>
    )
}

function ComplaintList () {

    function handleReplyComplaint(product) {

    }

    return (
        complaints.map(complaint => {
            return (
                <Card key={complaint.id}> 
                    <div className="header">
                        <div>
                            <h4>{complaint.username}</h4>
                            <p>{formatAccountNumber(complaint.accountNumber)}</p>
                            <p>{complaint.accountStatus}</p>
                        </div>
                        <nav className="buttonArray">
                            <ButtonIcon handle={() => handleReplyComplaint(complaint)}>
                                <IconPencil/>
                            </ButtonIcon>                            
                        </nav>
                    </div>
                    <p>{complaint.complaintDescription}</p>
                </Card>
            )
        })
    )
}

function ProductList () {

    function handleUpdateStatus (request) { 
        if (request.accountStatus === 'Activa') {
            console.log(`Producto ${formatAccountNumber(request.accountNumber)} cancelado`) 
        } 
        else if (request.accountStatus === 'Cancelada') {
            console.log(`Producto ${formatAccountNumber(request.accountNumber)} activado`) 
        }
    }

    return (
        products.map(product => {
            return (
                <Card className="inline" key={product.accountNumber}> 
                    <div className="header">
                        <div>
                            <h4>{product.username}</h4>
                            <p>{formatAccountNumber(product.accountNumber)}</p>
                            <p>{product.accountStatus}</p>
                        </div>
                        <nav className="buttonArray">
                            {product.accountStatus === 'Activa' &&
                                <ButtonIcon handle={() => handleUpdateStatus(product)}>
                                    <IconCancel/>
                                </ButtonIcon>
                            }
                            {product.accountStatus === 'Cancelada' &&
                                <ButtonIcon handle={() => handleUpdateStatus(product)}>
                                    <IconCheck/>
                                </ButtonIcon>
                            }
                            
                        </nav>
                    </div>                     
                </Card>
            )
        })
    )


}

function RequestList () {

    const [requestList, setRequestList] = useState([])
    const fetchAccountRequests = async () => {
        return axios.get(`http://localhost:5000/accounts`)
        .then(({data}) => { return data }).catch(err => { console.error(err) })
    }

    useEffect(() => { fetchAccountRequests().then(requestList => { setRequestList(requestList) }) }, [])

    const filter = requestList.filter( request => request.status === 'PENDING')

    if (filter.length > 0) {
        return (
            filter.map ( result => { return <RequestCard key={result._id} number={result.number} owner={result.owner.name} /> })
        )
    }

    else {
        return (
            <DialogCard title="No hay solicitudes pendientes" body="Las solicitudes de cuentas apareceran aqui." />
        )
    }    

}

function MovementList ({user}) {
    
    const [transactions, setTransactions] = useState([])
    
    const fetchUserTransactions = async () => {
        return axios.get(`http://localhost:5000/transactions/${user._id}`)
        .then(({data}) => { return data }).catch(err => { console.error(err) })
    }

    useEffect(() => { fetchUserTransactions().then(transactions => { setTransactions(transactions) }) }, [])

    return (
        <>
        { transactions.length === 0 && <Card title="Aun no haz hecho ninguna transacción" body="Tus transacciones apareceran aqui." /> } 
        { transactions.length > 0 && 
            transactions.map ( transaction => { 
                return <TransactionCard key={transaction._id} date={transaction.date} from={transaction.from} to={transaction.to} amount={transaction.amount} userId={user._id} />  
            })
        }
        </>
    )
}

export { AccountList, ComplaintList, ProductList, RequestList, MovementList }