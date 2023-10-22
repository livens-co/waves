import Image from "next/image";
import "./style.scss";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
// import boat from '../../assets/wavesBoat.webp';

const ExperienceWaves = () => {
  return (
    <div className="experienceWaves">
      <div className="experienceWavesHeader">
        <h1>Sail with Waves & more</h1>
        <h4>and experience</h4>
        <p>
          the thrill of riding new speedboats, complete with onboard facilities
          like a shower and toilet. Enjoy snorkeling, wakeboarding, and relaxing
          on soft beach towels. Our expert team provides extraordinary
          hospitality and skipping experience.
        </p>
      </div>
      <div className="experienceWavesList">
        <ul>
          <li>
            <div className="icon">
              <CheckRoundedIcon />
            </div>
            unforgettable experience
          </li>
          <li>
            <div className="icon">
              <CheckRoundedIcon />
            </div>
            refrigerator, shower & toilet
          </li>
          <li>
            <div className="icon">
              <CheckRoundedIcon />
            </div>
            snorkeling experience & equipment
          </li>
        </ul>
        <ul>
          <li>
            <div className="icon">
              <CheckRoundedIcon />
            </div>
            brand new speedboats
          </li>
          <li>
            <div className="icon">
              <CheckRoundedIcon />
            </div>
            music by your choice
          </li>
          <li>
            <div className="icon">
              <CheckRoundedIcon />
            </div>
            wakeboard & beach towels
          </li>
        </ul>
        <ul>
          <li>
            <div className="icon">
              <CheckRoundedIcon />
            </div>
            drinks & domestic fingerfood
          </li>
          <li>
            <div className="icon">
              <CheckRoundedIcon />
            </div>
            best boat on the coast
          </li>
          <li>
            <div className="icon">
              <CheckRoundedIcon />
            </div>
            professional & hospitality crew
          </li>
        </ul>
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

export default ExperienceWaves;
