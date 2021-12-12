import React from 'react'
import SignInForm from './SignIn.Form'

document.body.classList.remove('red')

class SignIn extends React.Component {


  render() { 
    return (
      <>
        <SignInForm />
        <p>¿No tienes cuenta?<br />Registrate haciendo <a href="/">click aqui</a></p>
      </>
    );
  }
}
 
export default SignIn;
