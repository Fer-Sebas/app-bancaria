import AccountCard from "./Card.Account"

function AccountList ({accounts}) {
    return (
        accounts.map(account => {
            return <AccountCard account={account} />
        })
    )
}

export default AccountList