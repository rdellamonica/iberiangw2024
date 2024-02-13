import { React, useState, useEffect } from 'react'
import moment from 'moment'

const placeholderEvents = [
    {
        name: 'Riccardo Della Monica',
        title: 'Probing pulsars at the Galactic Center',
        start: moment('2024-03-25 09:30'),
        end: moment('2024-03-25 09:45')
    },
    {
        name: 'David Figuerelo',
        title: 'Restriction in the dark sector',
        start: moment('2024-03-25 09:45'),
        end: moment('2024-03-25 10:00')
    },
    {
        name: 'Miguel Manzano',
        title: 'Gluing of spacetimes',
        start: moment('2024-03-26 14:30'),
        end: moment('2024-03-26 14:45')
    },
    {
        name: 'David Barba',
        title: 'Neutron star crust',
        start: moment('2024-03-25 09:00'),
        end: moment('2024-03-25 09:15')
    },
    {
        name: 'Pinco Pallino',
        title: 'Titolo',
        start: moment('2024-03-25 10:00'),
        end: moment('2024-03-25 10:15')
    },
    {
        name: 'Tizio',
        title: 'Titolo',
        start: moment('2024-03-25 10:30'),
        end: moment('2024-03-25 10:45')
    },
    {
        name: 'Caio',
        title: 'Titolo',
        start: moment('2024-03-25 10:15'),
        end: moment('2024-03-25 10:30')
    },
    {
        name: 'Sempronio',
        title: 'Titolo',
        start: moment('2024-03-25 10:45'),
        end: moment('2024-03-25 11:00')
    },
    {
        name: 'Gabriel Sánchez',
        title: 'Initial data',
        start: moment('2024-03-25 11:00'),
        end: moment('2024-03-25 11:15')
    },
    {
        name: 'Duvier Suarez',
        title: 'Very weird model of black holes connected by a spring',
        start: moment('2024-03-25 11:15'),
        end: moment('2024-03-25 11:30')
    },
    {
        name: 'Mizuko Nakakata',
        title: 'Titolo',
        start: moment('2024-03-25 11:30'),
        end: moment('2024-03-25 11:45')
    },
]


function ProgramDay({ dayMoment }) {

    const [dayEvents, setDayEvents] = useState([])

    useEffect(() => {
        setDayEvents(placeholderEvents.filter((event) => event.start.isSame(dayMoment, 'd')).sort((a, b) => (a.start.isAfter(b.start) ? 1 : -1 ) ))
    }, [])

    return (
        <div className="program-day">
            <div className="day-name">{dayMoment.format('ddd D MMM')}</div>
            {dayEvents.map((event) => {
                return(
                    <div className="day-event" key = {event.name}>
                        <div className="event-name">
                            {event.name}
                        </div>
                        <div className="event-times">
                            {event.start.format('k:mm')}-{event.end.format('k:mm')}
                        </div>
                        <div className="event-title">
                            {event.title}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default function Program() {

  return (
    <div className="section" style = {{backgroundColor: '#c3c3c3', color: '#2e2e2e'}}>
        <span id="program" style = {{position: 'absolute', top: '-90px'}}></span>
        <div className="section-title">
            Program
        </div>
        <div className="program">
            <ProgramDay dayMoment = {moment('2024-03-25')}/>
            <ProgramDay dayMoment = {moment('2024-03-26')}/>
            <ProgramDay dayMoment = {moment('2024-03-27')}/>
        </div>
    </div>
  )
}
