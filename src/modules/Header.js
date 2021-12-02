import { ButtonAccount } from './Buttons'
import Logo from './Logo'

function DashboardHeader({userData}) {
    return (
        <header className="dashboard">
            <Logo />
            <div>
                <h4>Hola {userData.username}</h4>                
                {userData.role === 'USER' && <p>Usuario</p> }
                {userData.role === 'ADMIN' && <p>Funcionario</p> }
                {userData.role === 'SUPERADMIN' && <p>Administrador</p> }                    
            </div>
            <ButtonAccount />
        </header>
    )
}

export default DashboardHeader