import { MapState } from "react-map-gl"

import { Marker } from 'react-map-gl';
const Markers =({eventData})=>{

    const eventMap= eventData.map(eve=>{
        if(eve.categories[0].id === 'wildfires'){
           return (
               <Marker key={eve.id} latitude={eve.geometry[0].coordinates[1]} longitude={eve.geometry[0].coordinates[0]}><span className="markers">.</span></Marker>
           )
        }
        return null;
   });
   //console.log(eventMap);
   return eventMap;

}

export default Markers;
