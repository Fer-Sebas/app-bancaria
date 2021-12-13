import React from 'react'
import axios from 'axios'

class SendMoneyForm extends React.Component {

  constructor (props) {
    super (props)

    this.onChangeSender = this.onChangeSender.bind(this)
    this.onChangeTarget = this.onChangeTarget.bind(this)
    this.onChangeAmount = this.onChangeAmount.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      senderAccountNumber: 0,
      targetAccountNumber: 0,
      moneyAmmount: 100
    }

  }

  onChangeSender (e) { this.setState({ senderAccountNumber: e.target.value }) }
  onChangeTarget (e) { this.setState({ targetAccountNumber: e.target.value }) }
  onChangeAmount (e) { this.setState({ moneyAmmount: e.target.value }) }

  onSubmit (e) {

    e.preventDefault()

    const transaction = {
      from: this.state.senderAccountNumber,
      to: this.state.targetAccountNumber,
      amount: this.state.moneyAmmount
    }

    //axios
    //  .post

    console.log(transaction)

    this.setState ({
      senderAccountNumber: 0,
      targetAccountNumber: 0,
      moneyAmmount: 100
    })

  }

  render() { 
    return (
      <form name="SendMoneyForm" id="SendMoneyForm" onSubmit={this.onSubmit}>
        <div className="fieldGroup">
          <label htmlFor="accountNumber">Numero de cuenta</label>
          <input type="number" title="accountNumber" min="10000000" value={this.state.targetAccountNumber} onChange={this.onChangeTarget} />
        </div>  
        <div className="fieldGroup">
          <label htmlFor="moneyAmount">Monto a enviar</label>
          <input type="number" title="moneyAmount" min="100" value={this.state.moneyAmmount} onChange={this.onChangeAmount} />
        </div>          
        <br />  
        <button className="main">Enviar</button> 
      </form>
    )
  }
}
 
export default SendMoneyForm
