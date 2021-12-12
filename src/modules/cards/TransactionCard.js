import React from 'react'
import dateFormat from "dateformat"
import { ButtonIcon } from '../Buttons'
import { IconAlert } from '../Icons'

const format = 'dd mmm yyyy hh:MM TT'
const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0,})
const formatAccountNumber = (n) => { return n.toString().match(/.{1,2}/g).join(' ') }

class TransactionCard extends React.Component {
    render() {
        return (
            <div className="card"> 
                <div>
                    <div>
                        <h4>{dateFormat(this.props.date, format)}</h4> 
                        {this.props.from.id === this.props.userId && 
                            <>
                                <p className='negative'>{this.props.to.accountOwner}  »  {formatAccountNumber(this.props.to.accountNumber)}</p>
                                <p className='negative'>{currencyFormatter.format(this.props.amount)}</p>
                            </>
                        }
                        {this.props.to.id === this.props.userId && 
                            <>
                                <p className='positive'>{this.props.from.accountOwner}  »  {formatAccountNumber(this.props.to.accountNumber)}</p>
                                <p className='positive'>{currencyFormatter.format(this.props.amount)}</p>
                            </>
                        }                              
                        
                    </div>
                    <nav>
                        <ButtonIcon>
                            <IconAlert />
                        </ButtonIcon>
                    </nav>
                </div>                     
            </div>
        )
    }
}

export default TransactionCard