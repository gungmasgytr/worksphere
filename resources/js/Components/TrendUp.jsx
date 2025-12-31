export default function TrendUp({
  label = 'DESIGNER',
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        group
        flex items-center justify-between
        px-6 py-4
        w-full max-w-sm
        rounded-full
        bg-gradient-to-r from-sky-400 to-blue-500
        text-white
        shadow-md
        hover:scale-[1.02]
        transition-all duration-200
      "
    >
      {/* Text */}
      <span className="text-lg font-light tracking-widest">
        {label}
      </span>

      {/* Icon Box */}
      <span
        className="
          flex items-center justify-center
          w-10 h-10
          rounded-xl
          bg-white
          shadow
          group-hover:scale-105
          transition
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H9M17 7v8"
          />
        </svg>
      </span>
    </button>
  )
}
