import React from 'react';
import { useRouter } from 'next/router';
import { NavLinkProps } from '../../interfaces/propTypes';

const NavLink = ({ route, children, color, large, onClick }: NavLinkProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <a
      href={route}
      onClick={onClick}
      style={{ color, fontSize: large ? '0.9rem' : '1.2rem' }}
      className={currentRoute === route ? 'active' : ''}
    >
      {children}
    </a>
  );
};

export default NavLink;