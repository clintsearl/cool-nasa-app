import React from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// import moment from 'moment';


const DateInput = props => (
      <div>
        <h1>Cool NASA App</h1>
        <p>Check out the featured picture of the day from NASA <br/>
        Select a date</p>
          <DatePicker 
          selected = {props.date}
          onChange = {props.changeDate}
          />
          <p></p>
        {/* So this is the old boring input that still works */}
    {/* <form onSubmit ={props.changeDate}>
         Enter A date (YYYY-MM-DD):
         <input/>
         <input type= "submit"/>

     </form> */}
      </div>
)
// I opted for react date picker instead that was more simple and fit what I needed for this application.
// moment.format('YYYY-MM-DD')
export default DateInput;
