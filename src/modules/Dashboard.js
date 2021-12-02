import AccountList from "./AccountList"

function Dashboard({userData}) {

    if (userData.role === 'USER') {
        return (
          <>
            <button className="alt">Solicitar Cuenta</button>
            <AccountList accounts={userData.accounts}/>
          </>
        )
    } 

    if (userData.role === 'ADMIN') {
        return (
          <>
          </>
        )
    } 

    if (userData.role === 'SUPERADMIN') {
        return (
          <>
          </>
        )
    } 

}

export default Dashboard