import React from 'react'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <section className="min-h-screen bg-primary/5 py-32">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-dark mb-6">
            Elevate Your <span className="text-accent">Event Experience</span>
          </h1>
          <p className="font-open-sans text-lg text-dark/80 mb-8">
            Comprehensive solutions for seamless event management from conception to execution
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
                <div className="text-accent text-4xl mb-6">{service.icon}</div>
                <h3 className="font-montserrat text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="font-open-sans text-dark/80 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 font-open-sans text-dark/80">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.7 7.3c.4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 6.3-6.3c.4-.4 1-.4 1.4 0z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          Why <span className="text-accent">Atithi Bhava?</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-accent text-4xl font-bold mb-4">{stat.value}</div>
              <h3 className="font-open-sans font-semibold text-dark/80">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            Flexible <span className="text-accent">Pricing Plans</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`p-8 rounded-xl ${plan.featured ? 'border-2 border-accent' : 'border border-gray-200'}`}>
                <h3 className="font-montserrat text-2xl font-semibold mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-dark">₹{plan.price}</span>
                  <span className="text-dark/60">/event</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 font-open-sans text-dark/80">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.7 7.3c.4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 6.3-6.3c.4-.4 1-.4 1.4 0z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <NavLink
                  to="/signup"
                  className={`w-full block text-center py-3 rounded-full font-semibold ${
                    plan.featured 
                      ? 'bg-accent text-white hover:bg-accent/90' 
                      : 'bg-primary/10 text-dark hover:bg-primary/20'
                  }`}
                >
                  Choose Plan
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="bg-accent rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Events?
          </h2>
          <NavLink
            to="/signup"
            className="inline-block px-8 py-3 bg-white text-accent rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </NavLink>
        </div>
      </div>
    </section>
  )
}

// Placeholder Data
const services = [
  {
    icon: '🎉',
    title: "Full Event Planning",
    description: "End-to-end management for stress-free celebrations",
    features: [
      "Venue selection & booking",
      "Vendor coordination",
      "Timeline management",
      "Budget tracking"
    ]
  },
  {
    icon: '📋',
    title: "Guest Management",
    description: "Streamlined attendee coordination solutions",
    features: [
      "RSVP tracking",
      "Seating arrangements",
      "Dietary preferences",
      "Digital invitations"
    ]
  },
  {
    icon: '💰',
    title: "Budget Planning",
    description: "Financial control for perfect events",
    features: [
      "Cost estimation",
      "Expense tracking",
      "Vendor payments",
      "Real-time analytics"
    ]
  }
]

const stats = [
  { value: "10K+", label: "Successful Events" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Premium Venues" },
  { value: "24/7", label: "Support Available" }
]

const plans = [
  {
    name: "Starter",
    price: "4999",
    features: [
      "Up to 100 guests",
      "Basic event tracking",
      "Email support",
      "3 active events"
    ]
  },
  {
    name: "Professional",
    price: "8999",
    featured: true,
    features: [
      "Unlimited guests",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "10 active events"
    ]
  },
  {
    name: "Enterprise",
    price: "Contact",
    features: [
      "Custom solutions",
      "Dedicated manager",
      "API access",
      "Unlimited events",
      "Premium support"
    ]
  }
]

export default Services