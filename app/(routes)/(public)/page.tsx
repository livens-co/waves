import Crew from "@/components/Crew/Crew";
import "./page.scss";
import Destinations from "@/components/Destinations/Destinations";
import Discover from "@/components/Discover/Discover";
import Experiences from "@/components/Experiences/Experiences";
import Tours from "@/components/Tours/Tours";
import ExperienceWaves from "@/components/ExperienceWaves/ExperienceWaves";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="homePage">
      {/* HEADER */}
      <header>
        <div className="headerImage">
          <Image
            priority
            src="/assets/homepageHeader.jpeg"
            alt="Sail"
            height={650}
            width={1440}
          />
        </div>
        <div className="headerLogo">
          <Image
            priority
            src="/assets/logo.webp"
            alt="Waves&More Logo"
            width={200}
            height={75}
          />
        </div>
        <div className="headerText">
          <h1>We sail. You dream.</h1>
        </div>
        <div className="headerOverlay"></div>
      </header>

      {/* FIND DESTINATION */}
      <section>
        <Destinations />
      </section>

      {/* EXPERIENCE WAVES */}
      <section>
        <ExperienceWaves />
      </section>

      {/* CREW */}
      <section>
        <Crew />
      </section>

      {/* QUOTE */}
      <section>
        <div className="qoute">
          <p>
            Over <span>2,800 hours</span> of sunshine along a coastline long{" "}
            <span>1,700 km</span> offer countless opportunities.
          </p>
        </div>
      </section>

      {/* TOURS */}
      <section>
        <Tours />
      </section>

      {/* EXPERIENCES */}
      <section>
        <Experiences />
      </section>

      {/* DISCOVER */}
      <section>
        <Discover />
      </section>
    </div>
  );
};

export default HomePage;
