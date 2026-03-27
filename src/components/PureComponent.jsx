import React from 'react'
import { submitButton } from '../utilities/Styles'

const PureComponent = ({ framework, setFramework }) => {

    console.log("Pure Component Rendered")

    return (
        <div>
            <h1>Pure Component</h1>
            <p>Framework: {framework}</p>
            <button className={submitButton} onClick={() => setFramework("Django")}>
                Change Framework
            </button>
        </div>
    )
}

// export default PureComponent
export default React.memo(PureComponent)