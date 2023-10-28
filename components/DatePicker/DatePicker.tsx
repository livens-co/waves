"use client";

import { useEffect, useMemo, useState } from "react";
import "./style.scss";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useGlobalContext } from "@/app/context/store";

const DatePicker = () => {
  const today = new Date();

  const { date, setDate } = useGlobalContext();
  // const dateObj = new Date(date); // Parse the date string into a Date object
  const dateObj = useMemo(() => new Date(date), [date]); 

  const [month, setMonth] = useState(dateObj.getMonth());
  const [year, setYear] = useState(dateObj.getFullYear());


  // const [month, setMonth] = useState(date.getMonth());
  // const [year, setYear] = useState(date.getFullYear());

  const getDaysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  const daysInMonth = getDaysInMonth(month, year);
  const startDay = (new Date(year, month, 1).getDay() - 1 + 7) % 7;

  const isPastMonth =
    year < today.getFullYear() ||
    (year === today.getFullYear() && month <= today.getMonth());

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  // const handleDateChange = (newDate: Date | ((prevDate: Date) => Date)) => {
  //   setDate(newDate as Date);
  // };
  const handleDateChange = (newDate: Date) => {
    // Format the new date as a string and update the context
    const newDateString = newDate.toISOString();
    setDate(newDateString);
  };

  // useEffect(() => {
  //   setMonth(date.getMonth());
  //   setYear(date.getFullYear());
  // }, [date]);
  useEffect(() => {
    setMonth(dateObj.getMonth());
    setYear(dateObj.getFullYear());
  }, [dateObj]);

  console.log(dateObj)

  return (
    <div className="datePicker">
      <div className="header">
        <button disabled={isPastMonth} onClick={prevMonth}>
          <ArrowBackIosNewRoundedIcon />
        </button>
        <div className="date">
          {new Date(year, month).toLocaleDateString("default", {
            month: "long",
          })}{" "}
          {year}
        </div>
        <button onClick={nextMonth}>
          <ArrowForwardIosRoundedIcon />
        </button>
      </div>
      <div className="calendar">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
        {Array.from({ length: startDay }, (_, index) => (
          <div key={index}></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, index) => (
          <div
            key={index}
            className={`day ${
              new Date(year, month, index + 1).toDateString() ===
              dateObj.toDateString()
                ? "active"
                : ""
            } ${new Date(year, month, index + 1) < today ? "disabled" : ""}`}
            onClick={() => handleDateChange(new Date(year, month, index + 1))}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
