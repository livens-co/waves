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
         <div className="line" style={{ width: '70%' }}/>
              <div className="line" style={{ width: '85%' }}/>
              <div className="line" style={{ width: '100%' }}/>
          
        </div>
        {/* <div className="circle">
            <div className="menu-btn" onClick={() => setOpenMenu(!openMenu)}>
              <div className="line" style={{ width: '70%' }}></div>
              <div className="line" style={{ width: '85%' }}></div>
              <div className="line" style={{ width: '100%' }}></div>
            </div>
          </div> */}
      </nav>

      <Menu openMenu={openMenu} closeMenu={() => setOpenMenu(!openMenu)} />
    </>
  );
};

export default Navbar;
