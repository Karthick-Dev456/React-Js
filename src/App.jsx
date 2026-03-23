import React from 'react'
import PortalContainer from './pages/PortalContainer'
import ClassComponent from './pages/ClassComponent'
import ErrorBoundary from './pages/ErrorBoundary'
import BugContainer from './pages/BugContainer'
import PureContainer from './pages/PureContainer'

const App = () => {
    return (
        <div>
            <PureContainer />
        </div>
    )
}

export default App
