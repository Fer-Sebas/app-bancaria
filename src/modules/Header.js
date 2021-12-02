import { ButtonAccount } from './Buttons'
import Logo from './Logo'

function DashboardHeader({user}) {
    return (
        <header className="dashboard">
            <Logo />
            <div>
                <h4>Hola {user.username}</h4>                
                {user.role === 'USER' && <p>Usuario</p> }
                {user.role === 'ADMIN' && <p>Funcionario</p> }
                {user.role === 'SUPERADMIN' && <p>Administrador</p> }                    
            </div>
            <ButtonAccount />
        </header>
    )
}

export default DashboardHeader