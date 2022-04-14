// // 官方动态
// export const ASOULDYNAMICHISTORY =
//   'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?visitor_uid=28114094&host_uid=703007996&need_top=1&platform=web';

// 获取直播间状态

import axios from 'axios';

import { asoulRoomIdList } from '@/pages/popup/config/asoul';
import { httpGet, httpPost } from '@/pages/popup/utils/axios';

// 获取单个直播间的状态
export function GETLIVESTATUS(roomID: number | string) {
  return httpGet(`http://api.live.bilibili.com/room/v1/Room/room_init?id=${roomID}`);
}

// 批量获取直播间状态
export function GETLIVESTATUSLIST() {
  return axios.all(
    asoulRoomIdList.map((roomID) => {
      return GETLIVESTATUS(roomID);
    }),
  );
}

// 单接口获取直播间状态
export function GETLIVESTATUSLIST2() {
  return httpPost(
    'https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids',
    {
      uids: [672328094, 672346917, 672353429, 351609538, 672342685],
    },
    {
      headers: {
        authority: 'api.live.bilibili.com',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      },
    },
  );
}
