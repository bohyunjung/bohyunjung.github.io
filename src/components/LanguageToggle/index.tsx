import React from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

const LANG_KEY = 'bhj-lang';

async function switchTo(lang: 'ko' | 'en', pathname: string) {
  try { localStorage.setItem(LANG_KEY, lang); } catch {}

  const fallback = lang === 'en' ? '/en' : '/';
  const target =
    lang === 'en'
      ? pathname === '/' ? '/en' : `/en${pathname}`
      : pathname.replace(/^\/en/, '') || '/';

  // If the target is not the fallback, verify the page exists first.
  // A missing post (404) falls back to the language root instead.
  if (target !== fallback) {
    try {
      const res = await fetch(target, { method: 'HEAD' });
      window.location.href = res.ok ? target : fallback;
      return;
    } catch {
      // Network error — best-effort fallback
    }
  }
  window.location.href = fallback;
}

export default function LanguageToggle() {
  const { pathname } = useLocation();
  const isEnglish = pathname.startsWith('/en');

  return (
    <div className={styles.toggle}>
      <button
        className={`${styles.btn} ${!isEnglish ? styles.active : ''}`}
        onClick={() => switchTo('ko', pathname)}
      >
        한국어
      </button>
      <span className={styles.sep}>/</span>
      <button
        className={`${styles.btn} ${isEnglish ? styles.active : ''}`}
        onClick={() => switchTo('en', pathname)}
      >
        English
      </button>
    </div>
  );
}
