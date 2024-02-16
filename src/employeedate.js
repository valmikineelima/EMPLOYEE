import './employeedate.css'
const Employeedob = (props) => {
    const month = props.DOB.toLocaleString('en-US', {month:"long"});
    const day = props.DOB.toLocaleString('en-US',{day:"2-digit"});
    const year = props.DOB.getFullYear();

    return(

        <div>
            <div className='employee-date'>
                    <div className='employee-date_month'>{month}</div>
                    <div className='employee-date_year'>{year}</div>
                    <div className='employee-date_day'>{day}</div>
            </div>
        </div>
    );
}
export default Employeedob;
