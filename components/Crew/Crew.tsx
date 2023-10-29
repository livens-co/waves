import Image from "next/image";
import "./style.scss";

const Crew = () => {
  return (
    <div className="crew">
      <div className="image">
        <Image
        priority
          src="/assets/ante.png"
          alt="Ante Crew"
          height={750}
          width={800}
        />
      </div>
      <div className="content">
        <p>
          Over the years, I&rsquo;ve navigated waters far and wide, but the most
          rewarding part of sailing has always been sharing the magic of the
          sea. With the compass set and sails ready, all we await is your spirit
          of adventure.
        </p>
        <p>
          <span>Meet Ante</span>
          <br />
          Young & experienced sailor,
          <br /> Waves Co-Founder
        </p>
      </div>
    </div>
  );
};

export default Crew;
