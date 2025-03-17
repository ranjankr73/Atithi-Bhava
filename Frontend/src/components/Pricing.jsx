import React from 'react'
import { NavLink } from 'react-router-dom'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      features: [
        "Up to 100 guests",
        "Basic analytics",
        "Email support",
        "3 active events"
      ]
    },
    {
      name: "Professional",
      price: "79",
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
      price: "199",
      features: [
        "Unlimited everything",
        "Dedicated account manager",
        "SLA agreement",
        "Custom integrations"
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          Simple <span className="text-accent">Pricing</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl ${plan.featured ? 'bg-white shadow-2xl border-2 border-accent' : 'bg-white shadow-lg'}`}
            >
              <h3 className="font-montserrat text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold text-dark">${plan.price}</span>
                <span className="text-dark/60">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.7 7.3c.4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 6.3-6.3c.4-.4 1-.4 1.4 0z"/>
                    </svg>
                    <span className="font-open-sans text-dark/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <NavLink
                to="/signup"
                className={`w-full block text-center py-3 rounded-lg transition-colors ${
                  plan.featured 
                    ? 'bg-accent text-white hover:bg-accent/90' 
                    : 'bg-primary/10 text-dark hover:bg-primary/20'
                }`}
              >
                Get Started
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing