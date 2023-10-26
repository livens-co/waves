import Link from "next/link";
import "./style.scss";
import Image from "next/image";

const ToursCta = () => {
  return (
    <div className="toursCta">
      {/* <div className="bgImages"> */}
        <div className="imagesContainer">
          <Image src="/assets/cta.png" alt="" fill />
          <div className="imageOverlay" />
        </div>
      {/* </div> */}
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
