import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getRecomend } from '@/pages/popup/api/bilibiliApi';

import styles from './VideoReatedList.module.scss';
// 请求页码
let page = 1;
export default function VideoReateddivst() {
  let [videoList, setVideoList] = useState<any[]>([]);
  let [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    getRecomend(page).then((res) => {
      setVideoList(res.data);
    });
  }, []);
  function openVideo(bvid: string) {
    window.open(`https://www.bilibili.com/video/${bvid}`);
  }
  // 加载更多
  function fetchNewData() {
    if (page >= 10) {
      setHasMore(false);
      return false;
    }
    page++;
    getRecomend(page).then((res) => {
      setVideoList([...videoList, ...res.data]);
    });
  }

  return (
    <div className="videoReateddivst">
      <div className={styles.context} id="scrollableDiv">
        <InfiniteScroll
          dataLength={videoList.length} //This is important field to render the next data
          next={fetchNewData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>没有更多数据了....</b>
            </p>
          }
        >
          {videoList.map((item: any) => {
            return (
              <div className={styles.item} key={item.pubdate}>
                <div className={styles.cover} onClick={() => openVideo(item.bvid)}>
                  <img src={item.pic} alt="图片没有了" />
                  <div className={styles.upname}>
                    <div>{item.name}</div>
                  </div>
                  <div className={styles.title}>
                    <div>{item.title}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
