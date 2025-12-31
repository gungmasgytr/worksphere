import { useState, useEffect } from 'react'

const services = [
  {
    title: 'WEB DEVELOPMENT',
    jobs: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    image: '/assets/images/services/web.png',
  },
  {
    title: 'LOGO DESIGN',
    jobs: ['Logo Designer', 'Brand Designer', 'Illustrator'],
    image: '/assets/images/services/logo.png',
  },
  {
    title: 'SEO',
    jobs: ['SEO Specialist', 'Content Strategist', 'Keyword Analyst'],
    image: '/assets/images/services/seo.png',
  },
  {
    title: 'VIDEO EDITING',
    jobs: ['Video Editor', 'Motion Designer', 'YouTube Editor'],
    image: '/assets/images/services/video.png',
  },
  {
    title: 'UI/UX DESIGN',
    jobs: ['UI Designer', 'UX Researcher', 'Product Designer'],
    image: '/assets/images/services/uiux.png',
  },
  {
    title: 'WEB DEVELOPMENT',
    jobs: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    image: '/assets/images/services/web.png',
  },
  {
    title: 'LOGO DESIGN',
    jobs: ['Logo Designer', 'Brand Designer', 'Illustrator'],
    image: '/assets/images/services/logo.png',
  },
  {
    title: 'SEO',
    jobs: ['SEO Specialist', 'Content Strategist', 'Keyword Analyst'],
    image: '/assets/images/services/seo.png',
  },
  {
    title: 'VIDEO EDITING',
    jobs: ['Video Editor', 'Motion Designer', 'YouTube Editor'],
    image: '/assets/images/services/video.png',
  },
  {
    title: 'UI/UX DESIGN',
    jobs: ['UI Designer', 'UX Researcher', 'Product Designer'],
    image: '/assets/images/services/uiux.png',
  },
  {
    title: 'WEB DEVELOPMENT',
    jobs: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    image: '/assets/images/services/web.png',
  },
  {
    title: 'LOGO DESIGN',
    jobs: ['Logo Designer', 'Brand Designer', 'Illustrator'],
    image: '/assets/images/services/logo.png',
  },
  {
    title: 'SEO',
    jobs: ['SEO Specialist', 'Content Strategist', 'Keyword Analyst'],
    image: '/assets/images/services/seo.png',
  },
  {
    title: 'VIDEO EDITING',
    jobs: ['Video Editor', 'Motion Designer', 'YouTube Editor'],
    image: '/assets/images/services/video.png',
  },
  {
    title: 'UI/UX DESIGN',
    jobs: ['UI Designer', 'UX Researcher', 'Product Designer'],
    image: '/assets/images/services/uiux.png',
  },
]

export default function JobCarousel() {
  const [index, setIndex] = useState(0)
  const visibleCards = 4
  const maxIndex = services.length - visibleCards

  // 🔁 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000) // 3 detik

    return () => clearInterval(interval)
  }, [maxIndex])

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Carousel Track */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 280}px)` }}
        >
          {services.map((item, i) => (
            <div
              key={i}
              className="
                w-[260px] h-[300px]
                rounded-xl overflow-hidden
                relative flex-shrink-0
                shadow-md
              "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-600/10 p-5 flex flex-col justify-end text-white">
                <h3 className="font-semibold text-lg tracking-wide mb-2">
                  {item.title}
                </h3>

                {/* Job Types */}
                <ul className="text-sm space-y-1 opacity-90">
                  {item.jobs.map((job, j) => (
                    <li key={j}>• {job}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-[-20px] top-1/2 -translate-y-1/2
                   w-10 h-10 bg-white rounded-full shadow
                   flex items-center justify-center"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-[-20px] top-1/2 -translate-y-1/2
                   w-10 h-10 bg-white rounded-full shadow
                   flex items-center justify-center"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-6 rounded-full ${
              i === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
