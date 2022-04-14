import { useEffect, useState } from 'react';

import { getLiveStatusList, getLiveStatusList2 } from '@/pages/popup/api/bilibiliApi';

import styles from './Live.module.scss';
export default function Live() {
  // 直播信息
  const [liveStatusList, setLiveStatusList] = useState<any[]>([]);
  useEffect(() => {
    getLiveStatusList().then((res) => {
      let liveList: any[] = [];
      res.forEach((item) => {
        // setLiveStatusList((liveStatusList) => [...liveStatusList, item.data.data]);
        liveList.push(item.data.data);
      });
      setLiveStatusList(liveList);
    });
    // test
    getLiveStatusList2().then((res) => {
      // BUG csrf 校验错误 退出b站账号即可登录
      console.log(res.data);
    });
  }, []);
  console.log(liveStatusList);
  return (
    <div id="live">
      <ul className={styles['live-box']}>
        <li className={styles.item}>
          <div className={styles['left-box']}>
            <div className={styles.avatar}>
              <img
                src="https://i0.hdslb.com/bfs/face/566078c52b408571d8ae5e3bcdf57b2283024c27.jpg"
                alt="图片失效了"
              />
            </div>
          </div>
          <div className={styles['right-box']}>
            <div className="username">这里是up主的名称</div>
            <div className="introduction">这里是简介</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
