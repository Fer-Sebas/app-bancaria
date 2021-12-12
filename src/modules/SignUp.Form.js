
function SignUpForm() {

  return (
    <form name="SignUpForm" id="SignUpForm">
        
        <div className="fieldGroup">
          <label htmlFor="firstName">Nombres</label>
          <input type="text" title="firstName" />
        </div>

        <div className="fieldGroup">
          <label htmlFor="lastName">Apellidos</label>
          <input type="text" title="lastName" />
        </div>

        <br />

        <div className="fieldGroup">
          <label htmlFor="phoneNumber">Numero de Telefono</label>
          <input type="text" title="phoneNumber" />
        </div>

        <div className="fieldGroup">
          <label htmlFor="address">Dirección</label>
          <input type="text" title="address" />
        </div>

        <div className="fieldGroup">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" title="email" />
        </div>

        <br />

        <div className="fieldGroup">
          <label htmlFor="birthDate">Fecha de Nacimiento</label>
          <input type="date" title="birthDate" />
        </div>

        <div className="fieldGroup">
          <label htmlFor="idDocNumber">Numero de Documento ID</label>
          <input type="number" title="idDocNumber" />
        </div>

        <div className="fieldGroup">
          <label htmlFor="idDocDate">Fecha de Expedicion Documento ID</label>
          <input type="date" title="idDocDate" />
        </div>

        <label htmlFor="idDocType">Tipo de Documento:</label>
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