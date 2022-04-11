import styles from './VideoReatedList.module.scss';

export default function VideoReateddivst() {
  let test = new Array(10).fill(0);
  return (
    <div className="videoReateddivst">
      <div className={styles.context}>
        {test.map((item) => {
          return (
            <div className={styles.item} key={item}>
              <div className={styles.cover}>
                <img
                  src="https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202203291456201.jpg"
                  alt="图片没有了"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
