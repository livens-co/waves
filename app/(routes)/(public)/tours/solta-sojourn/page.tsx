import Image from "next/image";
import Link from "next/link";

import "../style.scss";
import ToursCta from "@/components/ToursCta/ToursCta";
import Destinations from "@/components/Destinations/Destinations";

const SoltaSojourn = () => {
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
        <h1>Šolta Sojourn</h1>

        <div className="backgroundImage">
          <Image
          priority
            src="/assets/solta-sojourn/3.jpeg"
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
            src="/assets/solta-sojourn/1.jpeg"
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
            src="/assets/solta-sojourn/2.jpeg"
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
            src="/assets/solta-sojourn/4.jpeg"
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
              Šolta&apos;s <br />
              Olive Embrace
            </h1>
            <p>
              Set foot on Šolta, an island celebrating the timeless dance
              between nature and culture. The journey begins at Maslenica, where
              olive groves stretch as far as the eye can see. This verdant
              expanse is not just a sight to behold but a proud testament to
              Šolta&apos;s rich agricultural heritage. Each olive tree, with its
              gnarled branches and silver-green leaves, narrates tales of
              generations dedicated to nurturing the land and reaping its
              bounties.
            </p>
          </div>
          <div className="containerImage">
            <Image
            priority
              src="/assets/solta-sojourn/group/g1.png"
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
              src="/assets/solta-sojourn/group/g2.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="text">
            <h1>
              Villages and <br />
              Vestiges of Time
            </h1>
            <p>
              From the olive heartland, the vacation takes you to the
              picturesque village of Stomorska. Time seems to slow here as you
              wander through narrow lanes, past stone houses and friendly locals
              who wear their island pride on their sleeves. But Šolta&apos;s
              tales aren&apos;t limited to its living populace. The ancient
              ruins of Nečijam whisper stories of civilisations long gone, each
              brick and relic echoing a past rich in history and intrigue.
            </p>
          </div>
        </div>
        <div className="tripContainer">
          <div className="text">
            <h1>Bays of Serenity</h1>
            <p>
              As the journey winds down, the allure of the sea beckons once
              more. The aptly named Lonely Paradise stands true to its moniker,
              offering solace to souls seeking quiet beach moments. The gentle
              lapping of waves and the distant call of seabirds form the perfect
              backdrop for introspection. And as a fitting finale, the serene
              bay of Šešula extends an invitation. With its turquoise waters and
              tranquil ambience, it&apos;s a haven where one can truly relax,
              reflect, and revel in the untouched beauty of Šolta.
            </p>
          </div>
          <div className="containerImage">
            <Image
            priority
              src="/assets/solta-sojourn/group/g3.png"
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

export default SoltaSojourn;
