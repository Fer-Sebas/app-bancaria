import Header from './modules/Header'
import { AccountList, ComplaintList, ProductList, RequestList, MovementList } from './modules/Lists'
import SendMoneyForm from './modules/SendMoney.Form'
import Footer from './modules/Footer'
import SignIn from './modules/SignIn'
import { ButtonNavbar } from './modules/Buttons'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { DialogCard } from './modules/Cards'

const userId = 8

const getUserData = async () => {
  return axios.get(`http://localhost:5000/users/${userId}`)
  .then(({data}) => { console.log('User logged in: ' + data.username); return data })
  .catch(err => { console.error(err) })
}


function App() { 

  const [userData, setUserData] = useState('')
  const [view, setView] = useState(1)

  useEffect(() => { getUserData().then(user => { setUserData(user) }) }, [])

  if (userData.role === 'USER') { return (
    <>
      <Header userData={userData} />
      {view === 1 && (
        <AccountList userData={userData} />
      )}
      {view === 2 && (              
        <MovementList />
      )}
      {view === 3 && (
        <DialogCard
          title="Envia dinero a otra cuenta" 
          body="Indicanos el numero de cuenta y el monto que deseas enviar."
          altText="El costo de la transacción es del 1%"
        >
          <SendMoneyForm />
        </DialogCard>
      )}
      <Footer>          
        <ButtonNavbar label="Movimientos" navTo={() => setView(2)} />
        <ButtonNavbar label="Cuentas" navTo={() => setView(1)} />
        <ButtonNavbar label="Transacciones" navTo={() => setView(3)} />
      </Footer>
    </>
  )} 

  if (userData.role === 'ADMIN') { return (
    <>
      <Header userData={userData} />
      {view === 1 && (
        <DialogCard
          title="Consignar dinero" 
          body="Indicanos el numero de cuenta y el monto que deseas consignar."
        >
          <SendMoneyForm />
        </DialogCard>
      )}
      {view === 2 && (              
        <RequestList />
      )}
      {view === 3 && (
        <ProductList />
      )}
      {view === 4 && (
        <ComplaintList />
      )}
      <Footer>          
        <ButtonNavbar label="Solicitudes" navTo={() => setView(2)} />
        <ButtonNavbar label="Productos" navTo={() => setView(3)} />
        <ButtonNavbar label="Reclamos" navTo={() => setView(4)} />
        <ButtonNavbar label="Consignar" navTo={() => setView(1)} />
      </Footer>
    </>
  )}  

  if (userData.role === 'SUPERADMIN') {
    <>
      <Header userData={userData} />
      {view === 1 && (
        <DialogCard
        title="Consignar dinero" 
        body="Indicanos el numero de cuenta y el monto que deseas consignar."
        >
          <SendMoneyForm />
        </DialogCard>
      )}
      {view === 2 && (              
        <RequestList />
      )}
      {view === 3 && (
        <ProductList />
      )}
      {view === 4 && (
        <ComplaintList />
      )}
      <Footer>          
        <ButtonNavbar label="Solicitudes" navTo={() => setView(2)} />
        <ButtonNavbar label="Productos" navTo={() => setView(3)} />
        <ButtonNavbar label="Reclamos" navTo={() => setView(4)} />
        <ButtonNavbar label="Funcionarios" navTo={() => setView(1)} />
      </Footer>
    </>
  } 
  
  if (!userData) { return ( <SignIn /> ) }
      
}

export default App;