import { createContext,useReducer,useState } from 'react';
export const EmpContext=createContext({
    items:[],
    onSaveempData:() =>{},
});

function empReducer(state,action){
    const updateemp=[...state]
    if(action.type === 'ADD_EMP'){
        const empData={
            ...action.payload,
            id:Math.random().toString()
        };
        updateemp.push(empData)
    }
    if(action.type === 'REMOVE_EMP'){
        //logic to remove emp
    }
    return updateemp;

}
export default function EmpContextProvider({children}){
    const  DUMP_emp= [
        {id:'1', emp_name :'valmiki', exp: 2, DOB: new Date(2022,11,11)},
        {id:'2', emp_name :'neelima', exp: 1, DOB: new Date(2019,12,10)},
        {id:'3', emp_name :'Ravi', exp: 9, DOB: new Date(2023,2,24)},
        {id:'4', emp_name :'madhu', exp: 19, DOB: new Date(2024,12,6)},
        {id:'5', emp_name :'bujji', exp: 11, DOB: new Date(2021,1,27)},
    ]

    const [emp,dispatch]=useReducer(empReducer,DUMP_emp);
    //const [emp,setEmp]=useState(DUMP_emp);
    const addempHandler=emp=>{
        dispatch(
            {
                type:'ADD_EMP',
                payload:emp
            }
        )

    }
    
   
    const contextValue={
        items:emp,
        onSaveempData:addempHandler
       };
       return <EmpContext.Provider value={contextValue}>
        {children}
       </EmpContext.Provider>


}