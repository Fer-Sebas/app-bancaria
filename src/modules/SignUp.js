import SignUpForm from './SignUp.Form';
import Divider from './Divider';

function SignUp() {

  return (
    <>
      <h1>Registrate</h1>
      <p>¿Ya tienes tu propio usuario? <a href="/">Ingresa</a></p>     
      <Divider /> 
      <p>Para crear tu usuario, por favor rellena por completo los siguientes campos:</p>
      <br />
      <SignUpForm />
      <p className="altText">Una vez creado tu usuario podras crear una cuenta</p>
    </>
  );

}

export default SignUp