
function SignInForm() {

    return (
      <form name="SignInForm" id="SignInForm">
          
          <div className="fieldGroup">
            <label for="phoneNumber">Numero Telefónico</label>
            <input type="number" title="phoneNumber" />
          </div>
  
          <div className="fieldGroup">
            <label for="password">Contraseña</label>
            <input type="password" title="password" />
          </div>
          
          <br />
  
          <button className="main">Ingresar</button>
          
      </form>
    );
  
  }
  
  export default SignInForm;