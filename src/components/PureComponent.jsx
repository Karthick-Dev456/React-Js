import React from 'react'

const PureComponent = ({ framework, setFramework }) => {

    console.log("Pure Component Rendered")

    return (
        <div>
            <h1>Pure Component</h1>
            <p>Framework: {framework}</p>
            <button className='bg-blue-400 text-white p-2 rounded-2xl' onClick={() => setFramework("Django")}>Change Framework</button>
        </div>
    )
}

// export default PureComponent
export default React.memo(PureComponent)