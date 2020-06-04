import React from 'react';

impor

const Box = ({ className, title, children, ...props }) => {
    return (
        <div className={'box-content ' + className}>
            <div className='box-barra'>
                <div className='box-title'>{title}</div>
                <div className='box-add'>+</div>
            </div>
            <div
                className={'box-body ' + className}
                {...props}
            >
                {children}
            </div>
        </div>
    )
}

export default Box;