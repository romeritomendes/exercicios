import React from 'react';

const CalcButton = ({className, valor, funcao}) => {

    const classEspecial = className ? ('calc-button ' + className):'calc-button';

    return (
        <div
            className={classEspecial}
            onClick={() => funcao(valor)}
        >{valor}</div>
    )
}

export default CalcButton;