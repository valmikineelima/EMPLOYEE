import logo from './logo.svg';
import './App.css';
import Employee from './EMPLOYEE/employee';
import Emps from './EMPLOYEE/Emps';
import NewEmps from './EMPLOYEE/NewEmps';
import React,{useEffect, useState} from 'react';
import Empform from './EMPLOYEE/Empform';
import { EmpContext } from './EMPLOYEE/emp-context';
import EmpContextProvider from './EMPLOYEE/emp-context';
import { useDispatch,useSelector } from 'react-redux';
import { sendempData } from './Store';

  const App = () => {
    const items = useSelector(state => state.items);
    const dispatch =useDispatch();
    useEffect(
      ()=> {
        dispatch(sendempData(items));
      },
      [items,dispatch]

    )
    

    return (
      <EmpContextProvider>
      <div>
        <NewEmps >
        <Empform/>
        </NewEmps>
        
        <Emps/>
  
      </div>
      </EmpContextProvider>
    );
  
}


export default App;
