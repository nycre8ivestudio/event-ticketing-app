'use client'

import { useState, useEffect } from 'react'
import EventsCard from '../EventsCard/EventsCard'

const EventsGrid = ({ activeCategory }) => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api-server.krontiva.africa/api:BnSaGAXN/Get_All_Event')
      .then(response => response.json())
      .then(data => {
        setEvents(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to load events')
        setLoading(false)
      })
  }, [])

  const filteredEvents = events.filter(event => 
    activeCategory === 'All' ? true : event.Event_Category === activeCategory
  );

  if (loading) return <div className="text-center py-10">Loading events...</div>
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {filteredEvents.map((event, index) => (
          <EventsCard key={event.id || index} event={event} />
        ))}
      </div>
    </div>
  )
}

export default EventsGrid