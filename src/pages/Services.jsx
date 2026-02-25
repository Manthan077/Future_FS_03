export default function Services() {
  const services = [
    {
      icon: "💪",
      title: "Strength Training",
      description: "Build muscle mass with free weights, machines, and cable systems. Perfect for bodybuilding and powerlifting.",
      features: [
        "Free weights and Olympic barbells",
        "Cable machines and Smith machines",
        "Power racks and squat stations",
        "Dumbbells up to 50kg",
        "Professional spotting available"
      ],
      color: "orange"
    },
    {
      icon: "🏃",
      title: "Cardio Zone",
      description: "State-of-the-art cardio equipment to improve cardiovascular health and burn calories effectively.",
      features: [
        "Treadmills with entertainment screens",
        "Elliptical cross-trainers",
        "Stationary and spin bikes",
        "Rowing machines",
        "Stair climbers and steppers"
      ],
      color: "blue"
    },
    {
      icon: "🧘",
      title: "Yoga & Aerobics",
      description: "Dedicated studio for yoga, aerobics, and flexibility training with expert instructors.",
      features: [
        "Daily yoga sessions",
        "Aerobics classes",
        "Zumba and dance fitness",
        "Stretching and mobility work",
        "Meditation and breathing"
      ],
      color: "purple"
    },
    {
      icon: "🥊",
      title: "Combat Training",
      description: "Learn boxing, kickboxing, and MMA techniques while getting an intense full-body workout.",
      features: [
        "Heavy bag and speed bag",
        "Boxing ring available",
        "Pad work with trainers",
        "Self-defense techniques",
        "Combat fitness classes"
      ],
      color: "red"
    },
    {
      icon: "👥",
      title: "Personal Training",
      description: "One-on-one coaching with certified trainers to achieve your specific fitness goals faster.",
      features: [
        "Customized workout plans",
        "Form correction and technique",
        "Progress tracking and assessment",
        "Nutrition guidance included",
        "Flexible scheduling"
      ],
      color: "green"
    },
    {
      icon: "🍎",
      title: "Nutrition Coaching",
      description: "Expert diet planning and nutrition advice to complement your training and maximize results.",
      features: [
        "Personalized meal plans",
        "Macro and calorie calculations",
        "Supplement recommendations",
        "Weekly progress check-ins",
        "Indian diet-friendly options"
      ],
      color: "yellow"
    },
    {
      icon: "🏋️",
      title: "Functional Training",
      description: "Improve everyday movement patterns with functional exercises and equipment.",
      features: [
        "TRX suspension training",
        "Battle ropes and kettlebells",
        "Medicine balls and slam balls",
        "Agility ladder and cones",
        "Core strengthening"
      ],
      color: "pink"
    },
    {
      icon: "🚴",
      title: "Spin Studio",
      description: "High-energy indoor cycling classes with motivating music and expert instructors.",
      features: [
        "Premium spin bikes",
        "Group cycling classes",
        "Interval training sessions",
        "Calorie-burning workouts",
        "Beginner to advanced levels"
      ],
      color: "indigo"
    }
  ]

  const colorClasses = {
    orange: "from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 shadow-orange-500/20",
    blue: "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-blue-500/20",
    purple: "from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 shadow-purple-500/20",
    red: "from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 shadow-red-500/20",
    green: "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-green-500/20",
    yellow: "from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 shadow-yellow-500/20",
    pink: "from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 shadow-pink-500/20",
    indigo: "from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 shadow-indigo-500/20"
  }

  return (
    <div className="pt-16 bg-gray-950">
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-orange-500">Services</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to achieve your fitness goals at Max Fitness Pro, Mohali's premier fitness destination.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`group bg-gradient-to-br ${colorClasses[service.color]} p-8 rounded-xl text-white transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl`}>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg mb-6 text-white/90">{service.description}</p>
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-lg">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white/80 text-xl">✓</span>
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Additional Benefits</h2>
            <p className="text-xl text-gray-400">More reasons to choose LeadForge Fitness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🚿</div>
              <h3 className="text-2xl font-bold text-white mb-3">Premium Facilities</h3>
              <p className="text-gray-400">Clean locker rooms, showers, and changing areas with 24/7 security</p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🅿️</div>
              <h3 className="text-2xl font-bold text-white mb-3">Free Parking</h3>
              <p className="text-gray-400">Ample parking space available for members at TDI Market</p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎵</div>
              <h3 className="text-2xl font-bold text-white mb-3">Great Atmosphere</h3>
              <p className="text-gray-400">Motivating music and supportive community environment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.3)'}}>Choose a membership plan that works for you</p>
          <a href="/membership" className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
            View Membership Plans →
          </a>
        </div>
      </section>
    </div>
  )
}
