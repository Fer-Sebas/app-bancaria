import Header from './modules/Header'
import Dashboard from './modules/Dashboard'
import SignIn from './modules/SignIn'
import { useEffect, useState } from 'react'
import axios from 'axios'

const u1 = '61a92f8efc38d1746d343257'
const u2 ='61a828ab37a98998529a90a0'

const getUserData = async () => {
  return axios.get('http://localhost:5000/users/'+ u2)
  .then(({data}) => { console.log('User logged in: ' + data.username); return data })
  .catch(err => { console.error(err) })
}

document.body.classList.add('red')

function App() { 

  const [userData, setUserData] = useState('')

  useEffect(() => {
    getUserData().then(user => {
      setUserData(user)
    })
  }, [])

  if (userData) {
    return (
      <>
        <Header userData={userData} />
        <Dashboard userData={userData} />
      </>
    )
  } 
  
  else {

    return (
      <SignIn />
    );

  }
      
   
}

export default App;