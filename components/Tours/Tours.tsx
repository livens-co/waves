import Image from "next/image";
import "./style.scss";

import data from "../../data/data.js";
import Link from "next/link";

const Tours = () => {
  return (
    <div className="tours">
      <h1 className="toursSectionTitle">Breathtaking tours</h1>
      <p className="tourContainerText">
        Let the wind guide you through a unique sensory <br /> voyage, finely
        tailored by Waves & More.
      </p>
      <div className="tourList">
        {data.locations
          .map((tour) => (
            <Link
              href={`/tours/${tour.href}`}
              className="tourContainer"
              key={tour.id}
            >
              <Image priority src={tour.image} alt={tour.name} width={200} height={75} />
              <div className="imageOverlay" />
              <p>{tour.name}</p>
            </Link>
          ))
          .splice(0, 8)}
      </div>
      
      <div className="backgroundImage">
        <Image
        priority
          src="/assets/wavesBoat.webp"
          alt="Waves & More"
          width={200}
          height={75}
        />
      </div>
    </div>
  );
};

export default Tours;


