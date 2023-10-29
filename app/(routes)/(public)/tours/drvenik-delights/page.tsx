import Image from "next/image";
import Link from "next/link";

import "../style.scss";
import ToursCta from "@/components/ToursCta/ToursCta";
import Destinations from "@/components/Destinations/Destinations";

const DrvenikDelights = () => {
  return (
    <div className="seafarisPage">
      <header>
        <div className="logo">
          <Image
          priority
            src="/assets/logo.webp"
            alt="Waves & more"
            width={200}
            height={200}
          />
        </div>
        <h1>Drvenik Delights</h1>

        <div className="backgroundImage">
          <Image
          priority
            src="/assets/drvenik-delights/6.jpeg"
            width={1400}
            height={650}
            alt="3 Islands"
          />
          <div className="imageOverlay" />
        </div>

        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
        <div className="wave wave4" />
      </header>
      <div className="quote">
        <h1>
          One Day, Three Islands,
          <br /> <span>Endless</span> Adventure
        </h1>
        <Link href="/booking">Book now</Link>
      </div>
      <div className="tripImages">
        <div className="tripImage">
          <Image
          priority
            src="/assets/drvenik-delights/1.jpeg"
            width={400}
            height={400}
            alt="Hvar"
          />
          <div className="imageOverlay" />
          {/* <h1>Hvar</h1> */}
        </div>
        <div className="tripImage">
          <Image
          priority
            src="/assets/drvenik-delights/2.jpeg"
            width={400}
            height={400}
            alt="Brač"
          />
          <div className="imageOverlay" />
          {/* <h1>Brač</h1> */}
        </div>
        <div className="tripImage">
          <Image
          priority
            src="/assets/drvenik-delights/3.jpeg"
            width={400}
            height={400}
            alt="Vis"
          />
          <div className="imageOverlay" />
          {/* <h1>Vis</h1> */}
        </div>
      </div>
      <div className="tripDescription">
        <div className="tripContainer">
          <div className="text">
            <h1>
              Drvenik&apos;s <br /> Natural Splendor
            </h1>
            <p>
              Drvenik, a hidden gem of the Adriatic, beckons travellers with its
              pristine beauty and shimmering coastline. As you approach, the
              azure embrace of Krknjaši welcomes you, painting a picturesque
              scene of crystal-clear waters juxtaposed against a backdrop of
              untouched nature. This coastal paradise isn&apos;t just a sight
              for sore eyes but an invitation to immerse oneself in the tranquil
              rhythms of the sea.
            </p>
          </div>
          <div className="containerImage">
            <Image
            priority
              src="/assets/drvenik-delights/group/g1.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
          
        </div>
        <div className="tripContainer">
        <div className="containerImage">
            <Image
            priority
              src="/assets/drvenik-delights/group/g2.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="text">
            <h1>
              Trogir: <br />A Timeless Tapestry
            </h1>
            <p>
              From the natural allure of Drvenik, the journey transitions to the
              cobblestone lanes of Trogir. As a UNESCO World Heritage Site,
              Trogir is a living testament to epochs gone by. Wandering its
              ancient streets feels akin to traversing the pages of a rich
              historical tome. Each stone and corner tells tales of
              civilisations, artists, and mariners who once graced this Adriatic
              marvel.
            </p>
          </div>
        </div>
        <div className="tripContainer">
          <div className="text">
            <h1>
              Šolta&apos;s <br />
              Olive Oasis
            </h1>
            <p>
              As day reaches a golden twilight, the adventure sails to Šolta.
              This island, renowned for its age-old olive groves, offers more
              than scenic beauty. At Maslenica, the heart of Šolta, one can
              indulge in the island&apos;s olive-rich delights. Whether
              you&apos;re tasting freshly pressed olive oil or simply strolling
              amidst the groves, Šolta is a perfect culmination to a tour that
              seamlessly weaves history, nature, and culture into one
              unforgettable tapestry.
            </p>
          </div>
          <div className="containerImage">
            <Image
            priority
              src="/assets/drvenik-delights/group/g3.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="tripItinerary">
        <h1>Seafari outline</h1>
        <div className="grid">
          <div className="gridItem">
            <span>10:00</span>
            <p>Departure, Split</p>
          </div>

          <div className="gridItem">
            <span>11:30</span>
            <p>Visiting island & town Vis</p>
          </div>

          <div className="gridItem">
            <span>13:30</span>
            <p>Swimming & snorkeling at Pakleni islands</p>
          </div>

          <div className="gridItem">
            <span>15:00</span>
            <p>Visiting island & town Hvar</p>
          </div>

          <div className="gridItem">
            <span>17:00</span>
            <p>Brač swimming in a bay Maslinovica</p>
          </div>

          <div className="gridItem">
            <span>18:30</span>
            <p>Return to Split</p>
          </div>
          <div className="line" />
        </div>
      </div>

      <ToursCta />

      <div className="moreTrips">
        <h2>Simmilar experiences</h2>
        <Destinations />
        <Link href="/tours" className="buttonInvert">
          Explore more
        </Link>
      </div>
    </div>
  );
};

export default DrvenikDelights;
