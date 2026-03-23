import React, { useRef, useState } from 'react'

const UncontrolledComponent = () => {
    const nameRef = useRef(null)
    const [submittedName, setSubmittedName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmittedName(nameRef.current.value)
        nameRef.current.value = ''
        nameRef.current.focus()
    }

    return (
        <div>
            <h1>Uncontrolled Component</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={nameRef}
                    placeholder="Enter your name"
                />
                <button type="submit">Submit</button>
            </form>
            {submittedName && <p>Submitted Name: {submittedName}</p>}
        </div>
    )
}

export default UncontrolledComponent
