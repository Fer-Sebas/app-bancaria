import Divider from './Divider'
import { ButtonClose } from './Buttons'

const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0,});

function formatAccountNumber(n) {
    return n.toString().match(/.{1,3}/g).join(' ')
}

function Card(props) {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

function AccountCard ({account}) {

    const getAccountType = () => {
        if(account.type  === 'ahorros') { return 'Cuenta de Ahorros' }
        else if (account.type  === 'corriente') { return 'Cuenta Corriente' }
    }


    return (
        <div className="card account">
            <h2>{getAccountType()}</h2>
            <h1>{formatAccountNumber(account._id)}</h1>
            <Divider />
            <div>
                <h4>Balance</h4>
                <h4>{currencyFormatter.format(account.balance)}</h4>
            </div>
        </div>
    )
}

const ModalCard = (props) => {

    if (!props.show === true) {
        return null
    }
   
    return (
        <div className="modalOverlay">
            <div className="card modal">
                <ButtonClose onClick={props.onClose} />
                {props.title != null && 
                    <h3>{props.title}</h3>
                } 
                {props.body != null && 
                    <p>{props.body}</p>
                }
                {props.children}
                {props.altText != null && <p className="altText">{props.altText}</p> }
            </div>
        </div>
    )
    
}


export {Card, AccountCard, ModalCard}