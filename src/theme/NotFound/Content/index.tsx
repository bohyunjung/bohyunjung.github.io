import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function NotFoundContent({ className }: { className?: string }) {
  const { pathname } = useLocation();
  const isEnglish = pathname.startsWith('/en');

  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          {isEnglish ? (
            <>
              <h1 className="hero__title">Page Not Found</h1>
              <p>The page you were looking for doesn't exist or has been moved.</p>
              <Link to="/en">← Back to home</Link>
            </>
          ) : (
            <>
              <h1 className="hero__title">페이지를 찾을 수 없습니다</h1>
              <p>찾으시는 페이지가 없거나 이동되었습니다.</p>
              <Link to="/">← 홈으로 돌아가기</Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
