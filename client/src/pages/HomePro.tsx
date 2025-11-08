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

  const proFeatures = [
    {
      title: "新機能をいち早く搭載",
      desc: "最新機能を誰よりも早く体験",
      detail: "開発中の新機能をPROユーザー限定で先行公開。常に最先端の機能を利用できます。",
      icon: "⚡"
    },
    {
      title: "最速アップデート",
      desc: "優先的な機能追加と改善",
      detail: "PROユーザーからのフィードバックを最優先で反映。迅速なアップデートを保証します。",
      icon: "🚀"
    },
    {
      title: "優先サポート",
      desc: "専用サポートチャンネルで即対応",
      detail: "問題発生時も安心。専用チャンネルで優先的にサポート対応します。",
      icon: "💎"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold/3 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-gold/20 bg-black/80 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/30 rounded-full blur-md"></div>
              <img src="/VENDX/bot-icon.jpg" alt="VENDX PRO" className="relative h-12 w-12 rounded-full ring-2 ring-gold shadow-2xl shadow-gold/50" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight pro-gradient-text">
                VENDX PRO
              </span>
              <div className="text-xs text-gold/70 font-medium">PREMIUM EDITION</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-semibold text-gray-300 hover:text-gold transition-all hover:scale-105">
              特典
            </a>
            <a href="#commands" className="text-sm font-semibold text-gray-300 hover:text-gold transition-all hover:scale-105">
              コマンド
            </a>
            <Button asChild className="pro-button-premium shadow-2xl shadow-gold/30 hover:shadow-gold/50">
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                BOTを導入
              </a>
            </Button>
          </nav>
          <Button asChild className="md:hidden pro-button-premium">
            <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
              導入
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section - Completely Redesigned */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border border-gold/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gold tracking-wider">PREMIUM EDITION</span>
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
                <span className="text-gray-300">Discord サーバーを</span>
                <br />
                <span className="pro-gradient-text-animated text-7xl md:text-9xl">
                  プロフェッショナルに
                </span>
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              VENDX PROは、新機能をいち早く搭載し、<br className="hidden md:block" />
              最速のアップデート・サポート・修正を提供するDiscord BOTです
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" asChild className="pro-button-premium text-lg px-12 py-7 shadow-2xl shadow-gold/40 hover:shadow-gold/60 transform hover:scale-105 transition-all">
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  今すぐ導入する
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="pro-button-outline-premium text-lg px-12 py-7 transform hover:scale-105 transition-all">
                <a href="#commands">
                  コマンドを見る
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-gold/40 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-gold/30 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-gold/35 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-gold/25 rounded-full animate-ping" style={{animationDuration: '3.5s'}}></div>
      </section>

      {/* Premium Features - Redesigned with 3D Cards */}
      <section id="features" className="relative py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="pro-gradient-text">PROの特典</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              通常版にはない、プレミアムな体験を提供します
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {proFeatures.map((feature, idx) => (
              <div key={idx} className="pro-card-3d group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative p-8 space-y-6">
                  <div className="text-6xl filter drop-shadow-lg">{feature.icon}</div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gold">{feature.title}</h3>
                    <p className="text-sm text-gray-400 font-medium">{feature.desc}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section - Grid Layout */}
      <section id="commands" className="relative py-32">
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="pro-gradient-text">コマンド一覧</span>
            </h2>
            <p className="text-xl text-gray-400">
              全ての機能を網羅した強力なコマンドセット
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {commands.map((category, idx) => (
              <div key={idx} className="pro-command-card group">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gold border-b border-gold/20 pb-3">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((cmd, cmdIdx) => (
                      <div key={cmdIdx} className="space-y-1 group/item">
                        <code className="text-sm font-mono bg-black/60 text-gold px-3 py-1.5 rounded-lg inline-block border border-gold/20 group-hover/item:border-gold/40 group-hover/item:shadow-lg group-hover/item:shadow-gold/20 transition-all">
                          {cmd.name}
                        </code>
                        <p className="text-xs text-gray-400 pl-3">
                          {cmd.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Dramatic */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12 p-12 rounded-3xl bg-gradient-to-br from-black/80 to-gray-900/80 border border-gold/20 backdrop-blur-xl shadow-2xl shadow-gold/10">
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="pro-gradient-text-animated">
                今すぐVENDX PROを<br />導入しよう
              </span>
            </h2>
            <p className="text-2xl text-gray-300">
              プレミアムな体験で、あなたのDiscordサーバーを次のレベルへ
            </p>
            <Button size="lg" asChild className="pro-button-premium text-xl px-16 py-8 shadow-2xl shadow-gold/50 hover:shadow-gold/70 transform hover:scale-110 transition-all">
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                BOTを導入する
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gold/20 py-12 bg-black/80 backdrop-blur-xl">
        <div className="container text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <img src="/VENDX/creator-icon.jpg" alt="Creator" className="h-10 w-10 rounded-full ring-2 ring-gold/50 shadow-lg shadow-gold/30" />
            <p className="text-gray-400 font-medium">Built by @me10104</p>
          </div>
          <p className="text-gold font-bold text-lg">VENDX PRO Discord BOT</p>
          <p>
            <a href="https://discord.gg/3bw5D6vKV9" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors font-semibold">
              サポートサーバー
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
