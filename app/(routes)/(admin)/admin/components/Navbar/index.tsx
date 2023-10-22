import { UserButton } from "@clerk/nextjs";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="adminNavbar">
      <div className="logo">
        <Image
          priority
          src="/assets/logo.webp"
          alt="Waves&more"
          width={158}
          height={65}
        />
      </div>
      <div className="links">
        <div className="mainLinks">
          <Link href="/admin">Home</Link>
          <Link href="/admin/bookings">Bookings</Link>
        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
