import ReactMapGL, { Marker } from 'react-map-gl';

import Markers from './MarkersComponent';
import SearchComponent from './SearchBoxComponent';

const MapboxMap = ({viewport, events,updateViewport})=>{

    return(
    <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewport} 
        onViewportChange={viewports=>updateViewport(viewports)}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
    >
        <SearchComponent />
        <Markers eventData= {events}/>
        
    </ReactMapGL>)


}


export default MapboxMap;