"use client";
 
import "./style.scss";

import Image from "next/image";

import data from "../../data/data.js";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useRef } from "react";
import Link from "next/link";

const Destinations = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const scrollDistanceFraction = 0.5;

  const handleScroll = (forward: boolean) => {
    if (boxRef.current) {
      const box = boxRef.current;
      const width = box.clientWidth * scrollDistanceFraction;
      box.scrollLeft += forward ? width : -width;
    }
  };
  return (
    <div className="popularDestinations">
     
      <div className="popularDestinationSlider">
        <button onClick={() => handleScroll(false)}>
          <ArrowBackIosNewRoundedIcon />
        </button>
        <div className="destinationContainer" ref={boxRef}>
          <div className="destinationInnerContainer">
            {data.locations.map((location) => (
              <Link
                href={`/tours/${location.href}`}
                className="destinationCard"
                key={location.id}
              >
                <div className="destinationCardInner">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    sizes="100px"
                  />
                  <div className="imageOverlay" />
                  <p className="destinationTitle">{location.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button onClick={() => handleScroll(true)}>
          <ArrowForwardIosRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default Destinations;
