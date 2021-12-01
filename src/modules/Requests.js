import DashboardHeader from "./Dashboard.Header"
import Divider from "./Divider"
import RequestList from './RequestList'

document.body.classList.remove('red');

function Request({user}){
    return (
        <>
            <DashboardHeader user={user} />
            <Divider />
            <RequestList />
        </>
    )
}

export default Request