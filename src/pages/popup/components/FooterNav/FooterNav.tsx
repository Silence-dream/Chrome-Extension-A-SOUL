import styles from './FooterNav.module.scss';

export default function FooterNav() {
  return (
    <div id="footerNav">
      <div className={styles.setting}>
        <button>设置</button>
      </div>
      <div className={styles.portrait}>
        <img
          src="https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202203291456201.jpg"
          alt="图片失效了"
        />
      </div>
    </div>
  );
}
