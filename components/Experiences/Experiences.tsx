import "./style.scss";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Image from "next/image";

const Experiences = () => {
  return (
    <div className="experiences">
      <h1>Waves experiences</h1>
      <div className="carousel">
        <button className="nav">
          <ChevronLeftRoundedIcon />
        </button>
        <div className="carouselItem">
          <div className="image">
            <Image
              src={"https://media-public.canva.com/07nEQ/MAEHv907nEQ/1/t.jpg"}
              alt=""
              width={200}
              height={75}
            />
          </div>
          <p>
            The crew was warm and attentive. Sailing along the pristine
            coastline, with the wind in our hair and the melody of our chosen
            music was absolutely magical.
          </p>
        </div>
        <div className="carouselItem">
          <div className="image">
            <Image
              src={
                "https://media-public.canva.com/MAC1DPl1vsM/1/thumbnail-1.jpg"
              }
              alt=""
              width={200}
              height={75}
            />
          </div>
          <p>
            Our day with Waves & More exceeded all expectations. The boat itself
            was a sleek and modern sanctuary on the water, equipped with
            everything we could possibly need.
          </p>
        </div>
        <button className="nav">
          <ChevronRightRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default Experiences;
