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
        transitionDelay: openMenu ? "0s" : "0.1s",
      }}
    >
      <div className="backgroundImage">
        <Image src="/assets/menuBackground.webp" alt="Waves & More" fill />
        <div className="overlay" />
      </div>
      <div className="logoMobile">
          <Image
            priority
            src="/assets/logo.webp"
            alt="Waves&More Logo"
            width={200}
            height={75}
          />
        </div>
      <div className="container">
        <div className="navigation">
          <div className="mainLinks">
            <div className="menuLink">
              <Link href="/" className="link" onClick={closeMenu}>
                Home
              </Link>
            </div>
            <div className="menuLink">
              <Link href="/tours" className="link" onClick={closeMenu}>
              Seafaris Tours
              </Link>
            </div>
            <div className="menuLink">
              <Link href="/fleet-and-crew" className="link" onClick={closeMenu}>
              Fleet & Crew
              </Link>
            </div>
          </div>
          <div className="menuBookNow">
          <Link href="/booking"  onClick={closeMenu}>
              Book now
              </Link>
          </div>
          <div className="mobileLinks">
            <div className="menuLink">
              <Link
                href="/"
                className="link"
                onClick={closeMenu}
                style={{
                  top: openMenu ? "0" : "100px",
                  transitionDelay: openMenu ? "0.7s" : "0s",
                }}
              >
                Home
              </Link>
              <div className="menuLinkWrapper" />
            </div>
            <div className="menuLink">
              <Link
                href="/tours"
                className="link"
                onClick={closeMenu}
                style={{
                  top: openMenu ? "0" : "100px",
                  transitionDelay: openMenu ? "0.8s" : "0s",
                }}
              >
                Seafaris Tours
              </Link>
              <div className="menuLinkWrapper" />
            </div>
            <div className="menuLink">
              <Link
                href="/fleet-and-crew"
                className="link"
                onClick={closeMenu}
                style={{
                  top: openMenu ? "0" : "100px",
                  transitionDelay: openMenu ? "0.9s" : "0s",
                }}
              >
                Fleet & Crew
              </Link>
              <div className="menuLinkWrapper" />
            </div>
            <div className="menuLink">
              <Link
                href="/booking"
                className="link "
                onClick={closeMenu}
                style={{
                  top: openMenu ? "0" : "100px",
                  transitionDelay: openMenu ? "1s" : "0s",
                }}
              >
                Book now
              </Link>
              <div className="menuLinkWrapper" />
            </div>
          </div>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/waves_more/" target="_blank">
            <InstagramIcon />
            Instagram
          </a>

          <a href="https://www.tiktok.com/@wavesnmore" target="_blank">
            Tik Tok
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61550552973354"
            target="_blank"
          >
            <FacebookIcon />
            Facebook
          </a>
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
