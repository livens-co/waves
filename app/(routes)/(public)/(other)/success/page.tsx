"use client";

import "../style.scss";

import Lottie from "lottie-react";

import success from "../../../../lottie/success.json";

export const revalidate = 3;

const SuccessPage = () => {
  return (
    <div className="afterBookingPage">
      <div className="animation">
        <Lottie
          animationData={success}
          loop={false}
          style={{ height: "10rem", width: "10rem" }}
        />
      </div>
      <h1>success</h1>
    </div>
  );
};

export default SuccessPage;
