import React from 'react';
import { useLocation } from '@docusaurus/router';

export default function FooterCopyright({ copyright }: { copyright: string }) {
  const { pathname } = useLocation();
  const isEnglish = pathname.startsWith('/en');

  const disclaimer = isEnglish
    ? 'All opinions expressed here are my own.'
    : '이 블로그의 모든 의견은 개인적인 것입니다.';

  return (
    <div className="footer__copyright">
      <div dangerouslySetInnerHTML={{ __html: copyright }} />
      <div className="footer__disclaimer">{disclaimer}</div>
    </div>
  );
}
