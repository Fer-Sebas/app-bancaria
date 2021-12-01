import Dashboard from "./modules/Dashboard";


function App() {

  const user = {
    username: "Fer Sebas",
    birthDate: '1998-10-17T00:00:00.000+00:00',
    email: 'heyferrius@mail.com',
    adress: 'Carrera 35 # 84 - 215',
    idDoc: {
      type: 'CC',
      number: 1234093255,
      expDate: '2001-01-01T00:00:00.000+00:00'
    },
    userType: 1,
    accounts: [
      {
        type: 'Cuenta de Ahorros',
        number: 619525094,
        balance: 6034000
      },
      {
        type: 'Cuenta Corriente',
        number: 490525916,
        balance: 15000000
      }
    ]
  }

  return (
    <Dashboard user={user} />
  );

}

export default App;