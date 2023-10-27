import Image from "next/image";
import Link from "next/link";

import "../style.scss";
import ToursCta from "@/components/ToursCta/ToursCta";
import Destinations from "@/components/Destinations/Destinations";

const HvarOdyssey = () => {
  return (
    <div className="seafarisPage">
      <header>
        <div className="logo">
          <Image
            src="/assets/logo.webp"
            alt="Waves & more"
            width={200}
            height={200}
          />
        </div>
        <h1>Hvar Odyssey</h1>

        <div className="backgroundImage">
          <Image
            src="/assets/hvar-odyssey/4.jpeg"
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
            src="/assets/hvar-odyssey/1.jpeg"
            width={400}
            height={400}
            alt="Hvar"
          />
          <div className="imageOverlay" />
          {/* <h1>Hvar</h1> */}
        </div>
        <div className="tripImage">
          <Image
            src="/assets/hvar-odyssey/2.jpeg"
            width={400}
            height={400}
            alt="Brač"
          />
          <div className="imageOverlay" />
          {/* <h1>Brač</h1> */}
        </div>
        <div className="tripImage">
          <Image
            src="/assets/hvar-odyssey/3.jpeg"
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
              Journey to Hvar, <br /> the Adriatic&apos;s Crown Jewel
            </h1>
            <p>
              Hvar, often hailed as the queen of the Adriatic, is not just an
              island; it&apos;s an experience that evokes memories in the heart
              of every traveller. This enchanting island beckons with its myriad
              attractions, from its rich cultural tapestry to the wonders of its
              natural landscape. Standing tall amidst these marvels are the
              awe-inspiring Red Rocks. These geological formations, moulded over
              millennia, captivate with their rugged beauty, offering a glimpse
              into the island&apos;s dramatic past.
            </p>
          </div>
          <div className="containerImage">
            <Image
              src="/assets/hvar-odyssey/group/g1.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
        <div className="tripContainer">
          <div className="containerImage">
            <Image
              src="/assets/hvar-odyssey/group/g2.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="text">
            <h1>
              The Essence of <br />
              Island Life and Culture
            </h1>
            <p>
              Deepening your Hvar experience, the renowned Vinarija
              Zlatan-Plavac welcomes you. Within its cellars, you&apos;ll find
              the true essence of the island captured in bottles. Here, the
              aromas and flavours of Hvar&apos;s finest wines await, each glass
              promising a sensory journey like no other. As you savour these
              vintages, tales of the island&apos;s winemaking traditions come to
              life, weaving a narrative of dedication, passion, and
              craftsmanship.
            </p>
          </div>
        </div>
        <div className="tripContainer">
          <div className="text">
            <h1>A Walk Through History and Nature</h1>
            <p>
              Continue your journey to the historic town of Hvar, an emblem of
              the island&apos;s storied past. Its cobbled streets, ancient
              architecture, and vibrant squares brim with tales of epochs gone
              by. From there, embark on a captivating voyage to Starigrad,
              Jelsa, and Vrbovsko. Each town&apos;s unique character echoes
              stories of ancient mariners, legendary battles, and bygone eras.
              And for the perfect finale, hop over to Bol on Brač. Its pristine
              beaches, shimmering waters, and tranquil ambience are the ideal
              epilogue to your extended Hvar odyssey.
            </p>
          </div>
          <div className="containerImage">
            <Image
              src="/assets/hvar-odyssey/group/g3.png"
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

export default HvarOdyssey;
