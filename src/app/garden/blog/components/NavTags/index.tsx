'use client';

import { useState } from 'react';
import { defaultTagList } from './constants';
import styles from './index.module.scss';
import { Tag } from './types';

function NavTags() {
  const [tagList] = useState<Tag[]>(defaultTagList);

  return (
    <div className={styles['nav-tags']}>
      <h2 className={styles['nav-title']}>分类</h2>
      <ul className={styles['tag-list']}>
        {tagList.map((item) => (
          <li key={item.code} className={styles['tag']}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavTags;
