import "./style.scss";

import data from "../../../../data/data.js";
import Link from "next/link";
import Image from "next/image";

const ToursPage = () => {
  return (
    <>
      <div className="toursPage">
        <header>
          <h1>
            <span>Explore Croatia&apos;s Coastal Gems: </span>
            <br />
            Uncover Hidden Treasures on Our Carefully Curated Tours!
          </h1>
        </header>
        <div className="toursGrid">
          {data.locations.map((tour) => (
            <Link
              href={`/tours/${tour.href}`}
              key={tour.href}
              className="tourContainer"
            >
              <Image
                src={tour.image}
                alt={tour.name}
                width={256}
                height={160}
              />
              <div className="imageOverlay" />
              <p>{tour.name}</p>
            </Link>
          ))}
        </div>
        <div className="backgroundImage">
          <Image
            priority
            src="/assets/wavesBoat.webp"
            alt="Waves & More"
            width={200}
            height={75}
          />
        </div>

        <div className="customTours">
          <div className="tourText">
            <h2>Custom experiences</h2>
            <p>
              If you haven&apos;t found the ideal tour, please get in touch with
              us, and we&apos;ll be delighted to tailor it to your exact wishes.
            </p>
          </div>
          <div className="customTourCta">
            <a href="mailto:hello@waves-more.com" className="buttonInvert">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="toursBottom">
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
        <div className="wave wave4" />
      </div>
    </>
  );
};

export default ToursPage;
