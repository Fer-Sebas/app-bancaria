import Divider from './Divider'

const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0,})
const formatAccountNumber = (n) => { 
    return n.toString().match(/.{1,3}/g).join(' ')
}

function Card(props) {
    return (
        <div className={"card " + props.className}>
            {props.title != null && 
                <h3>{props.title}</h3>
            } 
            {props.body != null && 
                <p>{props.body}</p>
            }
            {props.children}
        </div>
    )
}

function AccountCard ({account}) {
    return (
        <div className="card account">
            <h2>Cuenta de Ahorros</h2>
            <h1>{formatAccountNumber(account.number)}</h1>
            <Divider />
            <div>
                <h4>Balance</h4>
                <h4>{currencyFormatter.format(account.balance)}</h4>
            </div>
        </div>
    )
}

const DialogCard = (props) => {
    return (
        <div className="card dialog">
            {props.title != null && 
                <h3>{props.title}</h3>
            } 
            {props.body != null && 
                <p>{props.body}</p>
            }
            {props.children}
            {props.altText != null && <p className="altText">{props.altText}</p> }
        </div>
    ) 
}

export {Card, AccountCard, DialogCard}