
import './style.scss';

import SendIcon from '@mui/icons-material/Send';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <ul>
          <h3>
            <SendIcon />
            Follow us
          </h3>
          <li>Instagram</li>
          <li>Tik Tok</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
        </ul>
        <ul>
          <h3>
            <LocationOnOutlinedIcon />
            Find us
          </h3>
          <li>Marina Zenta</li>
          <li>Obala Lazareta bb</li>
          <li>21 000 Split, Croatia</li>
        </ul>
        <ul>
          <h3>
            <LocalPhoneOutlinedIcon />
            Contact us
          </h3>
          <li>reservations@waves.hr</li>
          <li>+385 95 3700 141</li>
        </ul>
        <ul>
          <h3>
            <SailingOutlinedIcon />
            Best tours
          </h3>
          <li>Blue & Green Cave</li>
          <li>Military Tunnels</li>
          <li>3 islands Experience</li>
        </ul>
      </div>
      <div className="bottom">
        <p>
          &copy; Adriatic Fantasy Cruises Ltd., 2023.
          <br />
          Creative by <Link href="//www.rbrn.hr" target='_blank'>reborn agency</Link>, developed
          by <Link href="//www.livens.co" target='_blank'>livens</Link>.
        </p>

        <div className="legal">
          <Link href='/'>Privacy Policy</Link>
          <Link href='/'>Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
