"use client";

import "./style.scss";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  openMenu: boolean;
  closeMenu: () => void;
}

const Menu = ({ openMenu, closeMenu }: MenuProps) => {
  return (
    <div
      className="menu"
      style={{
        right: openMenu ? "0" : "-100%",
        transitionDelay: openMenu ? "0s" : "0.55s",
      }}
    >
      <button onClick={closeMenu} className="closeButton">
        Close
      </button>
      <div className="backgroundImage">
        <Image src="/assets/menuBackground.webp" alt="Waves & More" fill />
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="navigation">
          <div className="mainLinks">
            <div className="link">Seafaris</div>
            <div className="link">Destinations</div>
            <div className="link">Waves Fleet</div>
            <div className="link">Crew</div>
          </div>
          <Link href="/booking" className="menuBookNow">
            Book now
          </Link>
        </div>
        <div className="social">
          <Link href="/">
            <InstagramIcon />
            Instagram
          </Link>
          <Link href="/">Tik Tok</Link>
          <Link href="/">
            <FacebookIcon />
            Facebook
          </Link>
          <Link href="/">
            <LinkedInIcon />
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="logo">
          <Image
            priority
            src="/assets/logo.webp"
            alt="Waves&More Logo"
            width={200}
            height={75}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
