import React from 'react';

import './estiloApp.css';

import Calc1 from './Calc1/Calc';
import Calc2 from './Calc2/Calc';

const App = () => {
    return (
        <div className='calculadoras'>
            <Calc1 />
            <Calc2 />
        </div>
    );
}

export default App;
