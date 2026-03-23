import React from 'react'

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-red-500">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                Oops! Page not found
                </h2>
                <p className="text-gray-600 mt-2">
                The page you are looking for doesn’t exist or has been moved.
                </p>

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

export default NotFound