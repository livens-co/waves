import "./style.scss";

import data from "../../../../data/data.js";
import Link from "next/link";
import Image from "next/image";

const ToursPage = () => {
  return (
    <>
      <div className="toursPage">
        <Link href="/" className="logo">
          <Image
            priority
            src="/assets/logo.webp"
            alt="Waves&More Logo"
            width={200}
            height={75}
          />
        </Link>
        <header>
          <h1>
            <span>Explore Croatia&apos;s Coastal Gems: </span>
            <br />
            Uncover Hidden Treasures on Our Carefully Curated Tours!
          </h1>
        </header>
        <div className="toursGrid">
          {data.locations
            .map((tour) => (
              <div className="tourRow" key={tour.href}>
                <div className="rowImage">
                  <Link href={`/tours/${tour.href}`} className="tourContainer">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      width={256}
                      height={160}
                    />
                    <div className="imageOverlay" />
                    <p>{tour.name}</p>
                  </Link>
                </div>
                <div className="tourSummary">
                  <p>{tour.summary}</p>
                </div>
              </div>
            ))
            .splice(0, 7)}
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
    </>
  );
};

export default ToursPage;
