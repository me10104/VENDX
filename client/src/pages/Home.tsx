import { Button } from "@/components/ui/button";
import { useState } from "react";

type Edition = "standard" | "pro";

export default function Home() {
  const [edition, setEdition] = useState<Edition>("standard");
  
  const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1422959102300127292&permissions=8&integration_type=0&scope=bot";

  const toggleEdition = () => {
    setEdition(prev => prev === "standard" ? "pro" : "standard");
  };

  const editionConfig = {
    standard: {
      icon: "/VENDX/icon-standard.png",
      name: "VENDX",
      tagline: "Discord サーバー運営を、もっとスマートに",
      description: "自販機システム、PayPay連携、チケット管理。サーバー運営に必要な機能を、シンプルに統合。",
      accentColor: "from-blue-600 to-cyan-500",
      features: [
        {
          title: "自販機システム",
          desc: "商品販売から在庫管理まで完全自動化。PayPay連携で決済もスムーズ。"
        },
        {
          title: "パネル管理",
          desc: "認証、役職付与、チケット。直感的なパネルでサーバー管理を効率化。"
        },
        {
          title: "モデレーション",
          desc: "BAN、タイムアウト、メッセージ削除。サーバーの秩序を保つ強力なツール。"
        }
      ]
    },
    pro: {
      icon: "/VENDX/icon-pro.png",
      name: "VENDX PRO",
      tagline: "プロフェッショナルのための、プレミアム体験",
      description: "新機能の先行アクセス、優先サポート、即時アップデート。本格運営に必要なすべて。",
      accentColor: "from-orange-600 to-red-500",
      features: [
        {
          title: "先行アクセス",
          desc: "開発中の新機能をいち早く体験。常に最先端の機能を利用可能。"
        },
        {
          title: "優先サポート",
          desc: "専用チャンネルで24/7対応。問題発生時も即座に解決。"
        },
        {
          title: "即時アップデート",
          desc: "フィードバックを最優先で反映。迅速な改善とアップデート。"
        }
      ]
    }
  };

  const config = editionConfig[edition];

  const commands = [
    { category: "自販機", count: 11 },
    { category: "パネル", count: 7 },
    { category: "モデレーション", count: 3 },
    { category: "サーバー管理", count: 7 },
    { category: "ユーティリティ", count: 4 },
    { category: "連携", count: 2 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button 
              onClick={toggleEdition}
              className="flex items-center gap-3 group transition-all hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={config.icon}
                  alt={config.name}
                  className="h-10 w-10 rounded-xl shadow-sm transition-all group-hover:shadow-md"
                />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-900">{config.name}</div>
                <div className="text-xs text-gray-500">クリックで切替</div>
              </div>
            </button>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">機能</a>
              <a href="#commands" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">コマンド</a>
              <Button 
                asChild
                className={`bg-gradient-to-r ${config.accentColor} text-white shadow-sm hover:shadow-md transition-all`}
              >
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  導入する
                </a>
              </Button>
            </nav>
            
            <Button 
              asChild
              size="sm"
              className={`md:hidden bg-gradient-to-r ${config.accentColor} text-white`}
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                導入
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {config.tagline}
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            {config.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className={`bg-gradient-to-r ${config.accentColor} text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all`}
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                今すぐ導入
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-gray-300 hover:border-gray-400 transition-all"
            >
              <a href="#features">
                詳しく見る
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            主な機能
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {config.features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands */}
      <section id="commands" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            コマンド一覧
          </h2>
          <p className="text-gray-600 text-center mb-16">
            34種類のコマンドで、あらゆるサーバー運営をサポート
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commands.map((cmd, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-gray-300 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">{cmd.category}</h3>
                  <span className={`text-sm font-bold bg-gradient-to-r ${config.accentColor} bg-clip-text text-transparent`}>
                    {cmd.count}個
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            今すぐ{config.name}を導入
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            あなたのDiscordサーバーを次のレベルへ
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-6 shadow-xl"
          >
            <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
              BOTを導入する
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="/VENDX/creator-icon.jpg"
                alt="Creator"
                className="h-10 w-10 rounded-full"
              />
              <span className="text-sm text-gray-600">Built by @me10104</span>
            </div>
            <a 
              href="https://discord.gg/3bw5D6vKV9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition"
            >
              サポートサーバー →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
