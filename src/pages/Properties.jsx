import React from 'react'
import Pattern from '../components/Pattern'

const Properties = () => {
    return (
        <div>
            <h1>Properties</h1>
            <Pattern title="First Pattern" description="This is the first pattern."></Pattern>
            <Pattern title="Second Pattern" description="This is the second pattern."></Pattern>
            <Pattern title="Third Pattern" description="This is the third pattern.">
                <p>This is the child content.</p>
            </Pattern>
        </div>
    )
}

export default Properties