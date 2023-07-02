import React, { useState } from 'react';
import Image from 'next/image';
import { useWindowSize } from '../../hooks';
import LogoImage from '../../public/assets/images/logo.png';
import NavLink from './NavLink';
import { useSession } from 'next-auth/react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const size = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <NavLink route="/">
          <Image src={LogoImage} alt="logo" width={120} height={30} />
        </NavLink>
      </div>

      <div>
        {size.width > 768 ? (
          <>
            <NavLink route="/">Home</NavLink>
            <NavLink route="/products">Products</NavLink>
            {session ? (
              <NavLink route="/profile">
                <BsFillPersonFill size={30} />
              </NavLink>
            ) : (
              <NavLink route="/login">Login</NavLink>
            )}
          </>
        ) : (
          <div onClick={openMenu}>
            <AiOutlineMenu size={30} />
          </div>
        )}
      </div>

      {showMenu && (
        <div>
          <div onClick={closeMenu}>
            <AiOutlineClose size={40} color="white" />
          </div>
          <div>
            <NavLink route="/" large color="white" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink route="/products" large color="white" onClick={closeMenu}>
              Products
            </NavLink>
            <NavLink route="/login" large color="white" onClick={closeMenu}>
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;