import DashboardHeader from "./Dashboard.Header"
import Divider from "./Divider"
import ProductList from './ProductList'

document.body.classList.remove('red');

function Products({user}){
    return (
        <>
            <DashboardHeader user={user} />
            <Divider />
            <ProductList />
        </>
    )
}

export default Products