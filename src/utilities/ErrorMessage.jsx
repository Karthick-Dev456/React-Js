import React from "react";

const ErrorMessage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                    Oops! Something Went Wrong
                </h2>
                <button
                    onClick={() => (window.location.href = "/")}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    )
}

export default ErrorMessage