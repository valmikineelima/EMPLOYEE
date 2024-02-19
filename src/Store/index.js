import {createStore} from 'redux';
import { createSlice,configureStore}from '@reduxjs/toolkit';

const  DUMP_emp= [
    {id:'1', emp_name :'valmiki', exp: 2, DOB: new Date(2022,11,11)},
    {id:'2', emp_name :'neelima', exp: 1, DOB: new Date(2019,12,10)},
    {id:'3', emp_name :'Ravi', exp: 9, DOB: new Date(2023,2,24)},
    {id:'4', emp_name :'madhu', exp: 19, DOB: new Date(2024,12,6)},
    {id:'5', emp_name :'bujji', exp: 11, DOB: new Date(2021,1,27)},
]
const initialState = {items:DUMP_emp}
const empSlice = createSlice({
    name:'emp',
    initialState: initialState,
    reducers:{
        addemp(state,action){
            const empData={
                ...action.payload,
                id:Math.random().toString()
            };
            state.items.push(empData)
            

        },
        removeemp(state,action){

        }
    }

});
export const sendempData=(empData)=>{
    return async(dispatch)=>{
     const sendRequest =async () =>{
        const response =await fetch('https://triconinfotech-39de6-default-rtdb.firebaseio.com/Employee.json',{
            method:'put',
            body:JSON.stringify(empData),
            });
            if(!response.ok){
                throw new Error("sending expense data failed");
            }
     };
     try{
        await sendRequest()
     }catch(error){
        console.log(error);
     }
    }
}

const empStore = configureStore({
    reducer:empSlice.reducer

});

export default empStore;
export const empActions =empSlice.actions;
