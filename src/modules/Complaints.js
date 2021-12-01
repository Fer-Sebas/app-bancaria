import DashboardHeader from "./Dashboard.Header"
import Divider from "./Divider"
import ComplaintList from './ComplaintList'

document.body.classList.remove('red');

function Complaints({user}){
    return (
        <>
            <DashboardHeader user={user} />
            <Divider />
            <ComplaintList />
        </>
    )
}

export default Complaints