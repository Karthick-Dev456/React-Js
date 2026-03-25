import React from 'react'
import PortalContainer from './pages/PortalContainer'
import ClassComponent from './pages/ClassComponent'
import ErrorBoundary from './pages/ErrorBoundary'
import BugContainer from './pages/BugContainer'
import PureContainer from './pages/PureContainer'
import UseRefHook from './pages/UseRefHook'
import UseReducerHook from './pages/UseReducerHook'
import PropsValidation from './pages/PropsValidation'
import UseMemoHook from './pages/UseMemoHook'



const App = () => {
    return (
        <div>
            <BugContainer />
        </div>
    )
}

export default App
