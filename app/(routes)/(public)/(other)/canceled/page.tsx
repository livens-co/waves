'use client'

import '../style.scss'

import Lottie from "lottie-react";

import canceled from '../../../../lottie/canceled.json'

export const revalidate = 3;

const CanceledPage = () => {
  return (
    <div className="afterBookingPage">
      <div className="animation">
        <Lottie
          animationData={canceled}
          loop={false}
          style={{ height: "10rem", width: "10rem" }}
        />
      </div>
      <h1>canceled</h1>
    </div>
  )
}

export default CanceledPage