"use client"

import { useState } from "react"

interface WrapperProps {
    children : React.ReactNode;
}

const ErrorSimuletor = ({message = "an error showing"} : {message? : string}) => {
    const [error, setError] = useState(false)
    if (error) throw new Error(message)

    return (
        <button 
            title="simulete an error" 
            className="bg-red-800 text-red-500 rounded p-1 leading-none font-semibold text-sm" 
            onClick={() => setError(true)}    
        >
            simuletor error
        </button>
    )
}

export const ErrorWrapper = ({children} : WrapperProps) => {
    return (
        <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
            <div className="absolute top-0 left-4 -translate-y-1/2">
                <ErrorSimuletor message="simulete error in root layout" />
            </div>
            {children}
        </div>
    )
}