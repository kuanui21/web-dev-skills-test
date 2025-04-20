import React from "react";
import { format } from "date-fns";
import "./CalendarHeader.css";

const CalendarHeader = ({ currentMonth }) => (
  <div className="calendar-header">
    <button className="nav-btn" disabled>
      ‹
    </button>
    <div className="month-label">{format(currentMonth, "yyyy年M月")}</div>
    <button className="nav-btn" disabled>
      ›
    </button>
  </div>
);

export default CalendarHeader;