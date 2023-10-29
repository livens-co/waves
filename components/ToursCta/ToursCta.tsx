import Link from "next/link";
import "./style.scss";
import Image from "next/image";

const ToursCta = () => {
  return (
    <div className="toursCta">
      <div className="imagesContainer">
        <Image priority src="/assets/cta.png" alt="" height={400} width={400} />
        <div className="imageOverlay" />
      </div>

      <div className="ctaContent">
        <h2>
          Find next <br /> available date
        </h2>
        <Link href="/booking" className="buttonInvert">
          Book now
        </Link>
        <div className="title">
          <p>Grab Friends & Set Sail:</p>
          <p>Timeless Adventures Await</p>
        </div>
      </div>
    </div>
  );
};

export default ToursCta;
