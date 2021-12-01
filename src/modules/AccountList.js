import { AccountCard } from "./Cards"

function AccountList ({accounts}) {
    return (
        accounts.map(account => {
            return <AccountCard account={account} />
        })
    )
}

export default AccountList