import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1000)
  }

  return (
    <div className="pt-16 bg-gray-950">
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In <span className="text-orange-500">Touch</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2 font-semibold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="Manthan Sharma"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 font-semibold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="manthan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 font-semibold">Message</label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="Tell us about your fitness goals..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>
                {submitted && (
                  <div className="bg-green-500/20 border border-green-500 text-green-500 p-4 rounded-lg text-center font-semibold animate-fade-in">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="group flex items-start gap-4 bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition transform hover:-translate-y-1">
                    <div className="text-3xl group-hover:scale-110 transition-transform">📍</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Address</h3>
                      <p className="text-gray-400">1021, Connaught Place, TDI Market</p>
                      <p className="text-gray-400">Near Shree Balaji Hypermart</p>
                      <p className="text-gray-400">Sector 111, SAS Nagar, Punjab 140307</p>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition transform hover:-translate-y-1">
                    <div className="text-3xl group-hover:scale-110 transition-transform">📞</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:+919877323886" className="text-gray-400 hover:text-orange-500 transition">+91 98773 23886</a>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition transform hover:-translate-y-1">
                    <div className="text-3xl group-hover:scale-110 transition-transform">✉️</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:info@maxfitnesspro.com" className="text-gray-400 hover:text-orange-500 transition">info@maxfitnesspro.com</a>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition transform hover:-translate-y-1">
                    <div className="text-3xl group-hover:scale-110 transition-transform">🕐</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Hours</h3>
                      <p className="text-gray-400">Mon-Sat: 6AM - 10PM</p>
                      <p className="text-gray-400">Sunday: 8AM - 6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 h-80 hover:border-orange-500 transition">
                <iframe
                  src="https://www.google.com/maps?q=MAX+FITNESS+PRO,+1021,+Connaught+Place,+TDI+Market,+near+Shree+Balaji+Hypermart,+Sector+111,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140307&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Max Fitness Pro Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prefer to Chat?</h2>
          <p className="text-xl text-gray-400 mb-8">Message us on WhatsApp for instant responses</p>
          <a href="https://wa.me/919877323886" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg hover:shadow-green-500/50">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp →
          </a>
        </div>
      </section>
    </div>
  )
}
