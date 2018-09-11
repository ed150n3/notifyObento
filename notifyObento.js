function orderObento() {
  
  // UserPropertyを取得
  const mail = PropertiesService.getScriptProperties().getProperty('MAIL_ADDRESS');
  console.log(mail);
  
  // カレンダーオブジェクトを取得
  const cal = CalendarApp.getCalendarById(mail);

  // 翌日のイベントリストを取得
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  console.log(tomorrow.getDate());
  const events = cal.getEventsForDay(tomorrow);
  
  // イベントリストをループ
  events.forEach(function(event) {
    // イベント名を取得
    const title = event.getTitle();
    
    console.log(title);
    
    // 'お弁当'の登録があるか
    if( title == '愛妻弁当' ) {
      // 愛妻弁当注文
      orderAisaiBento();
    }
  });
}

// 愛妻弁当注文
function orderAisaiBento(){
  
  // get Line Notify token.
  const token = PropertiesService.getScriptProperties().getProperty('NOTIFY_TOKEN');
  const options =
  {
   "method"  : "post",
   "payload" : "message=明日は愛妻弁当が食べたいわ",
   "headers" : {"Authorization" : "Bearer "+ token}
  };

   // ライン通知送信
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);
}