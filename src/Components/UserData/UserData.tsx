import React, { useState } from 'react';
import './UserData.css';
import Address from '../../Models/Address';

    function UserData() {
        const [usuario, setUsuario] = useState<Usuario>({
            id: 0,
            nome: '',
            usuarioNome: '',
            cpf: '',
            email: '',
            senha: '',
            address: new Object,
        });

        const carregaDados = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setUsuario({
                ...usuario,
                [name]: value
            });
        };
    
        return (
            <>
            <div> 
                <input className="nomeUsuario" onLoad={carregaDados} value = {usuario.usuarioNome}/><p></p>
                <input className="nome" onLoad={carregaDados} value={usuario.nome}/><p></p>
                <input className="cpf" onLoad={carregaDados} value={usuario.cpf}/><p></p>
                <input className="email" onLoad={carregaDados} value={usuario.email}/><p></p>
                <input className="senha" onLoad={carregaDados} value={usuario.senha}/><p></p>
            </div>
            </>
        );
}

export default UserData;
