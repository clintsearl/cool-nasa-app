import React from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// import moment from 'moment';


const DateInput = props => (
      <div>
        <p class ='label'>Select a date</p>
          <DatePicker 
          selected = {props.date}
          onChange = {props.changeDate}
          />

        {/* So this is the old boring input that still works */}

    {/* <form onSubmit ={props.changeDate}>
         Enter A date (YYYY-MM-DD):
         <input/>
         <input type= "submit"/>

     </form> */}


      </div>
)
// moment.format('YYYY-MM-DD')
export default DateInput;
