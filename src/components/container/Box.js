import React from 'react'
import "./Container.css"

const Box = ({children, className}) => {
    return (
        <div className={`container ${className}`}>
            <div className='item'>
                 {children}
            </div>
        </div>
    )
}

export default Box
