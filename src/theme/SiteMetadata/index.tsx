import React from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import SiteMetadata from '@theme-original/SiteMetadata';

// The site has a single Docusaurus locale (ko); English posts live in a second
// blog instance under /en. Override the document language for those pages so
// browsers, search engines and screen readers treat them as English.
function isEnglishPath(pathname: string): boolean {
  return pathname === '/en' || pathname.startsWith('/en/');
}

export default function SiteMetadataWrapper(): React.JSX.Element {
  const { pathname } = useLocation();
  return (
    <>
      <SiteMetadata />
      {isEnglishPath(pathname) && (
        <Head>
          <html lang="en" />
          <meta property="og:locale" content="en" />
        </Head>
      )}
    </>
  );
}
