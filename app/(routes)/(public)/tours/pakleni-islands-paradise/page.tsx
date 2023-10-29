import Image from "next/image";
import Link from "next/link";

import "../style.scss";
import ToursCta from "@/components/ToursCta/ToursCta";
import Destinations from "@/components/Destinations/Destinations";

const PakleniIslandsParadise = () => {
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
        <h1>Pakleni Islands Paradise</h1>

        <div className="backgroundImage">
          <Image
          priority
            src="/assets/pakleni-islands-paradise/2.jpeg"
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
            src="/assets/pakleni-islands-paradise/1.jpeg"
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
            src="/assets/pakleni-islands-paradise/3.jpeg"
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
            src="/assets/pakleni-islands-paradise/4.jpeg"
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
              Adriatic&apos;s Crown Jewels: <br /> The Pakleni Islands
            </h1>
            <p>
              The Pakleni Islands beckon travellers to a corner of the Adriatic,
              where time seems to stand still, and nature showcases its
              opulence. These islands, strung together like pearls on the
              cerulean expanse, offer an experience that transcends the
              ordinary. The journey begins at Laganini, a haven of seaside
              luxury. Here, one can lounge on sun-kissed decks, with the gentle
              murmur of waves and the rustling of palm leaves orchestrating a
              symphony of relaxation.
            </p>
          </div>
          <div className="containerImage">
            <Image
            priority
              src="/assets/pakleni-islands-paradise/group/g1.png"
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
              src="/assets/pakleni-islands-paradise/group/g2.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="text">
            <h1>
              Gastronomy and <br /> Ambiance Interwoven
            </h1>
            <p>
              From the leisurely allure of Laganini, the voyage takes a
              delightful turn towards the culinary. Toto&apos;s emerges as a
              gastronomic paradise where the flavours of the Adriatic come alive
              in every dish. Each bite is an ode to the rich maritime heritage
              and the island&apos;s bounties. But the culinary journey
              doesn&apos;t end here. Nestled in a secluded bay, Zori promises
              delectable cuisine and an ambience imbued with romance. As the
              golden hues of sunset paint the horizon, Zori becomes the perfect
              backdrop for cherished moments and whispered conversations.
            </p>
          </div>
        </div>
        <div className="tripContainer">
          <div className="text">
            <h1>
              Relaxation Redefined <br /> at Mamato Bar
            </h1>
            <p>
              As the day&apos;s adventures wind down, Mamato Bar awaits.
              It&apos;s not just a venue but an experience, capturing the
              essence of island relaxation. Whether it&apos;s sipping on a
              signature cocktail, indulging in a leisurely chat, or simply
              soaking in the panoramic views, Mamato ensures that every moment
              is memorable. And as the stars twinkle overhead, one thing becomes
              clear: the Pakleni Islands are more than just a destination —
              they&apos;re where memories are crafted, and hearts are forever
              enchanted.
            </p>
          </div>
          <div className="containerImage">
            <Image
            priority
              src="/assets/pakleni-islands-paradise/group/g3.png"
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

export default PakleniIslandsParadise;
