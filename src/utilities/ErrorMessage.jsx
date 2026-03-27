import React from "react";
import { submitButton } from "./Styles";

const ErrorMessage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                    Oops! Something Went Wrong
                </h2>
                <button
                    onClick={() => (window.location.href = "/")}
                    className={`${submitButton} mt-6 shadow hover:bg-blue-700 transition`}
                >
                    Go Back Home
                </button>
            </div>
        </div>
    )
}

export default ErrorMessage