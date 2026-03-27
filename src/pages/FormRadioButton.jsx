import React, { useState } from 'react'
import { submitButton } from '../utilities/Styles'

const FormRadioButton = () => {

    const options = ["javascript", "python", "java"];
    const [language, setLanguage] = useState("")

    const handleSubmit = () => {
        console.log(language);
    }

    return (
        <div>
            <form>
                <label>What is your favorite programming language?</label>
                <br /><br />

                {options.map((lang) => (
                    <div key={lang}>
                    <input
                        type="radio"
                        name="language"
                        id={lang}
                        value={lang}
                        checked={language === lang}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                    <label htmlFor={lang}>{lang}</label>
                    </div>
                ))}

                <br />
                <input type="button" value="Submit" className={submitButton} onClick={handleSubmit} /> 
            </form>
        </div>
    )
}

export default FormRadioButton
