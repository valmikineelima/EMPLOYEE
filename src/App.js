import logo from './logo.svg';
import './App.css';
import Employee from './employee';
import Emps from './Emps';
import NewEmps from './NewEmps';
import React,{useState} from 'react';
import Empform from './Empform';
import { EmpContext } from './emp-context';
import EmpContextProvider from './emp-context';

  const App = () => {
    

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
