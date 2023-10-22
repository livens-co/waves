"use client";

import "./style.scss";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Link from "next/link";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { NextResponse } from "next/server";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const PersonalInfoPage = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const {
    numberOfPeople,
    destination,
    date,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    userNotes,
    setUserNotes,
  } = useGlobalContext();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment successful");
    }

    if (searchParams.get("canceled")) {
      toast.error("Payment canceled");
    }
  }, [searchParams]);

  // const createBooking = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.post("/api/bookings", {
  //       numberOfPeople,
  //       destination,
  //       date,
  //       firstName,
  //       lastName,
  //       email,
  //       phone,
  //       userNotes,
  //     });

  //     // return NextResponse.json(response)
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        numberOfPeople,
        destination,
        date,
        firstName,
        lastName,
        email,
        phone,
        userNotes,
      }
    );

    window.location = response.data.url;
  };

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
          <form>
            <div className="row">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="row">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="row">
              {" "}
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="row">
              {" "}
              <textarea
                name=""
                rows={3}
                placeholder="Notes"
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
              />
            </div>
          </form>
          <div className="buttons">
            <button
              className="btn"
              disabled={loading}
              // onClick={createBooking}
            >
              Contact me
            </button>
            <button
              className="btn bookNow"
              disabled={loading}
              onClick={onCheckout}
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
            {date.toLocaleDateString("en-DE", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h4>
          <p>Number of people:</p>
          <h4>{numberOfPeople}</h4>
        </div>
      </div>

      {/* TOUR DETAILS ON THE SIDE */}
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
