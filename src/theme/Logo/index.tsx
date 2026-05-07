import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

export default function Logo(props: {
  className?: string;
  titleClassName?: string;
  imageClassName?: string;
}) {
  const { navbar: { title } } = useThemeConfig();
  const { pathname } = useLocation();
  const { imageClassName, titleClassName, ...rest } = props;
  const to = pathname.startsWith('/en') ? '/en' : '/';

  return (
    <Link to={to} {...rest}>
      {title != null && <b className={titleClassName}>{title}</b>}
    </Link>
  );
}
