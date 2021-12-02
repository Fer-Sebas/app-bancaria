import Divider from './Divider'
import { ButtonClose } from './Buttons'
var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0,});

function Card(props) {
    return (
        <div className="card menu">
            {props.children}
        </div>
    )
}

function AccountCard ({account}) {
    return (
        <div className="card account">
            <h2>{account.type}</h2>
            <h1>{account.number}</h1>
            <Divider />
            <div>
                <h4>Balance</h4>
                <h4>{formatter.format(account.balance)}</h4>
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