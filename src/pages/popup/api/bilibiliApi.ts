// // 官方动态
// export const ASOULDYNAMICHISTORY =
//   'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?visitor_uid=28114094&host_uid=703007996&need_top=1&platform=web';

// 获取直播间状态

import axios from 'axios';

import { asoulRoomIdList, uidDict } from '@/pages/popup/config/asoul';
import { httpGet, httpPost } from '@/pages/popup/utils/axios';

// 获取单个直播间的状态
export function getLiveStatus(roomID: number | string) {
  return httpGet(`http://api.live.bilibili.com/room/v1/Room/room_init?id=${roomID}`);
}

// 批量获取直播间状态
export function getLiveStatusList() {
  return axios.all(
    asoulRoomIdList.map((roomID) => {
      return getLiveStatus(roomID);
    }),
  );
}

// 单接口获取直播间状态
export function getLiveStatusList2() {
  return httpGet('http://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids', {
    uids: [672328094, 672346917, 672353429, 351609538, 672342685],
  });
}

// 获取主播信息
export function getAnchorInfo(uid: number | string) {
  return httpGet(`http://api.live.bilibili.com/live_user/v1/Master/info?uid=${uid}`);
}

// 组合接口 通过获取直播间状态获取主播信息
export function getAnchorInfoByLiveStatus() {
  // 主播信息
  const anchorInfoList: any[] = [];
  // 直播间状态
  const liveStatusList: any[] = [];
  axios
    .all(
      asoulRoomIdList.map((roomID) => {
        return getLiveStatus(roomID);
      }),
    )
    .then((res) => {
      let uidList: any[] = [];
      res.forEach((item) => {
        uidList.push(item.data.data.uid);
        liveStatusList.push(item.data.data);
      });

      axios
        .all(
          uidList.map((uid) => {
            return getAnchorInfo(uid);
          }),
        )
        .then((res) => {
          res.forEach((item) => {
            anchorInfoList.push(item.data.data);
          });
        });
    });
  console.log('直播间状态', liveStatusList);
  console.log('主播信息', anchorInfoList);
  // 组合数据
  const anchorInfoList2: any[] = [];
  liveStatusList.forEach((item, index) => {
    console.log(item);
    if (item.room_id === anchorInfoList[index].room_id) {
      console.log(1111);
    }
  });
  console.log(anchorInfoList2);
  return null;
}
