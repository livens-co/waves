import Destinations from "@/components/Destinations/Destinations";
import "./style.scss";
import Image from "next/image";
import ToursCta from "@/components/ToursCta/ToursCta";

const FleetAndCrewPage = () => {
  return (
    <div className="fleetPage">
      <header>
        <div className="headerLogo">
          <Image
          priority
            src="/assets/logo.webp"
            alt="Waves & more"
            width={200}
            height={200}
          />
        </div>
        <div className="headerText">
          <h1>Fleet & Crew</h1>
        </div>
        <div className="headerImage">
          <Image
          priority
            src="/assets/breathtaking-brac/14.jpeg"
            width={1400}
            height={650}
            alt="3 Islands"
          />
          <div className="headerOverlay" />
        </div>
      </header>

      {/* FLEET */}

      <div className="fleetSection">
        <div className="fleetImage">
          <Image
          priority
            src="/assets/fleet1.jpeg"
            alt="Boat"
            width={800}
            height={750}
          />
        </div>
        <div className="fleetText">
          <p>
            The jewel of our fleet is the Felix 33 - a beacon of luxury and
            efficiency. This brand-new speedboat, fresh from the docks of 2023,
            stands as a testament to our commitment to delivering exceptional
            boating experiences. Designed to accommodate up to 14 individuals,
            including our esteemed skipper and hostess, it promises
            entertainment and convenience with features like a state-of-the-art
            Radio, USB, and MP3 player. Beyond entertainment, the boat caters to
            every need, boasting amenities such as a refrigerator, deck shower,
            cockpit table, and an electric toilet.
          </p>
        </div>
      </div>
      <div className="fleetSection">
        <div className="fleetText">
          <p>
            For those seeking an adventurous tinge, Felix 33 has snorkelling
            gear, a wakeboard, and beach towels. Structurally, the boat is 9.90
            meters in length and 2.78 meters in width, housing a water tank
            capacity of 150 litres and a fuel tank that can hold up to 400
            litres. Its VM 350HP ensures you are cruising the waves with power
            and grace. And remember, this is just the beginning; Waves & More is
            already on the horizon of introducing even more magnificent boats
            that will surpass your wildest expectations.
          </p>
        </div>
        <div className="fleetImage">
          <Image
          priority
            src="/assets/fleet2.jpeg"
            alt="Boat"
            width={800}
            height={750}
          />
        </div>
      </div>

      {/* CREW */}
      <div className="crewSection">
        <div className="crewImage">
          <Image
          priority
            src="/assets/ante.png"
            alt="Ante Crew"
            height={750}
            width={800}
          />
        </div>
        <div className="crewText">
          <p>
            Guiding you through your journey is Ante, our seasoned sailor whose
            expertise is unparalleled. He&apos;s not just any sailor; he knows
            every wave, understands the ocean&apos;s moods, and ensures your
            spectacular voyage. Alongside him is Thomas. Originally from
            Austria, Thomas was irresistibly drawn to the Croatian coast&apos;s
            beauty and allure. Today, he wears multiple hats as an investor and
            entrepreneur, ensuring that Waves & More continually elevate its
            standards, meeting and exceeding your maritime desires. With Ante
            and Thomas at the helm, rest assured you&apos;re safe and capable.
          </p>
        </div>
      </div>

      {/* TOURS */}
      <div className="fleetTours">
        <h1>Choose your perfect tour</h1>
        <Destinations />
      </div>

      {/* BOOK NOW */}
      <div className="fleetCta">
        <ToursCta />
      </div>
    </div>
  );
};

export default FleetAndCrewPage;
