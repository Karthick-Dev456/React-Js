import React from 'react'
import Bug from '../components/Bug'
import ErrorBoundary from './ErrorBoundary'

const BugContainer = () => {
    return (
        <>
            <ErrorBoundary>
                <Bug />
            </ErrorBoundary>
        </>
    )
}

export default BugContainer