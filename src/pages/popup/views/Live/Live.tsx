import { useEffect, useState } from 'react';

import { GETLIVESTATUSLIST, GETLIVESTATUSLIST2 } from '@/pages/popup/api/bilibiliApi';
chrome.cookies.get(
  {
    url: 'http://www.bilibili.com',
    name: 'bili_jct',
  },
  function (cookie) {
    console.log(cookie);
    document.cookie = cookie;
  },
);
export default function Live() {
  // 直播信息
  const [liveStatusList, setLiveStatusList] = useState<any[]>([]);
  useEffect(() => {
    GETLIVESTATUSLIST().then((res) => {
      console.log(res);
      let liveList: any[] = [];
      res.forEach((item) => {
        // setLiveStatusList((liveStatusList) => [...liveStatusList, item.data.data]);
        liveList.push(item.data.data);
      });
      setLiveStatusList(liveList);
    });
    // test
    GETLIVESTATUSLIST2().then((res) => {
      // BUG csrf 校验错误 退出b站账号即可登录
      console.log(res);
    });
  }, []);
  console.log(liveStatusList);
  return (
    <>
      <div>123</div>
    </>
  );
}
