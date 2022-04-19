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

// 获取二创推荐
export function getRecomend(page: number = 1) {
  return httpGet('https://api.asoul.cloud:8000/getBV', {
    page: page,
    tag_id: 0,
    sort: 4,
    part: 0,
    rank: 0,
    ctime: 0,
    type: 1,
  });
}
