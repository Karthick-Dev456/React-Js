import React from 'react'
import { submitButton } from '../utilities/Styles'

class ClassComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    
    render() {

        return (
            <section>
                <h1>ClassComponent</h1>
                <p>This is a class component</p>
                <button className={submitButton} onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                <p>Count: {this.state.count}</p>
            </section>
        )
    }
}

export default ClassComponent