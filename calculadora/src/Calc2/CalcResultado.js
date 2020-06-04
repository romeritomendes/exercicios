import React from 'react';

const CalcResultado = ({historico, resultado}) => {
    return (
        <>
            <div className='calc-title'>Calculadora 2 (Com Componentes)</div>
            <div className='calc-result'>
                {historico ? <div className='historico'>{historico}</div>:null}
                <div className='resultado'>{resultado}</div>
            </div>
        </>
    )
}

export default CalcResultado;