import React from 'react';
import Carro from './Carro';
import Moto from './Moto';

const App = () => {
    return(
        <>
            <Carro cor='Azul' numRodas='4' numPortas='4' />
            <Carro cor='Rosa' numRodas='4' numPortas='2' />
            <Moto cor='Preta' numRodas='2' />
        </>
    )
};

export default App;
