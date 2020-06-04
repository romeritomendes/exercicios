import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    .content {
        display: flex;
        flex-direction: row;
    }

    .box-content {
        display: flex;
        flex-direction: column;

        margin: 0 5px;
        border: 1px solid black;

        box-shadow: 1px 1px 5px black;

        width: 300px;
        height: 600px;
    }

    .box-barra {
        display: flex;
        flex-direction: row;

        justify-content: flex-end;

        border-bottom: 1px solid black;
        box-shadow: 1px 1px 5px black;

        height: 49px;

        background-color: #db4c3f;

        color: white;
        text-align: center;
        font-size: 30px;
    }

    .box-title {
        display: flex;
        padding: 5px 0px 5px 25px;

        flex-grow: 1;

        height: 38px;
    }

    .box-add {
        display: flex;

        justify-content: center;
        align-items: center;

        border: 1px solid black;

        width: 48px;
        height: 47px;

        cursor: pointer;
    }

    .box-add:hover {
        box-shadow: 1px 1px 5px black;
    }

    .box-body {
        flex-grow: 1;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        margin: 5px 10px;
        border: 1px dashed black;
        box-shadow: 1px 1px 5px black;
        padding: 0px 10px;

        background-color: #fafafa;

        cursor: pointer;
    }

    .card-status {
        margin-top: 5px;
        border: 3px solid;
        border-radius: 4px;

        width: 20px;
    }

    .box-content .box-body .card-content:active {
        .card-status {
            align-self: center;
            border-color: #fecd19;
        }
    }

    .box-content .todo .card-content .card-status {
        align-self: flex-start;
        border-color: #d1453b;
    }

    .box-content .doing .card-content .card-status {
        align-self: center;
        border-color:  #83ba13;
    }

    .box-content .did .card-content .card-status {
        align-self: flex-end;
        border-color: #4b8fe1;
    }

    .card-text {
        margin: 5px 0px;

        height: 25px;
    }
`;