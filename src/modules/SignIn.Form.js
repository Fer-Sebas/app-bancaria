import React from 'react'

class SignInForm extends React.Component {

  constructor (props) {
    super (props)

    this.state = {
      
    }
  }

  render() {
    return (
      <form name="SignInForm" id="SignInForm">
          
          <div className="fieldGroup">
            <label htmlFor="phoneNumber">Email</label>
            <input type="number" title="phoneNumber" />
          </div>
  
          <div className="fieldGroup">
            <label htmlFor="password">Contraseña</label>
            <input type="password" title="password" />
          </div>
          
          <br />
  
          <button className="main">Ingresar</button>
          
      </form>
    );
  }

}

export default SignInForm;