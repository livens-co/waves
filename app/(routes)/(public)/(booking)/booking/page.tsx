"use client";

import "./style.scss";

import { useState } from "react";

import DatePicker from "@/components/DatePicker/DatePicker";
import Image from "next/image";

import DestinationPicker from "@/components/DestinationPicker/DestinationPicker";
import PersonCounter from "@/components/PersonCounter/PersonCounter";
import { useRouter } from "next/navigation";

// interface BookingPageProps {
//   setValid: React.Dispatch<React.SetStateAction<boolean>>;
// }

const BookingPage = () => {
  const [destinationIsValid, setDestinationIsValid] = useState<boolean>(false);
  const router = useRouter();

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

      {/* DESTINATION SLIDER */}
      <DestinationPicker setValid={setDestinationIsValid} />

      {/* DATE PICKER  */}
      <DatePicker />

      {/* PERSON COUNTER  */}
      <PersonCounter />

      <button
        disabled={!destinationIsValid}
        className="nextButton"
        onClick={() => router.push("/booking/booking-details")}
      >
        Continue booking
      </button>

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
