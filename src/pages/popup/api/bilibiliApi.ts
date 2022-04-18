// // 官方动态
// export const ASOULDYNAMICHISTORY =
//   'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?visitor_uid=28114094&host_uid=703007996&need_top=1&platform=web';

// 获取直播间状态

import { httpGet } from '@/pages/popup/utils/axios';

// 获取单个直播间的状态
export function getLiveStatus(roomID: number | string) {
  return httpGet(`http://api.live.bilibili.com/room/v1/Room/room_init?id=${roomID}`);
}

// 单接口获取直播间状态
export function getLiveStatusList() {
  return httpGet('http://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids', {
    uids: [672328094, 672346917, 672353429, 351609538, 672342685],
  });
}

// 获取主播信息
export function getAnchorInfo(uid: number | string) {
  return httpGet(`http://api.live.bilibili.com/live_user/v1/Master/info?uid=${uid}`);
}
