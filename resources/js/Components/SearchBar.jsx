import { useState } from 'react'

export default function SearchBar({
    placeholder = 'Search Here',
    onSubmit,
}) {
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit?.(query)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-3xl my-8">
            <div className="relative">
                {/* Input */}
                <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="w-full py-4 pl-6 pr-20 text-gray-700 placeholder-gray-400 bg-white rounded-full shadow-md focus:outline-none"
                />

                {/* Button (Absolute & Bigger) */}
                <button
                type="submit"
                className="absolute top-1/2 right-0 -translate-y-1/2
                            w-20 h-20 rounded-full
                            bg-blue-600 hover:bg-blue-700
                            flex items-center justify-center
                            shadow-lg transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M16.65 11.32a5.33 5.33 0 11-10.66 0 5.33 5.33 0 0110.66 0z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    )
}
