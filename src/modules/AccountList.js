import { Card, AccountCard } from "./Cards"

function AccountList ({accounts}) {

    if (accounts.length > 0) {
        return (
            accounts.map(account => {
                return <AccountCard key={account._id} account={account} />
            })
        )
    }

    else {
        return (
            <Card>
                <h3>Hola!</h3>
                <p>Aun no tienes cuentas. Solicta una haciendo click en el boton de arriba.</p>
            </Card>
        )
    }
    
}

export default AccountList