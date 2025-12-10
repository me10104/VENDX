export const commandsDataStandard = {
  "自販機": [
    { name: "/自販機登録", description: "新しい自販機を登録します" },
    { name: "/自販機削除", description: "登録済みの自販機を削除します" },
    { name: "/自販機", description: "指定した自販機のパネルを作成します" },
    { name: "/商品追加", description: "指定した自販機に商品を追加します" },
    { name: "/商品編集", description: "指定した商品の情報を編集します" },
    { name: "/商品削除", description: "指定した商品を削除します" },
    { name: "/在庫追加", description: "指定した商品に在庫を追加します" },
    { name: "/在庫引出", description: "指定した商品から在庫を引き出します" },
    { name: "/在庫内容確認", description: "指定した商品の在庫内容を確認します" },
    { name: "/paypay登録", description: "自販機にPayPayを登録します" },
    { name: "/購入者ロール設定", description: "自販機での購入時に付与するロールを設定します" },
    { name: "/購入者ロール一覧", description: "設定済みの購入者ロール設定を表示します" }
  ],
  "パネル": [
    { name: "/配布パネル", description: "配布パネルを作成します" },
    { name: "/配布パネル編集", description: "配布パネルを編集します" },
    { name: "/認証パネル", description: "認証コード入力式の認証パネルを作成します" },
    { name: "/役職パネル", description: "ボタンでロールを付与/削除できるパネルを作成します" },
    { name: "/チケット", description: "チケットパネルを作成します" },
    { name: "/対応状況パネル", description: "対応状況を表示するパネルを作成します" },
    { name: "/ワードパネル", description: "ワードパネルを作成します" },
    { name: "/自動返信パネル", description: "カスタムワード自動返信パネルを表示します" }
  ],
  "モデレーション": [
    { name: "/ban", description: "ユーザーIDでBANを実行します" },
    { name: "/タイムアウト", description: "ユーザーをタイムアウトします" },
    { name: "/メッセージ削除", description: "指定した数のメッセージを削除します" }
  ],
  "サーバー管理": [
    { name: "/ログ設定", description: "各種ログの送信先を設定します" },
    { name: "/自動ロール付与", description: "サーバー参加時に自動でロールを付与します" },
    { name: "/一括ロール付与", description: "サーバーの全メンバーに指定したロールを付与します" },
    { name: "/カテゴリー複製", description: "指定したカテゴリーの設定をそのまま複製します" },
    { name: "/テンプレート作成", description: "現在のサーバーからテンプレートを作成します" },
    { name: "/バックアップ", description: "現在のチャンネルのバックアップまたは復元を行います" },
    { name: "/nuke", description: "指定したチャンネルを削除して同じ場所に同名で作り直します" },
    { name: "/定期メッセージ開始", description: "定期メッセージを開始します" },
    { name: "/定期メッセージ終了", description: "定期メッセージを終了します" }
  ],
  "ユーティリティ": [
    { name: "/埋め込み", description: "埋め込みメッセージを作成します" },
    { name: "/カスタムメッセージ", description: "指定したメッセージをボットが送信します" },
    { name: "/カウント", description: "現在のチャンネルのメッセージ数をカウントします" },
    { name: "/抽選", description: "抽選企画の管理" },
    { name: "/投票", description: "投票・アンケートを作成します" }
  ],
  "連携": [
    { name: "/ユーザー情報", description: "指定したユーザーの情報を表示します" },
    { name: "/表示", description: "ユーザーのバナー、アバター、情報を表示します" }
  ]
};

