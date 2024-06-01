'use client';

import Aside from './components/Aside';
import MainContain from './components/MainContain';
import NavTags from './components/NavTags';
import styles from './page.module.scss';

export default function Blog() {
  return (
    <>
      <div className={styles['blog-home']}>
        <div className="nav-contain">
          <NavTags />
        </div>
        <MainContain />
        <Aside />
      </div>
    </>
  );
}
