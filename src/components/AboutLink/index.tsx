import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

export default function AboutLink({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const { pathname } = useLocation();
  const to = pathname.startsWith('/en') ? '/en/about' : '/about';

  if (mobile) {
    return (
      <li className="menu__list-item">
        <Link className="menu__link" to={to} onClick={onClick}>About</Link>
      </li>
    );
  }

  return <Link className="navbar__item navbar__link" to={to}>About</Link>;
}
