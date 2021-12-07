
function SendMoneyForm() {

    return (
      <form name="SendMoneyForm" id="SendMoneyForm">
          
          <div className="fieldGroup">
            <label htmlFor="accountNumber">Numero de cuenta</label>
            <input type="number" title="accountNumber" />
          </div>
  
          <div className="fieldGroup">
            <label htmlFor="moneyAmount">Monto a enviar</label>
            <input type="number" title="moneyAmount" />
          </div>
          
          <br />
  
          <button className="main">Enviar</button>
          
      </form>
    );
  
  }
  
  export default SendMoneyForm;