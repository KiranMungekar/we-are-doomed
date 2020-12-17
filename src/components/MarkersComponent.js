

import { Marker } from 'react-map-gl';
import IconComponent from './IconComponent';

const Markers =({eventData})=>{

    const eventMap= eventData.map(eve=>{
        
           return (
                <Marker key={eve.id} latitude={eve.geometry[0].coordinates[1]} longitude={eve.geometry[0].coordinates[0]}>
                  <IconComponent />
                </Marker>
           )
        
        return null;
   });
   //console.log(eventMap);
   return eventMap;

}

export default Markers;
