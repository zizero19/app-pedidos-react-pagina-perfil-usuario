import React, { useState } from 'react';
import './UserData.css';
import Address from '../../Models/Address';

    function UserData() {
        const [usuario, setUsuario] = useState<Usuario>({
            id: 0,
            nome: 'teste',
            usuarioNome: 'teste',
            cpf: 'teste',
            email: 'teste',
            senha: 'teste',
            address: new Object,
        });

        //const carregaDados = (event: React.ChangeEvent<HTMLInputElement>) => {
            //const { name, value } = event.target;
            //setUsuario({
                //...usuario,
                //[name]: value
            //});
        //};
    
        return (
            <>
            <div> 
                <input className="nomeUsuario" value = {usuario.usuarioNome}/><p></p>
                <input className="nome" value={usuario.nome}/><p></p>
                <input className="cpf" value={usuario.cpf}/><p></p>
                <input className="email" value={usuario.email}/><p></p>
                <input className="senha" value={usuario.senha}/><p></p>
            </div>
            </>
        );
}

export default UserData;
