export default function About() {
  const team = [
    { name: "John Smith", role: "Head Trainer", specialty: "Strength & Conditioning", emoji: "💪" },
    { name: "Sarah Johnson", role: "Yoga Instructor", specialty: "Flexibility & Wellness", emoji: "🧘" },
    { name: "Mike Chen", role: "Boxing Coach", specialty: "Combat Sports", emoji: "🥊" },
    { name: "Emily Davis", role: "Nutritionist", specialty: "Diet & Meal Planning", emoji: "🍎" }
  ]

  return (
    <div className="pt-16 bg-gray-950">
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About <span className="text-orange-500">Us</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Building a stronger, healthier community one member at a time</p>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="group bg-gradient-to-br from-orange-500 to-orange-700 h-96 rounded-2xl flex items-center justify-center text-9xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-orange-500/20">
              🏋️
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2019, Max Fitness Pro started with a simple mission: to create a welcoming space where everyone, regardless of fitness level, could work towards their health goals in Mohali.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Located in the heart of Connaught Place, TDI Market, we've grown into a thriving fitness community with over 500 active members. We pride ourselves on our state-of-the-art equipment, expert trainers, and supportive atmosphere.
              </p>
              <p className="text-lg text-gray-300">
                Today, we continue to evolve and expand our services, always keeping our members' needs at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">What drives us every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-400">We strive for the highest standards in everything we do</p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-gray-400">Building lasting relationships and support networks</p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💡</div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">Constantly improving and adopting new methods</p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">❤️</div>
              <h3 className="text-xl font-bold text-white mb-3">Passion</h3>
              <p className="text-gray-400">Genuine love for fitness and helping others</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">Expert trainers dedicated to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500 transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 h-48 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                  {member.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div className="group text-center bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-gray-400">Expert Trainers</div>
            </div>
            <div className="group text-center bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">5</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="group text-center bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">1000+</div>
              <div className="text-gray-400">Transformations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
