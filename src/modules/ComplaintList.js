import { ProductTile } from './Tiles'

function ComplaintList () {
    const complaints = [
        {
            username: 'Pedro Fernandez',
            id: 1,
            accountNumber: 1111,
            transactionNumber: 91928,
            complaintDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        }, 
        {
            username: 'Pablo Perez',
            id: 2,
            accountNumber: 1112,
            transactionNumber: 12742,
            complaintDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        }
    ]
    return (
        complaints.map(complaint => {
            return (
                <ProductTile key={complaint.id}> 
                    <h4>{complaint.username}</h4>
                    <p><b>Numero de Cuenta </b>{complaint.accountNumber}</p>
                    <p><b>Transacción # </b>{complaint.transactionNumber}</p>
                    <p>{complaint.complaintDescription}</p>
                </ProductTile>
            )
        })
    )
}

export default ComplaintList