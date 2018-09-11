# GoogleCalenderからLine通知

Googleカレンダーに所定のキーワードが含まれていたら、Line Notifyに通知します。
例：翌日に"愛妻弁当"というイベントが登録されていたら、妻とLine Notifyが登録されているグループチャットにお弁当がいる旨を通知します。

## 使い方
1. LINE Notifyのトークンを取得
2. Apps ScriptのスクリプトプロパティにMAIL_ADDRESSとNOTIFY_TOKENを設定
3. notifyObento.gsをGoogle Apps Scriptに設定(動作トリガは適宜設定)
4. キーワード、通知内容は内容に応じてカスタマイズ
5. トリガが起動すればLineに通知が飛ぶ
6. 以上