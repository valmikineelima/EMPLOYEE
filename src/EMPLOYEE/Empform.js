import './Empform.css';
import React,{useState,useContext} from 'react';
import { EmpContext } from './emp-context';
import { useDispatch } from 'react-redux';
import { empActions } from '../Store';
const Empform =(props)=>{

    //const {onSaveempData}=useContext(EmpContext);
    const dispatch=useDispatch();



    const [enteredemp_name, setEnteredemp_name]=useState('');
    const [enteredDOB, setEnteredDOB]=useState('');
    const [enteredexp, setEnteredexp]=useState('');

    const emp_nameChangeHandler =(event) =>{
        setEnteredemp_name(event.target.value);
    }
    const DOBChangeHandler =(event)=>{
        setEnteredDOB(event.target.value);
    }
    const expChangeHandler =(event)=>{
        setEnteredexp(event.target.value);
    
    }
    const SubmitHandler=(event)=>{
        event.preventDefault();
        const empData={
            emp_name : enteredemp_name,
             DOB:new Date(enteredDOB),
             exp:enteredexp
        }
        //console.log(empData);
        //props.onSaveempData(empData);
        //onSaveempData(empData);
        //dispatch({type:"ADD_EMP",payload:empData});
        dispatch(empActions.addemp(empData));

        setEnteredemp_name('');
        setEnteredDOB('');
        setEnteredexp('');

    }
    return(
        <form onSubmit={SubmitHandler}>
            <div className="new-emp__controls">
                <div className="new-emp__control">
                <label>emp_name</label>
                <input type="text" onChange={emp_nameChangeHandler} value={enteredemp_name}/>
            </div>
            <div className="new-emp__control">
                <label>DOB</label>
                <input type="date" min="2019-01-01" max="2024-12-31"  onChange={DOBChangeHandler} value={enteredDOB}/>
            </div>
            
            <div className="new-emp__control">
                <label>exp</label>
                <input type="number" max="100" step="0"  onChange={expChangeHandler} value={enteredexp}/>
            </div>
            </div>
            <div className="new-emp__controls">
                <button type="submit" >Add emp_name</button>
            </div>
            
        </form>
    );

}
export default Empform;