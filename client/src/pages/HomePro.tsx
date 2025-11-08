import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePro() {
  const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1422959102300127292&permissions=8&integration_type=0&scope=bot";

  const commands = [
    {
      category: "自販機システム",
      items: [
        { name: "/自販機登録", desc: "新しい自販機を登録" },
        { name: "/自販機削除", desc: "登録済みの自販機を削除" },
        { name: "/自販機", desc: "自販機パネルを作成" },
        { name: "/商品追加", desc: "自販機に商品を追加" },
        { name: "/商品編集", desc: "商品情報を編集" },
        { name: "/商品削除", desc: "商品を削除" },
        { name: "/在庫追加", desc: "商品に在庫を追加" },
        { name: "/在庫引出", desc: "商品から在庫を引き出し" },
        { name: "/在庫内容確認", desc: "在庫内容を確認" },
        { name: "/購入者ロール設定", desc: "購入時に付与するロールを設定" },
        { name: "/購入者ロール一覧", desc: "設定済みのロール設定を表示" },
      ]
    },
    {
      category: "PayPay連携",
      items: [
        { name: "/paypay登録", desc: "PayPayアカウントを登録" },
      ]
    },
    {
      category: "パネル作成",
      items: [
        { name: "/認証パネル", desc: "認証コード入力式の認証パネルを作成（画像認証対応）" },
        { name: "/役職パネル", desc: "ボタンでロールを付与/削除できるパネルを作成" },
        { name: "/チケット", desc: "チケットパネルを作成" },
        { name: "/配布パネル", desc: "配布パネルを作成" },
        { name: "/配布パネル編集", desc: "配布パネルを編集" },
        { name: "/ngワードパネル", desc: "NGワードパネルを作成" },
        { name: "/埋め込み", desc: "埋め込みメッセージを作成" },
      ]
    },
    {
      category: "ログ設定",
      items: [
        { name: "/ログ設定", desc: "各種ログの送信先を設定" },
      ]
    },
    {
      category: "モデレーション",
      items: [
        { name: "/ban", desc: "ユーザーをBANする" },
        { name: "/タイムアウト", desc: "ユーザーをタイムアウトする" },
        { name: "/メッセージ削除", desc: "指定した数のメッセージを削除" },
      ]
    },
    {
      category: "ユーティリティ",
      items: [
        { name: "/表示", desc: "ユーザーのバナー、アバター、情報を表示" },
        { name: "/カウント", desc: "チャンネルのメッセージ数をカウント" },
        { name: "/バックアップ", desc: "チャンネルのバックアップまたは復元" },
        { name: "/抽選", desc: "抽選企画の管理" },
      ]
    },
    {
      category: "サーバー管理",
      items: [
        { name: "/自動ロール付与", desc: "サーバー参加時に自動でロールを付与" },
        { name: "/一括ロール付与", desc: "全メンバーにロールを付与" },
        { name: "/カテゴリー複製", desc: "カテゴリーの設定を複製" },
        { name: "/テンプレート作成", desc: "サーバーからテンプレートを作成" },
        { name: "/スロット", desc: "ユーザー専用のスロットチャンネルを作成" },
        { name: "/スロット削除", desc: "スロットチャンネルを削除" },
        { name: "/カスタムメッセージ", desc: "ボットが指定したメッセージを送信" },
      ]
    },
  ];

  return (
    <div className="min-h-screen pro-gradient-bg">
      {/* Header */}
      <header className="pro-glass-effect sticky top-0 z-50 border-b border-gold/30">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/VENDX/bot-icon.jpg" alt="VENDX PRO" className="h-10 w-10 rounded-full shadow-lg ring-2 ring-gold/50" />
            <span className="text-xl font-bold pro-gradient-text">
              VENDX PRO
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#commands" className="text-sm font-medium text-gray-300 hover:text-gold transition-colors">
              コマンド
            </a>
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-gold transition-colors">
              機能
            </a>
            <Button asChild className="pro-button">
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                BOTを導入
              </a>
            </Button>
          </nav>
          <Button asChild className="md:hidden pro-button">
            <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
              導入
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container py-24 md:py-32 overflow-hidden">
        {/* Premium particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gold/40 rounded-full animate-ping" style={{animationDuration: '3s'}} />
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gold/30 rounded-full animate-pulse" style={{animationDuration: '4s'}} />
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gold/35 rounded-full animate-ping" style={{animationDuration: '5s'}} />
          <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-gold/25 rounded-full animate-pulse" style={{animationDuration: '3.5s'}} />
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-4">
              <span className="text-sm font-medium text-gold">PREMIUM EDITION</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discord サーバーを
              <br />
              <span className="pro-gradient-text">
                プロフェッショナルに
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              VENDX PROは、新機能をいち早く搭載し、最速のアップデート・サポート・修正を提供する、プレミアムDiscord BOTです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="pro-button shadow-2xl hover:shadow-gold/50 transition-all">
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  今すぐ導入する
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="pro-button-outline">
                <a href="#commands">
                  コマンドを見る
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="container py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          PROの特典
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          通常版にはない、プレミアムな体験を提供します
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="pro-card border-gold/20 hover:border-gold/40 transition-all">
            <CardHeader>
              <CardTitle className="text-gold">新機能をいち早く搭載</CardTitle>
              <CardDescription className="text-gray-400">
                最新機能を誰よりも早く体験
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                開発中の新機能をPROユーザー限定で先行公開。常に最先端の機能を利用できます。
              </p>
            </CardContent>
          </Card>

          <Card className="pro-card border-gold/20 hover:border-gold/40 transition-all">
            <CardHeader>
              <CardTitle className="text-gold">最速アップデート</CardTitle>
              <CardDescription className="text-gray-400">
                優先的な機能追加と改善
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                PROユーザーからのフィードバックを最優先で反映。迅速なアップデートを保証します。
              </p>
            </CardContent>
          </Card>

          <Card className="pro-card border-gold/20 hover:border-gold/40 transition-all">
            <CardHeader>
              <CardTitle className="text-gold">優先サポート</CardTitle>
              <CardDescription className="text-gray-400">
                専用サポートチャンネルで即対応
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                問題発生時も安心。専用チャンネルで優先的にサポート対応します。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          主な機能
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="pro-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-white">自販機システム</CardTitle>
              <CardDescription className="text-gray-400">
                商品の販売、在庫管理、購入履歴の記録まで完全自動化
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                複数の自販機を登録し、商品ごとに在庫を管理。PayPay連携で決済も簡単に。
              </p>
              <p className="text-xs text-gray-500 mt-2">
                ※ 販売者として使用する場合はPayPay登録が必要です
              </p>
            </CardContent>
          </Card>

          <Card className="pro-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-white">パネル作成</CardTitle>
              <CardDescription className="text-gray-400">
                認証、役職付与、チケット、配布など多彩なパネル
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                ボタン一つで操作できる直感的なパネルで、サーバー管理を効率化。
              </p>
              <p className="text-xs text-gold mt-2 font-medium">
                PRO限定: 認証パネルに画像認証機能を搭載
              </p>
            </CardContent>
          </Card>

          <Card className="pro-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-white">モデレーション</CardTitle>
              <CardDescription className="text-gray-400">
                BAN、タイムアウト、メッセージ削除などの管理機能
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                サーバーの秩序を保つための強力なモデレーションツール。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="container py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          コマンド一覧
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {commands.map((category, idx) => (
            <Card key={idx} className="pro-card border-gold/20">
              <CardHeader>
                <CardTitle className="text-xl text-white">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((cmd, cmdIdx) => (
                    <div key={cmdIdx} className="flex flex-col gap-1">
                      <code className="text-sm font-mono bg-black/40 text-gold px-2 py-1 rounded w-fit border border-gold/20">
                        {cmd.name}
                      </code>
                      <p className="text-sm text-gray-400 pl-2">
                        {cmd.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <Card className="pro-card border-gold/30 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5"></div>
          <CardHeader className="space-y-4 relative z-10">
            <CardTitle className="text-3xl md:text-4xl text-white">
              今すぐVENDX PROを導入しよう
            </CardTitle>
            <CardDescription className="text-lg text-gray-300">
              プレミアムな体験で、あなたのDiscordサーバーを次のレベルへ
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <Button size="lg" asChild className="pro-button shadow-2xl hover:shadow-gold/50 transition-all">
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                BOTを導入する
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 py-8 pro-glass-effect">
        <div className="container text-center text-sm text-gray-400">
          <div className="flex items-center justify-center gap-3">
            <img src="/VENDX/creator-icon.jpg" alt="Creator" className="h-8 w-8 rounded-full ring-2 ring-gold/30" />
            <p>Built by @me10104</p>
          </div>
          <p className="mt-2 text-gold font-medium">VENDX PRO Discord BOT</p>
          <p className="mt-2">
            <a href="https://discord.gg/3bw5D6vKV9" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              サポートサーバー
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
