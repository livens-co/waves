"use client";

import "../style.scss";

import Lottie from "lottie-react";

import canceled from "../../../../lottie/canceled.json";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3;

const CanceledPage = () => {
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
          animationData={canceled}
          loop={false}
          style={{ height: "8rem", width: "8rem" }}
        />
      </div>
      <h1 style={{color: '#e1c239'}}>Canceled</h1>
      <p>Your booking has been canceled, and your card has not been charged.</p>
      <Link href="/" className="buttonInvert">
        Home page
      </Link>
    </div>
  );
};

export default CanceledPage;
