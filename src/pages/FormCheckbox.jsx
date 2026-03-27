import React, { useState } from 'react'
import { submitButton } from '../utilities/Styles'

const FormCheckbox = () => {

    const options = ["red", "green", "blue"];

    const [colors, setColors] = useState([])

    const handleChange = event => {
        const { id, checked } = event.target;

        console.log(id, "id")
        console.log(checked, "checked")

        if (checked) {
            setColors([...colors, id]);
        } 
        else {
            setColors(colors.filter((color) => color !== id));
        }
    };

    const handleSubmit = () => {
        console.log(colors)
    }

    return (
        <div>
            <form>
                <label>What is your favorite color?</label>
                <br /><br />

                {/* <input type="checkbox" id="red" onChange={handleChange} />
                <label htmlFor="red">Red</label>

                <input type="checkbox" id="green" onChange={handleChange} />
                <label htmlFor="green">Green</label>

                <input type="checkbox" id="blue" onChange={handleChange} />
                <label htmlFor="blue">Blue</label> */}


                {options.map((color) => (
                    <div key={color}>
                        <input
                        type="checkbox"
                        id={color}
                        onChange={handleChange}
                        />
                        <label htmlFor={color}>{color}</label>
                    </div>
                ))}

                <br />

                <input type="button" onClick={handleSubmit} value="Submit" className={submitButton} />
            </form>

            
        </div>
    )
}

export default FormCheckbox
