"use client";

import "./style.scss";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Link from "next/link";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import BookingInfoForm from "@/components/BookingInfoForm/BookingInfoForm";
import { createContactMe } from "@/app/api/formContact";
import { sendEmail } from "@/app/api/sendEmail";
import { format, parseISO } from "date-fns";

const PersonalInfoPage = () => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const {
    numberOfPeople,
    destination,
    date,
    firstName,
    lastName,
    email,
    phone,
    userNotes,
  } = useGlobalContext();

  const handleCreateContactMe = async () => {
    try {
      setLoading(true);
      const response = await createContactMe({
        numberOfPeople,
        destination,
        date,
        firstName,
        lastName,
        email,
        phone,
        userNotes,
      });

    
      if (response) {
        const { bookingId } = response;

        await sendEmail({
          numberOfPeople,
          destination,
          date,
          firstName,
          lastName,
          email,
          phone,
          userNotes,
          emailType: "contact",
          bookingId,
        });
        router.push("/success");
      }
    } catch (error) {
      console.error("Booking creation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const createCheckout = async () => {
    const formattedDateStr = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
    
      {
        numberOfPeople,
        destination,
        date: formattedDateStr,
        firstName,
        lastName,
        email,
        phone,
        userNotes,
        emailType: "stripe",
      }
    );

    window.location = response.data.url;
  };

  // const formattedDate = format(parseISO(date), "ccc, dd.MM.yyyy.");
  const formattedDate = format(date, "ccc, dd.MM.yyyy.")

  return (
    <div className="personalInfoPage">
      <div className="logo">
        <Image
          src="/assets/logo.webp"
          alt="Waves & more"
          width={200}
          height={200}
        />
      </div>
      <div className="title">
        <Link href="/booking">
          <ArrowBackRoundedIcon />
        </Link>
        <h1>Personal details</h1>
      </div>
      <div className="container">
        <div className="form">
          <BookingInfoForm setValid={setFormIsValid} />

          <div className="buttons">
            <button
              className="btn"
              disabled={!formIsValid || loading}
              onClick={handleCreateContactMe}
            >
              Contact me
            </button>
            <button
              className="btn bookNow"
              disabled={!formIsValid || loading}
              onClick={createCheckout}
            >
              Book now
            </button>
          </div>
        </div>
        <div className="booking">
          <p>You are booking trip to:</p>
          <h4>{destination}</h4>
          <p>Date of the trip:</p>
          <h4>
          {formattedDate} 
          </h4>
          <p>Number of people:</p>
          <h4>{numberOfPeople}</h4>
        </div>
      </div>

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

export default PersonalInfoPage;
