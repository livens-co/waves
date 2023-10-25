"use client";

import "./style.scss";

import Image from "next/image";

import data from "../../data/data.js";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
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
    <div className="findDestination">
      <div className="title">
        <h1>Discover Croatia</h1>
        <p>
          where endless coastline meets <br /> millennia of rich history.
        </p>
      </div>
      {/* <div className="searchDestinations">
        <div className="searchBar">
          <input type="text" placeholder="Find your destination" />
          <button>
            <SearchRoundedIcon />
          </button>
        </div>
        <button>
          <CalendarTodayOutlinedIcon />
        </button>
        <button>
          <GroupsOutlinedIcon />
        </button>
      </div> */}
      <div className="popularDestinations">
        <h3>Popular tours</h3>
        <div className="popularDestinationSlider">
          <button onClick={() => handleScroll(false)}>
            <ArrowBackIosNewRoundedIcon />
          </button>
          <div className="destinationContainer" ref={boxRef}>
            <div className="destinationInnerContainer">
              {data.locations.map((location) => (
                <Link href={`/tours/${location.href}`} className="destinationCard" key={location.id}>
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
        {/* <div className="carousel">
          <button className="nav">
            <ChevronLeftRoundedIcon />
          </button>
          <div className="carouselContainer">
            <Image
              priority
              src="/assets/locations/korcula.jpeg"
              alt="Korčula"
              width={200}
              height={75}
            />
            <div className="imageOverlay"></div>
            <p>Korčula</p>
          </div>
          <div className="carouselContainer">
            <Image
              priority
              src="/assets/locations/hvar.jpeg"
              alt="Hvar"
              width={200}
              height={75}
            />
            <div className="imageOverlay"></div>
            <p>Hvar</p>
          </div>
          <div className="carouselContainer">
            <Image
              priority
              src="/assets/locations/split.jpeg"
              alt="Split"
              width={200}
              height={75}
            />
            <div className="imageOverlay"></div>
            <p>Split</p>
          </div>
          <div className="carouselContainer">
            <Image
              priority
              src="/assets/locations/dubrovnik.jpeg"
              alt="Dubrovnik"
              width={200}
              height={75}
            />
            <div className="imageOverlay"></div>
            <p>Dubrovnik</p>
          </div>
          <button className="nav">
            <ChevronRightRoundedIcon />
          </button>
        </div> */}
      </div>
      <button className="buttonInvert">See more</button>
    </div>
  );
};

export default Destinations;
