import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('All')

  const images = [
    { id: 1, title: "Max Fitness Pro", category: "Facility", src: "/Max_Fitness_Pro.webp" },
    { id: 2, title: "Cardio Zone", category: "Cardio", src: "/Cardio zone.webp" },
    { id: 3, title: "Free Weights Area", category: "Strength", src: "/Free weights area.webp" },
    { id: 4, title: "Machine Weights Area", category: "Strength", src: "/Machine weights area.webp" },
    { id: 5, title: "Cable Training Zone", category: "Strength", src: "/Cable training zone.webp" },
    { id: 6, title: "Functional Training Area", category: "Training", src: "/Functional training area.webp" },
    { id: 7, title: "Combat Training Area", category: "Combat", src: "/Combat training area.webp" },
    { id: 8, title: "Aerobics Studio", category: "Classes", src: "/Aerobics studio.webp" },
    { id: 9, title: "Spin Studio", category: "Classes", src: "/Spin studio.webp" },
    { id: 10, title: "Training Accessories", category: "Equipment", src: "/Training accessories area.webp" }
  ]

  const categories = ['All', 'Strength', 'Cardio', 'Classes', 'Training', 'Combat', 'Equipment', 'Facility']
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter)

  return (
    <div className="pt-16 bg-gray-950">
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-orange-500">Gallery</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Take a virtual tour of Max Fitness Pro and see our world-class facilities</p>
        </div>
      </section>

      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition transform hover:scale-105 ${
                  filter === cat
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500 transition cursor-pointer transform hover:scale-105 duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div>
                      <p className="!text-white text-xl font-bold mb-1" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{image.title}</p>
                      <p className="!text-orange-500 text-sm font-semibold" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-5xl hover:text-orange-500 transition z-10 w-12 h-12 flex items-center justify-center"
          >
            ×
          </button>
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-orange-500 text-lg font-semibold">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Visit?</h2>
          <p className="text-xl text-gray-400 mb-8">Visit us at 1021, Connaught Place, TDI Market, near Shree Balaji Hypermart, Sector 111</p>
          <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-xl hover:shadow-orange-500/50">
            Get Directions →
          </a>
        </div>
      </section>
    </div>
  )
}
