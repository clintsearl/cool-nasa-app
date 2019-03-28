import React from 'react';


const DateInput = props => (
      <div>
          {/* <DatePicker 
          selected = {props.state.date}
          onChange = {this.handleChange}/> */}

    <form onSubmit ={props.changeDate}>
         Enter A date (YYYY-MM-DD):
         <input/>
         <input type= "submit"/>

     </form>
      </div>
)

export default DateInput;
