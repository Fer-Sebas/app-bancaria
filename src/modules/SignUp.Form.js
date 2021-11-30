
function SignUpForm() {

  return (
    <form name="SignUpForm" id="SignUpForm">
        
        <div className="fieldGroup">
          <label for="firstName">Nombres</label>
          <input type="text" title="firstName" />
        </div>

        <div className="fieldGroup">
          <label for="lastName">Apellidos</label>
          <input type="text" title="lastName" />
        </div>

        <br />

        <div className="fieldGroup">
          <label for="phoneNumber">Numero de Telefono</label>
          <input type="text" title="phoneNumber" />
        </div>

        <div className="fieldGroup">
          <label for="address">Dirección</label>
          <input type="text" title="address" />
        </div>

        <div className="fieldGroup">
          <label for="email">Correo Electrónico</label>
          <input type="email" title="email" />
        </div>

        <br />

        <div className="fieldGroup">
          <label for="birthDate">Fecha de Nacimiento</label>
          <input type="date" title="birthDate" />
        </div>

        <div className="fieldGroup">
          <label for="idDocNumber">Numero de Documento ID</label>
          <input type="number" title="idDocNumber" />
        </div>

        <div className="fieldGroup">
          <label for="idDocDate">Fecha de Expedicion Documento ID</label>
          <input type="date" title="idDocDate" />
        </div>

        <label for="idDocType">Tipo de Documento:</label>
        <select title="idDocType">
          <option>Tarjeta de Indentidad</option>
          <option>Cedula de Ciudadanía</option>
          <option>Cedula de Extranjería</option>
        </select>
        
        <br />

        <button className="main">Crear Usuario</button>
        
    </form>
  );

}

export default SignUpForm;