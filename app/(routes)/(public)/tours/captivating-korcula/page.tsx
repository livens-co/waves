import Image from "next/image";
import Link from "next/link";

import "../style.scss";
import ToursCta from "@/components/ToursCta/ToursCta";
import Destinations from "@/components/Destinations/Destinations";

const CaptivatingKorcula = () => {
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
        <h1>Captivating Korčula</h1>

        <div className="backgroundImage">
          <Image
          priority
            src="/assets/captivating-korcula/4.jpeg"
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
            src="/assets/captivating-korcula/2.jpeg"
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
            src="/assets/captivating-korcula/3.jpeg"
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
            src="/assets/captivating-korcula/1.jpeg"
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
              Korčula: <br /> The Adriatic&apos;s Enchanted Isle
            </h1>
            <p>
              The voyage to Korčula is not just a journey across waters but back
              in time to an island steeped in tales, traditions, and
              irresistible beauty. As you approach, the horizon reveals the
              first gem of the island, Vela Luka. Beyond its natural allure,
              Vela Luka is a muse for countless artists. Its serene landscapes
              and tranquil bays have inspired many a canvas, making it a
              sanctuary for art enthusiasts and those seeking respite from the
              world&apos;s hustle.
            </p>
          </div>
          <div className="containerImage">
            <Image
            priority
              src="/assets/captivating-korcula/group/g1.png"
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
              src="/assets/captivating-korcula/group/g2.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="text">
            <h1>
              In the Footsteps <br /> of Legends
            </h1>
            <p>
              The heart of the island is the town of Korčula, a historical
              treasure trove protected by imposing medieval walls. As you wander
              through its labyrinthine alleys, you are treading the same paths
              once believed to be taken by the legendary explorer Marco Polo.
              Each stone, each architectural marvel, is a testament to the
              island&apos;s rich history and cultural tapestry. The air hums
              with tales of valour, voyages, and venerable traditions.
            </p>
          </div>
        </div>
        <div className="tripContainer">
          <div className="text">
            <h1>
              Šćedro: <br />
              The Whispering Islet
            </h1>
            <p>
              As the Korčula sojourn nears its conclusion, the island offers one
              final enchantment: the serene islet of Šćedro. Nestled amidst the
              Adriatic&apos;s embrace, Šćedro is where time stands still. The
              gentle murmurs of the sea are interspersed with tales of ancient
              mariners who once sought refuge in its coves. Its tranquility is
              not just an experience but a balm for the soul, rounding off a
              journey that captures the essence of the Adriatic&apos;s magic.
            </p>
          </div>
          <div className="containerImage">
            <Image
            priority
              src="/assets/captivating-korcula/group/g3.png"
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

export default CaptivatingKorcula;
