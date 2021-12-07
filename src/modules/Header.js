import { ButtonAccount } from './Buttons'
import Divider from './Divider'

function DashboardHeader({userData}) {
    return (
        <header>
            <nav>
                <div>
                    <h4>Hola {userData.username}</h4>                
                    {userData.role === 'USER' && <p>Usuario</p> }
                    {userData.role === 'ADMIN' && <p>Funcionario</p> }
                    {userData.role === 'SUPERADMIN' && <p>Administrador</p> }   
                </div>                 
                <ButtonAccount />
            </nav>
            <Divider />
        </header>
    )
}

export default DashboardHeader