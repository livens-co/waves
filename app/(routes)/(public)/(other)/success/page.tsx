"use client";

import "../style.scss";

import Lottie from "lottie-react";

import success from "../../../../lottie/success.json";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3;

const SuccessPage = () => {
  return (
    <div className="afterBookingPage">
      <div className="logo">
        <Image
          priority
          src="/assets/logo.webp"
          alt="Waves&More Logo"
          width={200}
          height={75}
        />
      </div>
      <div className="animation">
        <Lottie
          animationData={success}
          loop={false}
          style={{ height: "12rem", width: "12rem" }}
        />
      </div>
      <h1 style={{color: '#6ace9a'}}>Success</h1>
      <p>
        Your booking request has been received, and a confirmation has been
        emailed to you.
      </p>
      <Link href="/" className="buttonInvert">
        Home page
      </Link>
    </div>
  );
};

export default SuccessPage;
