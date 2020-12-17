import ReactMapGL, { Marker } from 'react-map-gl';

import Markers from './MarkersComponent';

const MapboxMap = ({viewport, events,updateViewport})=>{

    return(
    <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewport} 
        onViewportChange={viewports=>updateViewport(viewports)}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
    >
        <Markers eventData= {events}/>
        
    </ReactMapGL>)


}


export default MapboxMap;