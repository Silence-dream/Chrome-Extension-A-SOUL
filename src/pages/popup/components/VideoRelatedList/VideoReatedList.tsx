import axios from 'axios';
import { useEffect, useState } from 'react';

import { _axiosBase, httpGet } from '@/pages/popup/utils/axios';

import styles from './VideoReatedList.module.scss';

export default function VideoReateddivst() {
  let [videoList, setVideoList] = useState([]);
  useEffect(() => {
    httpGet('/x/web-interface/archive/related?bvid=BV1FX4y1g7u8').then((res) => {
      setVideoList(res.data.data);
    });

    console.log(_axiosBase);
  }, []);
  function openVideo(blink: string) {
    window.open(blink);
  }
  return (
    <div className="videoReateddivst">
      <div className={styles.context}>
        {videoList.map((item: any) => {
          return (
            <div className={styles.item} key={item.aid}>
              <div className={styles.cover} onClick={() => openVideo(item.short_link)}>
                <img src={item.pic} alt="图片没有了" />
                <div className={styles.upname}>
                  <div>{item.owner.name}</div>
                </div>
                <div className={styles.title}>
                  <div>{item.title}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
