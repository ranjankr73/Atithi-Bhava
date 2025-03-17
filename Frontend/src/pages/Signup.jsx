import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    
  }

  return (
    <section className="min-h-screen bg-primary/5 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Left Form Section */}
          <div className="p-8 md:p-12 lg:p-16">
            <NavLink 
              to="/" 
              className="font-montserrat text-2xl font-bold hover:text-accent transition-colors"
            >
              <span>atithi</span>
              <span className="text-accent">bhava</span>
            </NavLink>

            <form onSubmit={handleSubmit} className="mt-8 md:mt-12 space-y-6">
              <div className="text-center">
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-dark mb-2">
                  Create an account
                </h2>
                <p className="font-open-sans text-dark/80">
                  Sign up and get 30 days free trial
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="font-open-sans font-medium block ml-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-open-sans font-medium block ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-open-sans font-medium block ml-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-colors"
              >
                Get Started
              </button>

              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <p className="font-open-sans text-dark/80">
                  Already a member?{' '}
                  <NavLink
                    to="/signin"
                    className="text-accent font-semibold hover:underline"
                  >
                    Sign in
                  </NavLink>
                </p>
                <NavLink
                  to="/privacy"
                  className="text-dark/80 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </NavLink>
              </div>
            </form>
          </div>

          {/* Right Image Section */}
          <div className="hidden md:block relative h-full min-h-[400px]">
            <img
              src="\images\Café Gathering.jpeg"
              alt="Café Gathering"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup