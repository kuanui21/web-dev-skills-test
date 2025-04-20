import React from "react";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, isAfter, isBefore, isToday } from "date-fns";
import DayButton from "./DayButton";
import "./MonthGrid.css";

const MonthGrid = ({ currentMonth, startDate, endDate, handleDateClick }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);
  const days = [];
  let day = calendarStart;

  while (day <= calendarEnd) {
    days.push(day);
    day = addDays(day, 1);
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    const weekDays = days.slice(i, i + 7);
    weeks.push(
      <div key={i} className="week">
        {weekDays.map((weekDay) => (
          <DayButton
            key={weekDay.toISOString()}
            day={weekDay}
            isCurrentMonth={isSameMonth(weekDay, currentMonth)}
            isToday={isToday(weekDay)}
            isSelected={(startDate && isSameDay(weekDay, startDate)) || (endDate && isSameDay(weekDay, endDate))}
            isInRange={startDate && endDate && (isAfter(weekDay, startDate) && isBefore(weekDay, endDate))}
            onClick={handleDateClick}
          />
        ))}
      </div>
    );
  }

  return <div className="calendar-grid">{weeks}</div>;
};

export default MonthGrid;