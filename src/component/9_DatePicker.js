import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerd = () => {
  
  const [selectedDate, setselectedDate] = useState(null)

  return (
    <div className="Datepicker">
      <DatePicker
      selected={selectedDate}
      onChange={date => setselectedDate(date)} 
      dateFormat='dd/MM/yyyy'
    //   minDate={new Date()}
    //   maxDate={new Date()}
    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
    isClearable
    showMonthDropdown
    showYearDropdown
    scrollableMonthYearDropdown
    placeholderText={'Please Enter Date'}
      />
    </div>
  )
}

export default DatePickerd
