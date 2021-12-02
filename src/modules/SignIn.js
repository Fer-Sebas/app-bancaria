import SignInForm from './SignIn.Form';

document.body.classList.remove('red')

function SignIn() {

  return (
    <>
        <SignInForm />
        <p>¿No tienes cuenta?<br />Registrate haciendo <a href="/">click aqui</a></p>
    </>
  );

}

export default SignIn;