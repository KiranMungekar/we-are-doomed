import ReactMapGL from 'react-map-gl';

const MapboxMap = (props)=>{



    return(
    <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...props.viewport} 
        onViewportChange={viewport=>props.updateViewport(viewport)}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
     >
          Disaster map
    </ReactMapGL>)


}


export default MapboxMap;