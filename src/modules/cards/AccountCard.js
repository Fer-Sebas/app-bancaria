import React from 'react'
import Divider from '../Divider';
import { formatAccountNumber, currencyFormatter } from '../helpers';

class AccountCard extends React.Component {
    render() { 
        return (
            <div className="card account">
                <h2>Cuenta de Ahorros</h2>
                <h1>{this.props.number}</h1>
                <Divider />
                <div>
                    <h4>Balance</h4>
                    <h4>{currencyFormatter.format(this.props.balance)}</h4>
                </div>
            </div>
        )
    }
}
 
export default AccountCard;