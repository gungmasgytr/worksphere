export default function CategoryCard({ title, image }) {
    return (
        <div className="relative h-[110px] rounded-2xl overflow-hidden group cursor-pointer">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition" />

            {/* Text */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg text-center px-2">
                    {title}
                </span>
            </div>
        </div>
    )
}
