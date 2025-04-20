import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import MonthGrid from "./MonthGrid";
import "./Calendar.css";
import {
  isSameDay,
  isAfter,
  isSameMonth,
} from "date-fns";

const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const currentMonth = new Date(); // 固定為 2022年7月

  const handleDateClick = (day) => {
    if (!isSameMonth(day, currentMonth)) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (isSameDay(day, startDate) || isAfter(day, startDate)) {
      setEndDate(day);
    } else {
      setStartDate(day);
      setEndDate(null);
    }
  };

  return (
    <div className="calendar-wrapper">
      <CalendarHeader currentMonth={currentMonth} />
      <MonthGrid
        currentMonth={currentMonth}
        startDate={startDate}
        endDate={endDate}
        handleDateClick={handleDateClick}
      />
    </div>
  );
};

export default Calendar;