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
import UncontrolledComponent from './pages/UncontrolledComponent'
import UseContextHook from './pages/UseContextHook'


const App = () => {
    return (
        <div>
            <UseContextHook />
        </div>
    )
}

export default App
