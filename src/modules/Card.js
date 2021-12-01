import Close from './Close'

function Card(props) {
   
    return (
        <div className="card">
            <Close />
            {props.title != null &&
                <h3>{props.title}</h3>
            }
            {props.body != null &&
                <p>{props.body}</p>
            }
            {props.children}
            {props.altText != null &&
                <p className="altText">{props.altText}</p>
            }
        </div>
    )
}

export default Card