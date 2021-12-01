import { Card } from "./Card"
import SendMoneyForm from "./SendMoney.Form"

function SendMoney() {
    return (
        <Card 
            title="Envia dinero a otra cuenta" 
            body="Indicanos el numero de cuenta y el monto que deseas enviar."
            altText="*El costo del movimiento es del 1%"
        >            
            <SendMoneyForm />
        </Card>
    )
}

export default SendMoney