"use client";

import "./style.scss";

import { useState } from "react";

import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Tooltip from "@mui/material/Tooltip";

import Link from "next/link";
import data from "../../../../../data/data.js";
import DatePicker from "@/components/DatePicker/DatePicker";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

const BookingPage = () => {
  const {
    date,
    setDate,
    numberOfPeople,
    setNumberOfPeople,
    destination,
    setDestination,
  } = useGlobalContext();

  const [selectedDate, setSelectedDate] = useState(date);
  const [quantity, setQuantity] = useState(numberOfPeople);

  const handleDateChange = (newDate: Date | ((prevDate: Date) => Date)) => {
    setSelectedDate(newDate as Date);
    setDate(newDate as Date);
  };

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setNumberOfPeople(quantity - 1);
    }
  };

  const onPlus = () => {
    if (quantity <= 13) {
      setQuantity(quantity + 1);
      setNumberOfPeople(quantity + 1);
    } else {
      setQuantity(quantity);
    }
  };

  const handleDestinationChange = (e: any) => {
    const selectedDestination = e.target.value;
    setDestination(selectedDestination);
  };

  return (
    <div className="bookingPage">
      <div className="logo">
        <Image
          src="/assets/logo.webp"
          alt="Waves & more"
          width={200}
          height={200}
        />
      </div>
      <div className="title">
        <h1>Book your trip</h1>
      </div>

      {/* DESTINATION DROPDOWN */}
      <div className="destination">
        <select onChange={handleDestinationChange} value={destination}>
          {data.locations.map((location) => (
            <option value={location.name} key={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>

      {/* DATE PICKER  */}
      <DatePicker onDateChange={handleDateChange} value={selectedDate} />

      {/* PERSON COUNTER  */}

      <div className="counterWrapper">
        <h4>Number of people:</h4>
        <div className="counter">
          <button onClick={onMinus}>
            <RemoveRoundedIcon />
          </button>
          <Tooltip title="Max. 14 people">
            <h3>{quantity}</h3>
          </Tooltip>
          <button onClick={onPlus}>
            <AddRoundedIcon />
          </button>
        </div>
      </div>

      <Link href="/booking/booking-details" className="button">
        Continue booking
      </Link>
      <div className="backgroundImage">
        <Image
          src="/assets/wavesBoat.webp"
          alt="Waves & more"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default BookingPage;
