import "./style.scss";

import SendIcon from "@mui/icons-material/Send";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <div className="column">
          <h3>
            <SendIcon />
            Follow us
          </h3>
          <a href="https://www.instagram.com/waves_more/" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@wavesnmore" target="_blank">Tik Tok</a>
          <a href="https://www.facebook.com/profile.php?id=61550552973354" target="_blank">Facebook</a>
          {/* <a href="/" target="_blank">LinkedIn</a> */}
        </div>
        <div className="column">
          <h3>
            <LocationOnOutlinedIcon />
            Find us
          </h3>
          <p>Marina Zenta</p>
          <p>Obala Lazareta bb</p>
          <p>21 000 Split, Croatia</p>
        </div>
        <div className="column">
          <h3>
            <LocalPhoneOutlinedIcon />
            Contact us
          </h3>
          <a href="mailto:reservations@waves.hr">reservations@waves.hr</a>
          <a href="tel:+385953700141">+385 95 3700 141</a>
        </div>
        <div className="column">
          <h3>
            <SailingOutlinedIcon />
            Best tours
          </h3>
          <Link href='/tours/captivating-korcula'>Captivating Korčula</Link>
          <Link href='/tours/hvar-odyssey'>Hvar Odyssey</Link>
          <Link href='/tours/vibrant-vis'>Vibrant Vis</Link>
          
        </div>
      </div>
      <div className="bottom">
        <p>
          &copy; Adriatic Fantasy Cruises Ltd., 2023.
          <br />
          Creative by{" "}
          <Link href="//www.rbrn.hr" target="_blank">
            reborn agency
          </Link>
          , developed by{" "}
          <Link href="//www.livens.co" target="_blank">
            livens
          </Link>
          .
        </p>

        <div className="legal">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
