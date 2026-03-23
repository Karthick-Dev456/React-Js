import React from 'react'

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
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                <p>Count: {this.state.count}</p>
            </section>
        )
    }
}

export default ClassComponent