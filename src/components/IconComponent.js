import { IconContext } from "react-icons";
import { WiFire,WiFlood, WiStormWarning, WiEarthquake,WiVolcano} from 'react-icons/wi';
import {FaExclamationTriangle} from 'react-icons/fa';

import {DROUGHT,FLOOD,EARTHQUAKE,LANDSLIDE,S_STORM,VOLCANO,WILDFIRE } from '../utils/categories';
 


const IconComponent = ({id})=>{
    console.log(id);

    const whichIcon=(indicator)=>{
        switch(indicator){
            case WILDFIRE:
                return <WiFire />
                
            case VOLCANO:
                return <WiVolcano />
    
            case EARTHQUAKE:
                return <WiEarthquake/>     
       
            case S_STORM:
                return <WiStormWarning />
    
            case FLOOD:
                return <WiFlood />

            default:
                return <FaExclamationTriangle/>
        }
    }
    


    return(
        
    <IconContext.Provider  value={{color:'red', size:'2em'}}>
        {whichIcon(id)}
    </IconContext.Provider>
    )
}

export default IconComponent;