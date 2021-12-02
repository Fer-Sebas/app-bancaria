import { ModalCard } from "./Cards"
import SendMoneyForm from "./SendMoney.Form"

function SendMoney() {
    return (
        <ModalCard 
            title="Envia dinero a otra cuenta" 
            body="Indicanos el numero de cuenta y el monto que deseas enviar."
            altText="*El costo del movimiento es del 1%"
            id="SendMoney"
        >            
            <SendMoneyForm />
        </ModalCard>
    )
}

export default SendMoney