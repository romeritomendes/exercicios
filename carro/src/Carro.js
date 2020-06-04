import React, { useState } from 'react';

const Carro = ({cor, numPortas}) => {
    const [PortaAberta, setPortaAberta] = useState(false);

    /*
    let PortaAberta = false;

    console.log('PortaAberta', PortaAberta);

    const setPortaAberta = (value) => {
        PortaAberta = value;

        console.log('PortaAberta (' + cor + '):', PortaAberta);
    }
    */

    const aoClicar = (value) => {
        setPortaAberta(value);
    }
    
    console.log('PortaAberta (' + cor + '):', PortaAberta);

    return (
        <>
            <h1>Carro</h1>
            <h2>Cor: {cor}</h2>
            <h2>Portas: {numPortas}</h2>
            <h2
                onClick={() => aoClicar(true)}
            >Porta Aberta? {PortaAberta ? 'SIM':'NÃO'}</h2>
        </>
    )
}

export default Carro;