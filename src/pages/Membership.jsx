import { Link } from 'react-router-dom'

export default function Membership() {
  const plans = [
    {
      name: "Basic",
      price: "2,499",
      period: "month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "Mobile app access",
        "Open gym hours"
      ],
      color: "gray",
      popular: false
    },
    {
      name: "Premium",
      price: "4,999",
      period: "month",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Free guest passes (2/month)",
        "Nutrition consultation",
        "Priority booking",
        "Towel service"
      ],
      color: "orange",
      popular: true
    },
    {
      name: "Elite",
      price: "7,999",
      period: "month",
      features: [
        "Everything in Premium",
        "4 personal training sessions",
        "Custom meal plans",
        "Body composition analysis",
        "Unlimited guest passes",
        "Exclusive member events",
        "24/7 gym access"
      ],
      color: "purple",
      popular: false
    }
  ]

  const faqs = [
    { q: "Can I cancel anytime?", a: "Yes! No long-term contracts. Cancel anytime with no fees." },
    { q: "Is there a free trial?", a: "Absolutely! Get 7 days free to try any membership plan." },
    { q: "Do you offer student discounts?", a: "Yes, we offer 20% off for students with valid ID." },
    { q: "Can I freeze my membership?", a: "Yes, you can freeze for up to 3 months per year." }
  ]

  return (
    <div className="pt-16 bg-gray-950">
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-orange-500/20 border border-orange-500 rounded-full text-orange-500 font-semibold">
            🎉 Special Offer: 7 Days Free Trial
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Membership <span className="text-orange-500">Plans</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the perfect plan for your fitness journey. All plans include access to our world-class facilities.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-900 rounded-2xl border-2 ${
                plan.popular 
                  ? 'border-orange-500 transform scale-105 shadow-2xl shadow-orange-500/20' 
                  : 'border-gray-800 hover:border-orange-500'
              } p-8 transition-all duration-300 hover:transform hover:scale-105`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-orange-500">₹{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-orange-500 mt-1 text-xl">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`block w-full text-center py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-500/50' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Flexible Payment Options</h2>
            <p className="text-xl text-gray-400">We make it easy to get started</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-800 p-8 rounded-xl text-center border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💳</div>
              <h3 className="text-xl font-bold text-white mb-3">No Commitment</h3>
              <p className="text-gray-400">Cancel anytime, no questions asked</p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-xl text-center border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎁</div>
              <h3 className="text-xl font-bold text-white mb-3">Free Trial</h3>
              <p className="text-gray-400">7-day free trial for new members</p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-xl text-center border border-gray-700 hover:border-orange-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Save More</h3>
              <p className="text-gray-400">Get 2 months free with annual plans</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Got questions? We've got answers</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition">
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help you choose the right plan</p>
          <Link to="/contact" className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  )
}
