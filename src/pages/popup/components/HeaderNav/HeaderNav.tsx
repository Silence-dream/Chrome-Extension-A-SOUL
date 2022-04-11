import { Link, useLocation } from 'react-router-dom';

import styles from './HeaderNav.module.scss';
export default function HeaderNav() {
  let pathname = useLocation().pathname;
  return (
    <>
      <div id={styles.headerNav}>
        <Link to="/" className={pathname === '/' ? styles.active : undefined}>
          综合
        </Link>
        <Link
          to="/timeline"
          className={pathname === '/timeline' ? styles.active : undefined}
        >
          时间表
        </Link>
        <Link to="/live" className={pathname === '/live' ? styles.active : undefined}>
          直播
        </Link>
      </div>
    </>
  );
}
