import Image from "next/image";
import Link from "next/link";

import "../style.scss";
import ToursCta from "@/components/ToursCta/ToursCta";
import Destinations from "@/components/Destinations/Destinations";

const VibrantVis = () => {
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
        <h1>Vibrant Vis</h1>

        <div className="backgroundImage">
          <Image
            src="/assets/vibrant-vis/4.jpeg"
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
            src="/assets/vibrant-vis/1.jpeg"
            width={400}
            height={400}
            alt="Hvar"
          />
          <div className="imageOverlay" />
          {/* <h1>Hvar</h1> */}
        </div>
        <div className="tripImage">
          <Image
            src="/assets/vibrant-vis/2.jpeg"
            width={400}
            height={400}
            alt="Brač"
          />
          <div className="imageOverlay" />
          {/* <h1>Brač</h1> */}
        </div>
        <div className="tripImage">
          <Image
            src="/assets/vibrant-vis/3.jpeg"
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
              Vis: A Tapestry <br /> of Charm and Enigma
            </h1>
            <p>
              Vis, the jewel of the Adriatic, beckons travellers with tales of
              ancient civilisations, cinematic landscapes, and natural wonders.
              The journey unfolds in Vis town, where the narrow streets, stone
              houses, and gentle rhythms echo the timeless charm of Dalmatia.
              Every corner and plaza is imbued with history, offering glimpses
              of bygone eras and maritime legacies.
            </p>
          </div>
          <div className="imagesR">
            <div className="image1">
              <Image src="/assets/vibrant-vis/1.jpeg" fill alt="" />
            </div>
            <div className="image2">
              <Image src="/assets/vibrant-vis/2.jpeg" fill alt="" />
            </div>
          </div>
        </div>
        <div className="tripContainer">
          <div className="imagesL">
            <div className="image1">
              <Image src="/assets/vibrant-vis/3.jpeg" fill alt="" />
            </div>
            <div className="image2">
              <Image src="/assets/vibrant-vis/4.jpeg" fill alt="" />
            </div>
          </div>
          <div className="text">
            <h1>
              From Fishermen&apos;s <br />
              Tales to Cinematic Trails
            </h1>
            <p>
              Komiža emerges as a testament to the island&apos;s maritime soul.
              This fisherman&apos;s haven, with its boats bobbing against a
              backdrop of historic buildings, encapsulates the spirit of the
              Dalmatian coast. Yet, Vis&apos;s allure doesn&apos;t end here. The
              secluded shores of Budikovac beckon, promising solitude and
              serenity. And for those seeking a brush with cinema, Mama Mia
              Beach awaits, letting you relive iconic film moments. The
              journey&apos;s pinnacle, however, is the ethereal Blue Cave in
              Biševo. Bathed in a luminescent blue, this natural marvel leaves
              every visitor in awe.
            </p>
          </div>
        </div>
        <div className="tripContainer">
          <div className="text">
            <h1>
              Nature&apos;s <br />
              Unspoiled Embrace
            </h1>
            <p>
              As the exploration of Vis reaches its crescendo, the island offers
              two final masterpieces: Stiniva and Mala Smokva. These bays are
              nature&apos;s canvas with their crystalline waters, rugged cliffs,
              and untouched beauty. They encapsulate the essence of Vis, an
              island where nature&apos;s grandeur meets human history, creating
              a symphony of experiences that linger long after the voyage ends.
            </p>
          </div>
          <div className="imagesR">
            <div className="image1">
              <Image src="/assets/vibrant-vis/5.jpeg" fill alt="" />
            </div>
            <div className="image2">
              <Image src="/assets/vibrant-vis/6.jpeg" fill alt="" />
            </div>
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

export default VibrantVis;
