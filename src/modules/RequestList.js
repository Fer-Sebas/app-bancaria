import { ButtonComfirm, ButtonDelete } from './Buttons'
import { InlineTile } from './Tiles'

function RequestList () {
    const requests = [{username: 'Pedro Fernandez', id: 1}, {username: 'Pablo Perez', id: 2}]
    return (
        requests.map(request => {
            return (
                <InlineTile key={request.id}> 
                    <p>{request.username}</p>
                    <ButtonComfirm />
                    <ButtonDelete />
                </InlineTile>
            )
        })
    )
}

export default RequestList