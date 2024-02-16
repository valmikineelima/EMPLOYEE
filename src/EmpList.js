import Employee from './employee';
const EmpList = props =>{
    if(props.items.length===0){
        return <h3 className='emp-list__fallback'>Found No  Employees</h3>
    }
    return(
        <ul className='emp-list'>
            {
                props.items.map((emp)=>(<Employee key={emp.id} emp_name={emp.emp_name} exp={emp.exp} DOB ={emp.DOB}/>))
                
            }
        </ul>
    )

}
export default EmpList;