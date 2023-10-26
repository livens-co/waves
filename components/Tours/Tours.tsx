import Image from "next/image";
import "./style.scss";

import data from "../../data/data.js";
import Link from "next/link";

const Tours = () => {
  return (
    <div className="tours">
      <h1 className="toursSectionTitle">Breathtaking tours</h1>
      <p className="tourContainerText">
        Let the wind guide you through a unique sensory <br /> voyage, finely
        tailored by Waves & More.
      </p>
      <div className="tourList">
        {data.locations
          .map((tour) => (
            <Link
              href={`/tours/${tour.href}`}
              className="tourContainer"
              key={tour.id}
            >
              <Image src={tour.image} alt={tour.name} width={200} height={75} />
              <div className="imageOverlay" />
              <p>{tour.name}</p>
            </Link>
          ))
          .splice(0, 8)}
      </div>
      {/* <div className="tourListOverlay"> */}
      {/* <div className="waveB" />
        <div className="waveD" />
        <div className="waveA" />
        <div className="waveC" /> */}

      {/* </div> */}

      {/* <div className="tourList">
        {data.locations
          .map((tour) => (
            <Link
              href={`/tours/${tour.href}`}
              className="tourContainer"
              key={tour.id}
            >
              <Image src={tour.image} alt={tour.name} width={200} height={75} />
              <div className="imageOverlay" />
              <p>{tour.name}</p>
            </Link>
          ))
          .splice(4, 3)} */}
        {/* <div className="tourContainer">
          <Image
            src="/assets/homepageHeader.jpeg"
            alt="Custom tour"
            width={200}
            height={75}
          />
          <div className="imageOverlay" />
          <p>Custom tours</p>
        </div> */}
      {/* </div> */}
      <div className="backgroundImage">
        <Image
          src="/assets/wavesBoat.webp"
          alt="Waves & More"
          width={200}
          height={75}
        />
      </div>
    </div>
  );
};

export default Tours;

{
  /* <div className="tourList">
        <div className="tourContainer">
          <Image
            src="/assets/locations/split.jpeg"
            alt="3 islands tour"
            width={200}
            height={75}
          />
          <div className="imageOverlay"></div>
          <p>3 islands tour</p>
        </div>
        <div className="tourContainer">
          <Image
            src="/assets/locations/militaryTunnels.jpeg"
            alt="Military Tunnels"
            width={200}
            height={75}
          />
          <div className="imageOverlay"></div>
          <p>Military Tunnels</p>
        </div>
        <div className="tourContainer">
          <Image
            src="/assets/locations/cave.jpeg"
            alt="Blue & Green cave"
            width={200}
            height={75}
          />
          <div className="imageOverlay"></div>
          <p>Blue & Green cave</p>
        </div>
        <div className="tourContainer">
          <Image
            src="/assets/locations/dubrovnik.jpeg"
            alt="Instagram tour"
            width={200}
            height={75}
          />

          <div className="imageOverlay"></div>
          <p>Instagram tour</p>
        </div>
        <div className="tourContainer">
          <Image
            src="/assets/locations/korcula.jpeg"
            alt="Senses of Korcula"
            width={200}
            height={75}
          />
          <div className="imageOverlay"></div>
          <p>Senses of Korčula</p>
        </div>
        <div className="tourContainer">
          <Image
            src="/assets/locations/hiddenTours.jpeg"
            alt="Hidden treasure"
            width={200}
            height={75}
          />
          <div className="imageOverlay"></div>
          <p>Hidden treasure</p>
        </div>
        <div className="tourContainer">
          <Image
            src="/assets/locations/bracHvar.jpeg"
            alt="Brač & Hvar tour"
            width={200}
            height={75}
          />
          <div className="imageOverlay"></div>
          <p>Brač & Hvar tour</p>
        </div>
        <div className="tourContainer">
          <Image
            src="/assets/locations/randomTours.jpeg"
            alt="Custom experience"
            width={200}
            height={75}
          />

          <div className="imageOverlay"></div>
          <p>Custom experience</p>
        </div>
        <div className="tourListOverlay">
          <p>
            Let the wind guide you through a unique sensory <br /> voyage,
            finely tailored by Waves & More.
          </p>
        </div>
        
      </div> */
}
