import React from "react";
import { format } from "date-fns";
import "./DayButton.css";

const DayButton = ({ day, isCurrentMonth, isToday, isSelected, isInRange, onClick }) => {
  const handleClick = () => {
    if (isCurrentMonth) onClick(day);
  };

  const className = [
    "day-button",
    isCurrentMonth ? "" : "non-current",
    isSelected ? "selected" : "",
    isInRange ? "in-range" : "",
    isToday ? "today" : "",
  ].join(" ");

  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={!isCurrentMonth}
      title={!isCurrentMonth ? "不允許" : ""}
    >
      {format(day, "d")}日
    </button>
  );
};

export default DayButton;