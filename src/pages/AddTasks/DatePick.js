import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePick = ({ selectedDate, setSelectedDate }) => {
  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="border-slate-500 w-full border px-3 py-2"
        dateFormat={"dd/MM/yyyy"}
        isClearable={true}
        minDate={new Date()}
        // console.log(selectedDate.getFullYear());
      />
    </>
  );
};

export default DatePick;
