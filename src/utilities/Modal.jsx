import React from "react";
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Overlay */}
        <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
        ></div>

        {/* Modal Box */}
        <div className="relative bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 z-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
                onClick={onClose}
                className="text-gray-500 hover:text-black text-lg"
            >
                ✕
            </button>
            </div>

            {/* Content */}
            <div className="mb-4">{children}</div>

            {/* Footer */}
            <div className="flex justify-end gap-2">
            <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
            >
                Cancel
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                Confirm
            </button>
            </div>
        </div>
        </div>,
        document.getElementById('portal-root')
    )
}

export default Modal