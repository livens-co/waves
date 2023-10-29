"use client";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useGlobalContext } from "@/app/context/store";

import data from "../../data/data.js";

import "./style.scss";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface DestinationPickerProps {
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const DestinationPicker: React.FC<DestinationPickerProps> = ({
  setValid,
}) => {
  const { setDestination, destination } = useGlobalContext();
  const boxRef = useRef<HTMLDivElement>(null);

  const handleDestinationChange = (selectedDestination: string) => {
    setDestination(selectedDestination);
  };

  const scrollDistanceFraction = 0.5;

  const handleScroll = (forward: boolean) => {
    if (boxRef.current) {
      const box = boxRef.current;
      const width = box.clientWidth * scrollDistanceFraction;
      box.scrollLeft += forward ? width : -width;
    }
  };

  useEffect(() => {
    const isValid = Object.keys(destination).length > 0;
    setValid(isValid);
  }, [destination, setValid]);

  return (
    <div className="destinationSlider">
      <button onClick={() => handleScroll(false)}>
        <ArrowBackIosNewRoundedIcon />
      </button>
      <div className="destinationContainer" ref={boxRef}>
        <div className="destinationInnerContainer">
          {data.locations.map((location) => (
            <div
              className={`destinationCard ${
                destination === location.name ? "activeCard" : ""
              }`}
              key={location.id}
              onClick={() => handleDestinationChange(location.name)}
            >
              <div className="destinationCardInner">
                <Image
                priority
                  src={location.image}
                  alt={location.name}
                  fill
                  sizes="100px"
                />
                <div className="imageOverlay" />
                <p className="destinationTitle">{location.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => handleScroll(true)}>
        <ArrowForwardIosRoundedIcon />
      </button>
    </div>
  );
};

export default DestinationPicker;
