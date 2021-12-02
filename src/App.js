import Header from './modules/Header'
import AccountList from './modules/AccountList'
import { Card } from './modules/Cards'
import SendMoney from './modules/SendMoney'
import { useEffect, useState } from 'react'
import { ButtonFab } from './modules/Buttons'
import axios from 'axios'


const getUserData = async () => {
  return axios.get('http://localhost:5000/users/61a828ab37a98998529a90a0')
  .then(({data}) => { console.log(data); return data })
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

    return (
      <>
        <Header user={userData} />

        {userData.role === 'USER' &&
          <ButtonFab />
        }

        {userData.role === 'ADMIN' &&
          <p>Admin</p>
        }

        {userData.role === 'SUPERADMIN' &&
          <p>Super Admin</p>
        }
        
      </>
    )
   
}

export default App;