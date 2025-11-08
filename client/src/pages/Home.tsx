import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1422959102300127292&permissions=8&integration_type=0&scope=bot";

  const features = [
    {
      title: "自販機システム",
      description: "商品の販売、在庫管理、購入履歴の記録まで完全自動化",
      detail: "複数の自販機を登録し、商品ごとに在庫を管理。PayPay連携で決済も簡単に。",
      note: "※ 販売者として使用する場合はPayPay登録が必要です"
    },
    {
      title: "パネル作成",
      description: "認証、役職付与、チケット、配布など多彩なパネル",
      detail: "ボタン一つで操作できる直感的なパネルで、サーバー管理を効率化。"
    },
    {
      title: "モデレーション",
      description: "BAN、タイムアウト、メッセージ削除などの管理機能",
      detail: "サーバーの秩序を保つための強力なモデレーションツール。"
    }
  ];

  const commandCategories = [
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
        { name: "/認証パネル", desc: "認証コード入力式の認証パネルを作成" },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <img 
                src="/VENDX/bot-icon.jpg" 
                alt="VENDX" 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
              />
              <span className="text-xl sm:text-2xl font-bold text-purple-600">
                VENDX
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#commands" className="text-sm font-medium text-gray-700 hover:text-purple-600">
                コマンド
              </a>
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-purple-600">
                機能
              </a>
              <Button 
                asChild 
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  BOTを導入
                </a>
              </Button>
            </nav>
            <Button 
              asChild 
              size="sm"
              className="md:hidden bg-purple-600 hover:bg-purple-700 text-white"
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                導入
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Discord サーバーを<br />
              <span className="text-purple-600">もっと便利に</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              VENDXは自販機システム、PayPay連携、チケット管理など、<br className="hidden sm:block" />
              サーバー運営に必要な機能を統合したDiscord BOTです
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                asChild 
                className="bg-purple-600 hover:bg-purple-700 text-white text-base sm:text-lg px-8 py-6"
              >
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  今すぐ導入する
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-purple-600 text-purple-600 hover:bg-purple-50 text-base sm:text-lg px-8 py-6"
              >
                <a href="#commands">
                  コマンドを見る
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
            主な機能
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-base font-semibold text-purple-600 mb-3">{feature.description}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.detail}</p>
                {feature.note && (
                  <p className="text-xs text-gray-500 mt-3">{feature.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
            コマンド一覧
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {commandCategories.map((category, idx) => (
              <Card key={idx} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="p-3 rounded-lg bg-purple-50 border border-purple-100"
                    >
                      <code className="text-sm font-mono font-semibold text-purple-700">{item.name}</code>
                      <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-purple-600">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              今すぐVENDXを導入しよう
            </h2>
            <p className="text-lg sm:text-xl text-purple-100">
              あなたのDiscordサーバーを次のレベルへ
            </p>
            <Button 
              size="lg" 
              asChild 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-7"
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                BOTを導入する
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src="/VENDX/creator-icon.jpg" 
                alt="Creator" 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
              />
              <span className="text-sm sm:text-base text-gray-600">Built by @me10104</span>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-lg font-bold text-gray-900">VENDX Discord BOT</p>
              <a 
                href="https://discord.gg/3bw5D6vKV9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-sm text-purple-600 hover:text-purple-700 font-semibold"
              >
                サポートサーバー
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
