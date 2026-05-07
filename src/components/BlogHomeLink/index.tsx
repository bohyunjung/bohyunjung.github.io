import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

export default function BlogHomeLink({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const { pathname } = useLocation();

  if (!mobile) return null;

  const to = pathname.startsWith('/en') ? '/en' : '/';

  return (
    <li className="menu__list-item">
      <Link className="menu__link" to={to} onClick={onClick}>Blog</Link>
    </li>
  );
}
