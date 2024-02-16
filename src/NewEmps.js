import Empform from "./Empform";
import './NewEmps.css'
const NewEmps = ({children})=>{
    return(
        <div className="new-emp">
            {children}
        </div>

    );

}
export default NewEmps;