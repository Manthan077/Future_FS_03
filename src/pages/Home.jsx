import { Link } from 'react-router-dom'

export default function Home() {
  const testimonials = [
    { name: "Rajesh Kumar", text: "Lost 15 kg in 4 months! Best gym in Mohali.", rating: 5, image: "👨" },
    { name: "Priya Singh", text: "Amazing trainers and great equipment. Highly recommend!", rating: 5, image: "👩" },
    { name: "Amit Sharma", text: "Clean facility and friendly staff. Worth every rupee!", rating: 5, image: "👨" }
  ]

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950 text-white min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-orange-500/20 border border-orange-500 rounded-full text-orange-500 font-semibold animate-pulse">
              🔥 Limited Time: Get 7 Days Free Trial
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Transform Your <span className="text-orange-500 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">Body</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Mohali's Premier Fitness Destination
            </p>
            <p className="text-lg mb-8 text-gray-400">
              Professional Training • Modern Equipment • Expert Coaches
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership" className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg hover:shadow-orange-500/50">
                View Membership Plans
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a href="https://wa.me/919877323886" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-orange-500">500+</div>
                <div className="text-gray-300 mt-2">Active Members</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-orange-500">10+</div>
                <div className="text-gray-300 mt-2">Expert Trainers</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-orange-500">5 Years</div>
                <div className="text-gray-300 mt-2">In Mohali</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Max Fitness Pro</h2>
            <p className="text-xl text-gray-400">Mohali's most trusted fitness center</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-xl font-bold text-white mb-3">Certified Trainers</h3>
              <p className="text-gray-400">Expert coaches with international certifications</p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Equipment</h3>
              <p className="text-gray-400">Latest imported machines and facilities</p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📍</div>
              <h3 className="text-xl font-bold text-white mb-3">Prime Location</h3>
              <p className="text-gray-400">Connaught Place, TDI Market, Sector 111</p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💪</div>
              <h3 className="text-xl font-bold text-white mb-3">Results Driven</h3>
              <p className="text-gray-400">Proven track record of transformations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-gray-400">Everything you need under one roof</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-orange-500 to-orange-700 p-8 rounded-xl text-white overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💪</div>
                <h3 className="text-2xl font-bold mb-3">Strength Training</h3>
                <p className="mb-6">Build muscle with our comprehensive weight training programs</p>
                <Link to="/services" className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-xl text-white overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏃</div>
                <h3 className="text-2xl font-bold mb-3">Cardio Workouts</h3>
                <p className="mb-6">Improve endurance with our cardio equipment and classes</p>
                <Link to="/services" className="inline-flex items-center gap-2 bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-xl text-white overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                <h3 className="text-2xl font-bold mb-3">Personal Training</h3>
                <p className="mb-6">Get one-on-one coaching tailored to your goals</p>
                <Link to="/services" className="inline-flex items-center gap-2 bg-white text-purple-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">Hear from our amazing members</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <div className="flex text-orange-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.3)'}}>Join 500+ members at Mohali's best fitness center</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership" className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
              View Plans
            </Link>
            <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition transform hover:scale-105 shadow-xl">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