export const commandsDataPro = {
  "自販機": [
    { name: "/自販機登録", description: "新しい自販機を登録します" },
    { name: "/自販機削除", description: "登録済みの自販機を削除します" },
    { name: "/自販機", description: "指定した自販機のパネルを作成します" },
    { name: "/商品追加", description: "指定した自販機に商品を追加します" },
    { name: "/商品編集", description: "指定した商品の情報を編集します" },
    { name: "/商品削除", description: "指定した商品を削除します" },
    { name: "/在庫追加", description: "指定した商品に在庫を追加します" },
    { name: "/在庫引出", description: "指定した商品から在庫を引き出します" },
    { name: "/在庫内容確認", description: "指定した商品の在庫内容を確認します" },
    { name: "/paypay登録", description: "自販機にPayPayを登録します" },
    { name: "/購入者ロール設定", description: "自販機での購入時に付与するロールを設定します" },
    { name: "/購入者ロール一覧", description: "設定済みの購入者ロール設定を表示します" }
  ],
  "パネル": [
    { name: "/配布パネル", description: "配布パネルを作成します" },
    { name: "/配布パネル編集", description: "配布パネルを編集します" },
    { name: "/認証パネル", description: "認証コード入力式の認証パネルを作成します" },
    { name: "/役職パネル", description: "ボタンでロールを付与/削除できるパネルを作成します" },
    { name: "/チケット", description: "チケットパネルを作成します" },
    { name: "/対応状況パネル", description: "対応状況を表示するパネルを作成します" },
    { name: "/ワードパネル", description: "ワードパネルを作成します" },
    { name: "/自動返信パネル", description: "カスタムワード自動返信パネルを表示します" }
  ],
  "モデレーション": [
    { name: "/ban", description: "ユーザーIDでBANを実行します" },
    { name: "/タイムアウト", description: "ユーザーをタイムアウトします" },
    { name: "/メッセージ削除", description: "指定した数のメッセージを削除します" }
  ],
  "サーバー管理": [
    { name: "/ログ設定", description: "各種ログの送信先を設定します" },
    { name: "/自動ロール付与", description: "サーバー参加時に自動でロールを付与します" },
    { name: "/一括ロール付与", description: "サーバーの全メンバーに指定したロールを付与します" },
    { name: "/カテゴリー複製", description: "指定したカテゴリーの設定をそのまま複製します" },
    { name: "/テンプレート作成", description: "現在のサーバーからテンプレートを作成します" },
    { name: "/バックアップ", description: "現在のチャンネルのバックアップまたは復元を行います" },
    { name: "/nuke", description: "指定したチャンネルを削除して同じ場所に同名で作り直します" },
    { name: "/定期メッセージ開始", description: "定期メッセージを開始します" },
    { name: "/定期メッセージ終了", description: "定期メッセージを終了します" }
  ],
  "ユーティリティ": [
    { name: "/埋め込み", description: "埋め込みメッセージを作成します" },
    { name: "/カスタムメッセージ", description: "指定したメッセージをボットが送信します" },
    { name: "/カウント", description: "現在のチャンネルのメッセージ数をカウントします" },
    { name: "/抽選", description: "抽選企画の管理" },
    { name: "/投票", description: "投票・アンケートを作成します" }
  ],
  "連携": [
    { name: "/ユーザー情報", description: "指定したユーザーの情報を表示します" },
    { name: "/表示", description: "ユーザーのバナー、アバター、情報を表示します" }
  ]
};

export const commandsDataPrime = {
  "自販機": [
    { name: "/自販機登録", description: "新しい自販機を登録します" },
    { name: "/自販機削除", description: "登録済みの自販機を削除します" },
    { name: "/自販機", description: "指定した自販機のパネルを作成します" },
    { name: "/商品追加", description: "指定した自販機に商品を追加します" },
    { name: "/商品編集", description: "指定した商品の情報を編集します" },
    { name: "/商品削除", description: "指定した商品を削除します" },
    { name: "/在庫追加", description: "指定した商品に在庫を追加します" },
    { name: "/在庫引出", description: "指定した商品から在庫を引き出します" },
    { name: "/在庫内容確認", description: "指定した商品の在庫内容を確認します" },
    { name: "/paypay登録", description: "自販機にPayPayを登録します" },
    { name: "/購入者ロール設定", description: "自販機での購入時に付与するロールを設定します" },
    { name: "/購入者ロール一覧", description: "設定済みの購入者ロール設定を表示します" }
  ],
  "パネル": [
    { name: "/認証パネル", description: "認証コード入力式の認証パネルを作成します" },
    { name: "/役職パネル", description: "ボタンでロールを付与/削除できるパネルを作成します" },
    { name: "/チケット", description: "チケットパネルを作成します" },
    { name: "/対応状況パネル", description: "対応状況を表示するパネルを作成します" },
    { name: "/ワードパネル", description: "ワードパネルを作成します" },
    { name: "/自動返信パネル", description: "カスタムワード自動返信パネルを表示します" }
  ],
  "モデレーション": [
    { name: "/ban", description: "ユーザーIDでBANを実行します" },
    { name: "/タイムアウト", description: "ユーザーをタイムアウトします" },
    { name: "/メッセージ削除", description: "指定した数のメッセージを削除します" }
  ],
  "サーバー管理": [
    { name: "/ログ設定", description: "各種ログの送信先を設定します" },
    { name: "/自動ロール付与", description: "サーバー参加時に自動でロールを付与します" },
    { name: "/一括ロール付与", description: "サーバーの全メンバーに指定したロールを付与します" },
    { name: "/カテゴリー複製", description: "指定したカテゴリーの設定をそのまま複製します" },
    { name: "/テンプレート作成", description: "現在のサーバーからテンプレートを作成します" },
    { name: "/バックアップ", description: "現在のチャンネルのバックアップまたは復元を行います" },
    { name: "/nuke", description: "指定したチャンネルを削除して同じ場所に同名で作り直します" },
    { name: "/定期メッセージ開始", description: "定期メッセージを開始します" },
    { name: "/定期メッセージ終了", description: "定期メッセージを終了します" }
  ],
  "ユーティリティ": [
    { name: "/埋め込み", description: "埋め込みメッセージを作成します" },
    { name: "/カスタムメッセージ", description: "指定したメッセージをボットが送信します" },
    { name: "/カウント", description: "現在のチャンネルのメッセージ数をカウントします" },
    { name: "/抽選", description: "抽選企画の管理" },
    { name: "/投票", description: "投票・アンケートを作成します" },
    { name: "/スロット", description: "スロットチャンネルを作成します" }
  ],
  "連携": [
    { name: "/ユーザー情報", description: "指定したユーザーの情報を表示します" },
    { name: "/表示", description: "ユーザーのバナー、アバター、情報を表示します" }
  ]
};
