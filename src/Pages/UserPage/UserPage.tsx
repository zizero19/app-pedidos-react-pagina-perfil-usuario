import UserData from '../../Components/UserData/UserData';
import './UserPage.css'

const Teste = () => {
    return (
    <>
    <body>
        <div className="container">
            <header>
                <h1>Perfil do Usuario</h1>
            </header>

            <div className="userDisplay">
                <UserData></UserData>

            </div>
        </div>
    </body>
    </>
    )
}

export default Teste;