import styles from './Menu.module.scss';
export default function Menu() {
  return (
    <div id="menu">
      <ul className={styles['ul-box']}>
        <li className={styles.item}>
          <a href="https://www.bilibili.com">
            <span>Home</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href="https://www.bilibili.com">
            <span>Home</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href="https://www.bilibili.com">
            <span>Home</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href="https://www.bilibili.com">
            <span>Home</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href="https://www.bilibili.com">
            <span>Home</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
