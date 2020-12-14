import React ,{ useEffect, useState } from 'react';
import MapComponent from './MapComponent';

const HomeComponent = ()=>{
    
    const [viewport , setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11
    });

    const [events, setEvents] = useState(null);

    useEffect(()=>{
        updateEvents();
    },[])

    const updateEvents= async()=>{
        const res= await fetch(process.env.REACT_APP_NASA_API);
        const {events} = await res.json();
        setEvents(events);
        console.log(events);
    }


    const _updateViewport = newViewport =>{ 
        setViewport(newViewport);
    }

    return(
        <MapComponent  viewport={viewport} events={events} updateViewport={_updateViewport} />
    )
}

export default HomeComponent;