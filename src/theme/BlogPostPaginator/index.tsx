import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type PaginatorItem = { permalink: string; title: string };

export default function BlogPostPaginator({
  prevItem,
  nextItem,
}: {
  prevItem?: PaginatorItem;
  nextItem?: PaginatorItem;
}) {
  return (
    <nav className={`pagination-nav docusaurus-mt-lg ${styles.nav}`}>
      <div>
        {prevItem && (
          <Link className={styles.link} to={prevItem.permalink}>
            <span className={styles.arrow}>←</span> {prevItem.title}
          </Link>
        )}
      </div>
      <div className={styles.next}>
        {nextItem && (
          <Link className={styles.link} to={nextItem.permalink}>
            {nextItem.title} <span className={styles.arrow}>→</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
