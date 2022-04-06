import { Link, useLocation } from 'react-router-dom';

import styles from './HeaderNav.module.scss';
export default function HeaderNav() {
  let pathname = useLocation().pathname;
  return (
    <>
      <div id={styles.headerNav}>
        <Link
          to="/popup.html"
          className={pathname === '/popup.html' ? styles.active : undefined}
        >
          综合
        </Link>
        <Link
          to="/popup.html/timeline"
          className={pathname === '/popup.html/timeline' ? styles.active : undefined}
        >
          时间表
        </Link>
        <Link
          to="/popup.html/live"
          className={pathname === '/popup.html/live' ? styles.active : undefined}
        >
          直播
        </Link>
      </div>
    </>
  );
}
