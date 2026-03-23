import React from 'react'

const Pattern = ({ title, description, children }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
        </div>
    )
}

export default Pattern