
// Tiles

function InlineTile (props){
    return (
        <div className="tile inline">
            {props.children}
        </div>
    )
}

function ProductTile (props){
    return (
        <div className="tile">
            {props.children}
        </div>
    )
}


export {InlineTile, ProductTile}