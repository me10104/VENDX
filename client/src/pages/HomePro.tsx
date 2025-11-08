import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function HomePro() {
  const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1422959102300127292&permissions=8&integration_type=0&scope=bot";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "新機能先行搭載",
      subtitle: "Priority Access",
      description: "開発中の新機能をPROユーザー限定で先行公開。常に最先端の機能を利用できます。",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "最速アップデート",
      subtitle: "Instant Updates",
      description: "PROユーザーからのフィードバックを最優先で反映。迅速なアップデートを保証します。",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "優先サポート",
      subtitle: "Premium Support",
      description: "問題発生時も安心。専用チャンネルで優先的にサポート対応します。",
      gradient: "from-pink-500/20 to-blue-500/20"
    }
  ];

  const commandCategories = [
    {
      name: "自販機システム",
      commands: [
        "/自販機登録", "/自販機削除", "/自販機", "/商品追加", "/商品編集", 
        "/商品削除", "/在庫追加", "/在庫引出", "/在庫内容確認", 
        "/購入者ロール設定", "/購入者ロール一覧"
      ]
    },
    {
      name: "パネル作成",
      commands: [
        "/認証パネル", "/役職パネル", "/チケット", "/配布パネル", 
        "/配布パネル編集", "/ngワードパネル", "/埋め込み"
      ]
    },
    {
      name: "モデレーション",
      commands: ["/ban", "/タイムアウト", "/メッセージ削除"]
    },
    {
      name: "サーバー管理",
      commands: [
        "/自動ロール付与", "/一括ロール付与", "/カテゴリー複製", 
        "/テンプレート作成", "/スロット", "/スロット削除", "/カスタムメッセージ"
      ]
    },
    {
      name: "ユーティリティ",
      commands: ["/表示", "/カウント", "/バックアップ", "/抽選"]
    },
    {
      name: "連携機能",
      commands: ["/paypay登録", "/ログ設定"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sophisticated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-black to-black"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse" style={{animationDuration: '10s'}}></div>
      </div>

      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-2xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-50 group-hover:opacity-75 blur transition"></div>
                <img 
                  src="/VENDX/bot-icon.jpg" 
                  alt="VENDX PRO" 
                  className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-1 ring-white/10"
                />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold tracking-tight">VENDX PRO</div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-medium">Premium Edition</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition">特典</a>
              <a href="#commands" className="text-sm text-gray-400 hover:text-white transition">コマンド</a>
              <Button 
                asChild 
                className="bg-white text-black hover:bg-gray-200 font-semibold"
              >
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  BOTを導入
                </a>
              </Button>
            </nav>
            <Button 
              asChild 
              size="sm"
              className="md:hidden bg-white text-black hover:bg-gray-200 font-semibold"
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                導入
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero - Full Height with Split Layout */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-8 sm:space-y-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-300">Premium Edition</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-gray-400 mb-2">Discord サーバーを</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    プロフェッショナルに
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl">
                  新機能をいち早く搭載し、最速のアップデート・サポート・修正を提供するDiscord BOT
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-white text-black hover:bg-gray-200 font-bold text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all"
                >
                  <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                    今すぐ導入する
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="border-white/20 text-white hover:bg-white/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7"
                >
                  <a href="#commands">
                    コマンドを見る
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Stats Cards - Hidden on mobile */}
            <div className="hidden lg:block space-y-4">
              {[
                { label: "Priority", value: "先行搭載", desc: "新機能" },
                { label: "Instant", value: "即時対応", desc: "アップデート" },
                { label: "24/7", value: "優先対応", desc: "サポート" }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  style={{
                    transform: `translateX(${scrollY * 0.05 * (idx + 1)}px)`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.desc}</div>
                    </div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features - Card Grid */}
      <section id="features" className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-20 space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PROの特典
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400">
              通常版にはない、プレミアムな体験
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-white/20 transition-all duration-500"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative space-y-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/10 text-lg sm:text-xl font-black">
                    {idx + 1}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider">
                      {feature.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands - Compact Grid */}
      <section id="commands" className="relative py-20 sm:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-20 space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                コマンド一覧
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400">
              全ての機能を網羅
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {commandCategories.map((category, idx) => (
              <div 
                key={idx}
                className="group p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                  <h3 className="text-base sm:text-lg font-bold">{category.name}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.commands.map((cmd, cmdIdx) => (
                    <code 
                      key={cmdIdx}
                      className="block text-xs sm:text-sm font-mono bg-black/40 text-blue-300 px-3 py-2 rounded-lg border border-white/5 hover:border-white/20 hover:bg-black/60 transition-all"
                    >
                      {cmd}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimalist */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                今すぐVENDX PROを導入
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-400">
              プレミアムな体験で、サーバーを次のレベルへ
            </p>

            <Button 
              size="lg" 
              asChild 
              className="bg-white text-black hover:bg-gray-200 font-black text-lg sm:text-xl px-10 sm:px-12 py-7 sm:py-8 shadow-2xl shadow-white/20 hover:shadow-white/30 transition-all"
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                BOTを導入する
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Clean */}
      <footer className="relative border-t border-white/10 py-12 sm:py-16 bg-black/80 backdrop-blur-2xl">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <img 
                src="/VENDX/creator-icon.jpg" 
                alt="Creator" 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-1 ring-white/10"
              />
              <span className="text-sm sm:text-base text-gray-400">Built by @me10104</span>
            </div>
            
            <div className="text-center space-y-3">
              <p className="text-lg sm:text-xl font-bold">VENDX PRO Discord BOT</p>
              <a 
                href="https://discord.gg/3bw5D6vKV9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition font-semibold"
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
