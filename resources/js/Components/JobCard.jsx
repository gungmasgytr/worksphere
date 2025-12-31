export default function JobCard({
    title = 'Senior Graphic Designer',
    company = 'cc_creative',
    level = 'Senior',
    salary = 'IDR 1.000.000 / project',
    description = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    tags = ['Design', 'Graphic Design', 'Senior'],
    date = '28 March 2021',
    status = 'Available',
}) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
            {/* Logo */}
                <div className="w-12 h-12 rounded-lg bg-[#001E36] flex items-center justify-center text-blue-400 font-bold text-xl">
                    Ps
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{company}</p>
                </div>
            </div>

            {/* Status */}
            <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium">
                {status}
            </span>
        </div>

        {/* Meta */}
        <div className="flex gap-6 mt-4 text-sm text-gray-700">
            <span>{level}</span>
            <span className="font-medium">{salary}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, i) => (
            <span
                key={i}
                className="text-xs px-3 py-1 rounded-md bg-blue-50 text-blue-600"
            >
                {tag}
            </span>
            ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
            <span className="text-xs text-gray-400">{date}</span>

            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition">
            Apply
            <span>→</span>
            </button>
        </div>
    </div>
)}