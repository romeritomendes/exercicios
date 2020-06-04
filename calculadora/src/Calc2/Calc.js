import React, { useState } from 'react';

import CalcResultado from './CalcResultado';
import CalcButton from './CalcButton';

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
                case 'x':
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
                case 'x':
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
            <CalcResultado
                historico = {historico}
                resultado = {resultado}
            />
            <div className='calc-buttons'>
                <div className='calc-linha'>
                    <CalcButton
                        className='igual'
                        funcao={executarOperacao}
                        valor='='
                    />
                    <CalcButton
                        funcao={executarPorcentagem}
                        valor='%'
                    />
                    <CalcButton
                        funcao={zerarResultado}
                        valor='AC'
                    />
                </div>
                <div className='calc-linha'>
                    <CalcButton
                        funcao={addNumero}
                        valor='7'
                    />
                    <CalcButton
                        funcao={addNumero}
                        valor='8'
                    />
                    <CalcButton
                        funcao={addNumero}
                        valor='9'
                    />
                    <CalcButton
                        funcao={addOperacao}
                        valor='/'
                    />
                </div>
                <div className='calc-linha'>
                    <CalcButton
                        funcao={addNumero}
                        valor='4'
                    />
                    <CalcButton
                        funcao={addNumero}
                        valor='5'
                    />
                    <CalcButton
                        funcao={addNumero}
                        valor='6'
                    />
                    <CalcButton
                        funcao={addOperacao}
                        valor='x'
                    />
                </div>
                <div className='calc-linha'>
                    <CalcButton
                        funcao={addNumero}
                        valor='1'
                    />
                    <CalcButton
                        funcao={addNumero}
                        valor='2'
                    />
                    <CalcButton
                        funcao={addNumero}
                        valor='3'
                    />
                    <CalcButton
                        funcao={addOperacao}
                        valor='-'
                    />
                </div>
                <div className='calc-linha'>
                    <CalcButton
                        className='zero'
                        funcao={addOperacao}
                        valor='0'
                    />
                    <CalcButton
                        funcao={addOperacao}
                        valor='+'
                    />
                </div>
            </div>
        </div>
    );
}

export default Calc;