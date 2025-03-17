import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-primary/5">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <h1 className="font-montserrat text-2xl font-bold text-dark">
            Welcome Back, <span className="text-accent">Host</span>
          </h1>
          <button className="text-dark hover:text-accent transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="font-open-sans text-dark/80">{stat.label}</p>
                  <p className="font-montserrat text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Event Management Section */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-montserrat text-xl font-bold">Your Events</h2>
                <NavLink
                  to="/create-event"
                  className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
                >
                  + New Event
                </NavLink>
              </div>
              
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-montserrat font-semibold">{event.name}</h3>
                        <p className="font-open-sans text-sm text-dark/80">
                          {event.date} • {event.guests} guests
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-accent hover:text-accent/80">
                          ✏️ Edit
                        </button>
                        <button className="text-red-500 hover:text-red-600">
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {event.type}
                      </span>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-full">
                        {event.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Guest Management Sidebar */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
            <h2 className="font-montserrat text-xl font-bold mb-6">Guest Management</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Search guests..."
                  className="w-full px-4 py-2 rounded-full border border-gray-200 focus:border-accent"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-gray-100">
                      <th className="pb-2 font-montserrat">Name</th>
                      <th className="pb-2 font-montserrat">RSVP</th>
                      <th className="pb-2 font-montserrat">Dietary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.map((guest, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 font-open-sans">{guest.name}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            guest.rsvp === 'Confirmed' ? 'bg-green-100 text-green-800' :
                            guest.rsvp === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {guest.rsvp}
                          </span>
                        </td>
                        <td className="py-3">
                          {guest.dietary.map((d, i) => (
                            <span key={i} className="mr-1 px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {d}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button className="w-full py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
                📥 Import Guests
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Placeholder Data
const stats = [
  { icon: '🎉', label: 'Total Events', value: '12', bg: 'bg-accent/10' },
  { icon: '👥', label: 'Total Guests', value: '384', bg: 'bg-primary/10' },
  { icon: '📅', label: 'Upcoming', value: '3', bg: 'bg-green-100' },
  { icon: '✅', label: 'RSVP Rate', value: '82%', bg: 'bg-yellow-100' }
]

const events = [
  { name: 'Wedding Ceremony', date: '25 Dec 2024', guests: 150, type: 'Wedding', status: 'Planning' },
  { name: 'Corporate Conference', date: '15 Jan 2025', guests: 200, type: 'Corporate', status: 'Confirmed' },
  { name: 'Birthday Party', date: '5 Jan 2025', guests: 50, type: 'Social', status: 'Completed' }
]

const guests = [
  { name: 'John Doe', rsvp: 'Confirmed', dietary: ['Vegetarian'] },
  { name: 'Jane Smith', rsvp: 'Pending', dietary: ['Gluten-Free'] },
  { name: 'Mike Johnson', rsvp: 'Declined', dietary: [] }
]

export default Dashboard