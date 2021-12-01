import Divider from './Divider'

function AccountCard ({account}) {

    return (
        <div className="card account">
            <h2>{account.type}</h2>
            <h1>{account.number}</h1>
            <Divider />
            <div>
                <h4>Balance</h4>
                <h4>{account.balance}</h4>
            </div>
        </div>
    )
}

export default AccountCard