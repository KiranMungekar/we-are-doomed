import React ,{ useEffect, useState } from 'react';
import MapComponent from './MapComponent';

const HomeComponent = ()=>{
    
    const [viewport , setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    const [events, setEvents] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        updateEvents();
    },[])

    const updateEvents= async()=>{
        const res= await fetch(process.env.REACT_APP_NASA_API);
        const {events} = await res.json();
        setEvents(events);
     //   console.log(events);
        setLoading(false);
    }


    const _updateViewport = newViewport =>{ 
        setViewport(newViewport);
    }

    if(!loading){
        return(
            <MapComponent  viewport={viewport} events={events} updateViewport={_updateViewport} />
        )
    }else{
        return(<div>LOADING</div>)
    }
    
}

export default HomeComponent;