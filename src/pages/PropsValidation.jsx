import React from 'react'
import PropsTsValidation from '../components/PropsTsValidation'

const PropsValidation = () => {
    return (
        <div>
            <h1>Props Validation</h1>
            <PropsTsValidation name={'John'} age={20} isActive={true} />
            <PropsTsValidation age={20} isActive={true} />
        </div>
    )
}

export default PropsValidation