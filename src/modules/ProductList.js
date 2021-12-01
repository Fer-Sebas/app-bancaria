import { ProductTile } from './Tiles'

function ProductList () {
    const products = [
        {username: 'Pedro Fernandez', accountNumber: 1111, accountStatus: 'Activa'}, 
        {username: 'Pablo Perez', accountNumber: 1112, accountStatus: 'Bloqueada'}]
    return (
        products.map(product => {
            return (
                <ProductTile key={product.accountNumber}> 
                    <h4># {product.accountNumber}</h4>
                    <p>{product.username}</p>
                    <p><b>Estado Cuenta:</b> {product.accountStatus}</p>
                </ProductTile>
            )
        })
    )
}

export default ProductList