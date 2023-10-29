import Image from "next/image";
import Link from "next/link";

import "../style.scss";
import Destinations from "@/components/Destinations/Destinations";
import ToursCta from "@/components/ToursCta/ToursCta";

const BreathtakingBrac = () => {
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
        <h1>Breathtaking Brač</h1>

        <div className="backgroundImage">
          <Image
          priority
            src="/assets/breathtaking-brac/14.jpeg"
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
            src="/assets/breathtaking-brac/9.jpeg"
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
            src="/assets/breathtaking-brac/11.jpeg"
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
            src="/assets/breathtaking-brac/12.jpeg"
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
              Brač:
              <br />A Mosaic of Wonders
            </h1>
            <p>
              Brač, an Adriatic gem, unfolds its treasures layer by layer,
              presenting a delightful fusion of nature, culture, and history.
              The journey begins in Sutivan, where the whispers of ancient
              traditions merge seamlessly with the rhythms of contemporary life.
              Every corner and alley is a testimony to the island&apos;s
              enduring spirit. A short sail away, Supetar comes alive, bustling
              with energy and activity, capturing the heart of Brač&apos;s
              vibrant community.
            </p>
          </div>
          <div className="containerImage">
            <Image
            priority
              src="/assets/breathtaking-brac/group/g1.png"
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
              src="/assets/breathtaking-brac/group/g2.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="text">
            <h1>
              Coastal Chronicles <br /> and Craftsmanship
            </h1>
            <p>
              As the exploration deepens, the picturesque town of Pučišća
              emerges, proudly showcasing its stone masonry heritage—a craft
              that has shaped its identity for generations. The artistry etched
              in its buildings is rivalled only by the tranquillity of
              Povlja&apos;s serene bays, offering moments of reflection. Further
              along the coast, Bobovišća and Milna await, their stories
              intertwined with the very essence of the Adriatic. These seaside
              towns, with their historical narratives and maritime tales,
              vividly depict Brač&apos;s rich past.
            </p>
          </div>
        </div>
        <div className="tripContainer">
          <div className="text">
            <h1>
              Nature&apos;s Embrace <br /> and Spiritual Solace
            </h1>
            <p>
              Yet, Brač is not all about the coastline. Venturing inland,
              domaćinstvo Gozul provides a window into the island&apos;s
              agrarian soul, offering insights into its rustic traditions. But
              the true highlight lies ahead: Bol, renowned for its iconic
              beaches, is a paradise for sun-seekers. And as the journey&apos;s
              crescendo, a hike through the verdant trails leads to Manastir
              Blaca. This historical monastery, cradled by nature&apos;s
              grandeur, offers panoramic views and a profound connection to the
              island&apos;s spiritual and natural essence.
            </p>
          </div>
          <div className="containerImage">
            <Image
            priority
              src="/assets/breathtaking-brac/group/g3.png"
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

export default BreathtakingBrac;
