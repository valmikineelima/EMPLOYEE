import { useState,useContext } from 'react';
import Empfilter from './Empfilter';
import Employee from './employee';
import './Emps.css';
import EmpList from './EmpList';
import { EmpContext } from './emp-context';
import {useSelector } from 'react-redux';


const Emps =(props)=>{

    //const empCtx=useContext(EmpContext);
    const items=useSelector(state => state.items)
    const[filteredYear,setFilteredYear]=useState("2020");
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }
    const filterEmps=items.filter(emp=>{
        return emp.DOB.getFullYear().toString() === filteredYear;
    });
    
    
    return(
         
             <div className="Emps">
               
               <Empfilter  selected={filteredYear} onChangeFilter={filterChangeHandler}/>
               <EmpList items={filterEmps}/>
               </div>
 
         
    );
}
export default Emps;