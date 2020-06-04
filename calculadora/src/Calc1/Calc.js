import React, { useState } from 'react';

import './style.css';

var numero1 = 0;
var numero2 = 0;
var operacao = '';

const Calc = () => {

    const INIT_HIST_VALUE = null;
    const INIT_RESULT_VALUE = 'Digite o número';

    const [ historico, setHistorico ] = useState(INIT_HIST_VALUE);
    const [ resultado, setResultado ] = useState(INIT_RESULT_VALUE);

    const executarOperacao = () => {
        var res = 0;
        var erro = null;

        if (resultado !== INIT_RESULT_VALUE ) {
            numero2 = parseInt(resultado);
            setHistorico(historico + ' ' + resultado);

            switch (operacao) {
                case '+':
                    res = numero1 + numero2;
                    break;
                case '-':
                    res = numero1 - numero2;
                    break;
                case '/':
                    if(numero2 > 0)
                        res = numero1 / numero2;
                    else
                        erro = 'Divisão por zero';
                    break;
                case '*':
                    res = numero1 * numero2;
                    break;
            
                default:
                    break;
            }

            if(erro)
                setResultado(erro);
            else {
                if(res.toString().length < 13)
                    setResultado('= ' + res);
                else
                    setResultado('RES GRANDE!');
            }
        }
    }

    const executarPorcentagem = () => {
        var res = 0;

        if (resultado !== INIT_RESULT_VALUE ) {
            numero2 = parseFloat(resultado) / 100 * numero1;
            setHistorico(historico + ' ( ' + resultado + '% )');

            switch (operacao) {
                case '+':
                    res = numero1 + numero2;
                    break;
                case '-':
                    res = numero1 - numero2;
                    break;
                case '/':
                    res = numero1 / numero2;
                    break;
                case '*':
                    res = numero1 * numero2;
                    break;
            
                default:
                    break;
            }

        setResultado('= ' + res);
        }
    }

    const addOperacao = (valor) => {
        if (resultado !== INIT_RESULT_VALUE ) {
            numero1 = parseInt(resultado);
            operacao = valor;

            setHistorico(resultado + ' ' + valor);
            setResultado(INIT_RESULT_VALUE);
        }
    }

    const addNumero = (valor) => {
        if (   resultado    !== INIT_RESULT_VALUE
            && resultado    !== '0'
            && resultado[0] !== '=') {

            if(resultado.length < 11) {
                setResultado(resultado + valor);
            }

        } else {
            setResultado(valor);
        }
    }

    const zerarResultado = () => {
        setHistorico(INIT_HIST_VALUE);
        setResultado(INIT_RESULT_VALUE);

        numero1 = 0;
        numero2 = 0;
        operacao = '';
    }

    return (
        <div className='calc'>
            <div className='calc-title'>Calculadora 1</div>
            <div className='calc-result'>
                {historico ? <div className='historico'>{historico}</div>:null}
                <div className='resultado'>{resultado}</div>
            </div>
            <div className='calc-buttons'>
                <div className='calc-linha'>
                    <div
                        className='calc-button igual'
                        onClick={executarOperacao}
                    >=</div>
                    <div
                        className='calc-button'
                        onClick={executarPorcentagem}
                    >%</div>
                    <div
                        className='calc-button'
                        onClick={zerarResultado}
                    >AC</div>
                </div>
                <div className='calc-linha'>
                    <div
                        className='calc-button'
                        onClick={() => addNumero('7')}
                    >7</div>
                    <div
                        className='calc-button'
                        onClick={() => addNumero('8')}
                    >8</div>
                    <div
                        className='calc-button'
                        onClick={() => addNumero('9')}
                    >9</div>
                    <div
                        className='calc-button'
                        onClick={() => addOperacao('/')}
                    >/</div>
                </div>
                <div className='calc-linha'>
                    <div
                        className='calc-button'
                        onClick={() => addNumero('4')}
                    >4</div>
                    <div
                        className='calc-button'
                        onClick={() => addNumero('5')}
                    >5</div>
                    <div
                        className='calc-button'
                        onClick={() => addNumero('6')}
                    >6</div>
                    <div
                        className='calc-button'
                        onClick={() => addOperacao('*')}
                    >x</div>
                </div>
                <div className='calc-linha'>
                    <div
                        className='calc-button'
                        onClick={() => addNumero('1')}
                    >1</div>
                    <div
                        className='calc-button'
                        onClick={() => addNumero('2')}
                    >2</div>
                    <div
                        className='calc-button'
                        onClick={() => addNumero('3')}
                    >3</div>
                    <div
                        className='calc-button'
                        onClick={() => addOperacao('-')}
                    >-</div>
                </div>
                <div className='calc-linha'>
                    <div
                        className='calc-button zero'
                        onClick={() => addNumero('0')}
                    >0</div>
                    <div
                        className='calc-button'
                        onClick={() => addOperacao('+')}
                    >+</div>
                </div>
            </div>
        </div>
    );
}

export default Calc;