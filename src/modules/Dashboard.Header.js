
import ButtonAccount from './Button.Account'
import Logo from './Logo'

function DashboardHeader({user}) {
    return (
        <header className="dashboard">
            <Logo />
            <div>
                <h4>Hola {user.username}</h4>                
                {user.userType === 1 && <p>Usuario</p> } {user.userType === 2 && <p>Funcionario</p> } {user.userType === 3 && <p>Administrador</p> }
                    
            </div>
            <ButtonAccount />
        </header>
    )
}

export default DashboardHeader