import { IconContext } from "react-icons";
import { WiFire} from 'react-icons/wi';


const IconComponent = ()=>{
    return(
    <IconContext.Provider  value={{color:'red', size:'2em'}}>
        <WiFire />
    </IconContext.Provider>
    )
}

export default IconComponent;