'use client';

import { useState } from 'react';
import './style.scss';
import Menu from '../Menu';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="menuButton" onClick={() => setOpenMenu(!openMenu)}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </nav>

      <Menu openMenu={openMenu} closeMenu={() => setOpenMenu(!openMenu)} />
    </>
  );
};

export default Navbar;
