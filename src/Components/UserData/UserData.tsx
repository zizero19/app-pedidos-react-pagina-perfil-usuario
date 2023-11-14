import React, { useState } from 'react';
import './UserData.css';
import Address from '../../Models/Address';

    function User() {
                
        const [usuario, setUsuario] = useState<Usuario>({
            id: 0,
            nome: '',
            usuarioNome: '',
            cpf: '',
            email: '',
            senha: '',
            address: new Object,
}
    
    return (
        <div>
            <p className="nomeUsuario"></p>
            <p className="nome"></p>
            <p className="cpf"></p>
            <p className="email"></p>
            <p className="senha"></p>
        </div>
    );
};

export default UserData;
