import Employeedob from "./employeedate";
import './employee.css';
import React,{useState} from 'react';
const Employee = (props) => {
   // let emp_name=props.emp_name;
   const[emp_name, setEmp_name]=useState(props.emp_name);
    

    const clickHandler =(props)=>{
        console.log('clicked..');
        setEmp_name('changed..');
    }
    
       
    return(
            <li>
            <div>
           
                    <div className="Emp-details"> 
                      <div className="Emp-details-doj">
                          <Employeedob DOB={props.DOB}/>
                        </div>
                       <div>{emp_name}</div>
                       <div className="Emp-details-exp">{props.exp}</div>
                       
                    </div>
                    
            </div>
            </li>
              
    );
}
export default  Employee;