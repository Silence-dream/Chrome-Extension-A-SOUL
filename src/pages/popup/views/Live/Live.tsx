import * as _ from 'lodash-es';
import { useEffect, useState } from 'react';

import { getLiveStatusList } from '@/pages/popup/api/bilibiliApi';

import styles from './Live.module.scss';

export default function Live() {
  // 直播信息
  const [liveStatusList, setLiveStatusList] = useState<any[]>([]);
  useEffect(() => {
    // 获取直播信息
    getLiveStatusList().then((res) => {
      console.log(_.toArray(res.data.data));
      setLiveStatusList(_.toArray(res.data.data));
    });
  }, []);

  function openLive(room_id: number) {
    window.open(`https://live.bilibili.com/${room_id}`);
  }

  return (
    <div id="live">
      <ul className={styles['live-box']}>
        {liveStatusList.map((item: any) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
          <li
            className={styles.item}
            key={item.uid}
            onClick={() => openLive(item.room_id)}
          >
            <div className={styles['left-box']}>
              <div className={styles.avatar}>
                <img src={item.face} alt="图片失效了" />
              </div>
            </div>
            <div className={styles['right-box']}>
              <div className="username">{item.uname}</div>
              <div className="introduction">{item.title}</div>
              {/*  是否直播*/}
              {item.live_status == 1 ? (
                <div className={styles['is-live']}>直播中...</div>
              ) : (
                <div className={styles['is-live']}>未开播...</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
