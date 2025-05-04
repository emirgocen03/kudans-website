'use client';

import { useState } from 'react';

// Define event type interface
interface CalendarEvent {
  date: Date;
  title: string;
  type: 'festival' | 'class' | 'performance' | 'practice';
}

const EventsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Get the start of the week (Sunday)
  const getWeekStart = (date: Date): Date => {
    const newDate = new Date(date);
    const day = newDate.getDay(); // 0 is Sunday
    newDate.setDate(newDate.getDate() - day);
    return newDate;
  };
  
  // Generate calendar data
  const generateWeekCalendar = () => {
    const startOfWeek = getWeekStart(currentDate);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const weekData = [];
    
    // Generate dates for the week
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      
      // Get events for this day
      const dayEvents = getEventsForDate(date);
      
      weekData.push({
        date,
        events: dayEvents,
        isToday: new Date().toDateString() === date.toDateString()
      });
    }
    
    return weekData;
  };
  
  // Get events for a specific date
  const getEventsForDate = (date: Date): CalendarEvent[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    
    // Check if the date is after June 1st, 2023
    const june1st2025 = new Date(2025, 5, 1); // June is month 5 (0-indexed)
    if (date >= june1st2025) {
      return []; // No events after June 1st
    }
    
    // Events for specific dates (like festivals)
    const specificEvents: CalendarEvent[] = [];
    
    // Check for KUDANS Fest (May 6-8)
    if (month === 4 && (day === 6 || day === 7 || day === 8)) { // May is month 4 (0-indexed)
      specificEvents.push({
        date: new Date(year, month, day),
        title: 'KUDANS Fest 25\'',
        type: 'festival'
      });
      
      // Return only the festival for these days - no other events
      return specificEvents;
    }
    
    // Events based on day of week
    const weekdayEvents: CalendarEvent[] = [];
    
    // Weekly Events - Mondays
    if (dayOfWeek === 1) {
      weekdayEvents.push(
        { date: new Date(date), title: 'Int. Ballroom L1 (20:00)', type: 'class' },
        { date: new Date(date), title: 'Int. Ballroom L2 (21:30)', type: 'class' },
        { date: new Date(date), title: 'Social Latin Practice (20:30)', type: 'practice' }
      );
    }
    
    // Weekly Events - Tuesdays
    else if (dayOfWeek === 2) {
      weekdayEvents.push(
        { date: new Date(date), title: 'Modern GG (17:30)', type: 'performance' },
        { date: new Date(date), title: 'HipHop L1 (20:00)', type: 'class' },
        { date: new Date(date), title: 'HipHop GG (21:15)', type: 'performance' }
      );
    }
    
    // Weekly Events - Wednesdays
    else if (dayOfWeek === 3) {
      weekdayEvents.push(
        { date: new Date(date), title: 'Tango L1/L2 (18:00)', type: 'class' },
        { date: new Date(date), title: 'Tango GG (20:00)', type: 'performance' },
        { date: new Date(date), title: 'Swing L2 (20:00)', type: 'class' },
        { date: new Date(date), title: 'Swing GG (21:30)', type: 'performance' },
        { date: new Date(date), title: 'HipHop Practice (18:00)', type: 'practice' }
      );
    }
    
    // Weekly Events - Thursdays
    else if (dayOfWeek === 4) {
      weekdayEvents.push(
        { date: new Date(date), title: 'Social Latin L2 (19:00)', type: 'class' },
        { date: new Date(date), title: 'Social Latin GG (20:00)', type: 'performance' },
        { date: new Date(date), title: 'Modern Technique (18:00)', type: 'class' },
        { date: new Date(date), title: 'Modern Practice (20:00)', type: 'practice' }
      );
    }
    
    // Weekly Events - Fridays
    else if (dayOfWeek === 5) {
      weekdayEvents.push(
        { date: new Date(date), title: 'Swing Practice (18:00)', type: 'practice' }
      );
    }
    
    // Weekly Events - Sundays
    else if (dayOfWeek === 0) {
      weekdayEvents.push(
        { date: new Date(date), title: 'Tango Practice (15:00)', type: 'practice' },
        { date: new Date(date), title: 'Int. Ballroom Practice (18:00)', type: 'practice' }
      );
    }
    
    return [...specificEvents, ...weekdayEvents];
  };
  
  const weekData = generateWeekCalendar();
  
  const previousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };
  
  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };
  
  const toToday = () => {
    setCurrentDate(new Date());
  };
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Format date for display (e.g., "May 15")
  const formatDate = (date: Date): string => {
    return `${monthNames[date.getMonth()].substring(0, 3)} ${date.getDate()}`;
  };
  
  const startOfWeek = getWeekStart(currentDate);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  
  const weekRange = `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}, ${currentDate.getFullYear()}`;
  
  return (
    <div className="calendar-container bg-gray-900 rounded-lg p-6 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={previousWeek}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors text-white"
          aria-label="Previous week"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white mb-1">
            {weekRange}
          </h2>
          <button 
            onClick={toToday} 
            className="text-sm bg-blue-700 hover:bg-blue-800 text-white py-1 px-3 rounded transition-colors"
          >
            Today
          </button>
        </div>
        
        <button 
          onClick={nextWeek}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors text-white"
          aria-label="Next week"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="weekly-calendar">
        <div className="grid grid-cols-7 gap-2">
          {weekData.map((day, index) => (
            <div key={index} className="day-column">
              <div className={`text-center p-2 mb-2 rounded ${
                day.isToday 
                  ? 'bg-blue-700 text-white font-bold' 
                  : 'bg-gray-800 text-gray-200'
              }`}>
                <div className="text-sm uppercase">{dayNames[day.date.getDay()].substring(0, 3)}</div>
                <div className="text-lg">{day.date.getDate()}</div>
              </div>
              
              <div className={`min-h-[300px] p-2 rounded bg-gray-800 space-y-2 ${
                day.isToday ? 'ring-2 ring-blue-500' : ''
              }`}>
                {day.events.map((event, idx) => (
                  <div 
                    key={idx}
                    className={`text-xs p-2 rounded ${
                      event.type === 'festival' ? 'bg-pink-800 text-pink-100' :
                      event.type === 'class' ? 'bg-blue-800 text-blue-100' :
                      event.type === 'performance' ? 'bg-purple-800 text-purple-100' :
                      event.type === 'practice' ? 'bg-green-800 text-green-100' :
                      'bg-gray-700 text-gray-100'
                    }`}
                  >
                    {event.title}
                  </div>
                ))}
                
                {day.events.length === 0 && (
                  <div className="text-xs text-gray-400 italic text-center pt-3">
                    No events
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-pink-800 mr-2"></div>
          <span className="text-sm text-gray-300">Festival</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-800 mr-2"></div>
          <span className="text-sm text-gray-300">Class</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-800 mr-2"></div>
          <span className="text-sm text-gray-300">Performance Team (GG)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-800 mr-2"></div>
          <span className="text-sm text-gray-300">Practice</span>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar; 