export default function Test() {
  function fn() {
    console.log(chrome.notifications);
    chrome.notifications.create('test', {
      type: 'basic',
      iconUrl: './assets/icon/icon48.png',
      title: '圣嘉然',
      message: "<a href='www.baidu.com'>夹心糖屁用没有</a>",
      isClickable: true,
      buttons: [
        {
          title: '确定',
          iconUrl: './assets/icon/icon48.png',
        },
      ],
    });
    chrome.notifications.getAll(function (notifications) {
      console.log(notifications);
    });
  }
  // 监听消息
  chrome.notifications.onButtonClicked.addListener(function (
    notificationId,
    buttonIndex,
  ) {
    console.log(notificationId);
    console.log(buttonIndex);
  });
  return (
    <>
      <button onClick={fn}>触发个通知</button>
    </>
  );
}
