import Divider from './Divider'
import React from 'react'
import { IconCheck, IconDelete } from './Icons'
import { ButtonIcon } from './Buttons'
import axios from 'axios'

const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0,})
const formatAccountNumber = (n) => { return n.toString().match(/.{1,2}/g).join(' ') }


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


class RequestCard extends React.Component {

    handleAproveRequest() {
        axios.post(`http://localhost:5000/accounts/`, { number: this.props.number, status: 'ACTIVE' })
        console.log( 'Solicitud Aprovada: ' + this.props.number )
    }

    handleDeleteRequest() {
        axios.post(`http://localhost:5000/accounts/`, { number: this.props.number, status: 'DELETED' })
        console.log( 'Solicitud Eliminada: ' + this.props.number )
    }

    render() { 
        return (
            <div className='card'>
                <div>
                    <div>
                        <h4>{this.props.owner}</h4>
                        <p>{formatAccountNumber(this.props.number)}</p>
                    </div>
                    <nav>
                        <ButtonIcon handle={() => this.handleAproveRequest()}>
                            <IconCheck/>
                        </ButtonIcon>
                        <ButtonIcon handle={() => this.handleDeleteRequest()}>
                            <IconDelete/>
                        </ButtonIcon>
                    </nav>
                </div>
            </div>
        )
    }
}

export {Card, AccountCard, DialogCard, RequestCard }