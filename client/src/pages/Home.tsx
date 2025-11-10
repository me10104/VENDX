import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Home() {
  const inviteUrlStandard = "https://discord.com/oauth2/authorize?client_id=1422959102300127292&permissions=8&integration_type=0&scope=bot";
  const inviteUrlPro = "https://discord.com/oauth2/authorize?client_id=1422959102300127292&permissions=8&integration_type=0&scope=bot";
  
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const standardFeatures = [
    {
      title: "自販機システム",
      description: "商品の販売、在庫管理、購入履歴の記録まで完全自動化",
      detail: "複数の自販機を登録し、商品ごとに在庫を管理。PayPay連携で決済も簡単に。",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "パネル作成",
      description: "認証、役職付与、チケット、配布など多彩なパネル",
      detail: "ボタン一つで操作できる直感的なパネルで、サーバー管理を効率化。",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "モデレーション",
      description: "BAN、タイムアウト、メッセージ削除などの管理機能",
      detail: "サーバーの秩序を保つための強力なモデレーションツール。",
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  const proFeatures = [
    {
      title: "先行搭載",
      subtitle: "PRIORITY",
      description: "新機能をいち早く搭載し、最速のアップデート・サポートを提供する",
      gradient: "from-orange-500/20 to-red-500/20",
      icon: "⚡"
    },
    {
      title: "即時対応",
      subtitle: "INSTANT",
      description: "アップデート",
      gradient: "from-red-500/20 to-pink-500/20",
      icon: "🚀"
    },
    {
      title: "優先対応",
      subtitle: "24/7",
      description: "サポート",
      gradient: "from-pink-500/20 to-orange-500/20",
      icon: "💎"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950"></div>
        
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`,
          }}
        ></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{animationDuration: '10s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '12s'}}></div>
        
        {/* PRO section orbs */}
        <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[140px] animate-pulse" style={{animationDuration: '9s'}}></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-red-500/8 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '11s'}}></div>
      </div>

      {/* Sleek Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-50 group-hover:opacity-75 blur-sm transition"></div>
                <img 
                  src="/VENDX/icon-standard.png" 
                  alt="VENDX" 
                  className="relative h-12 w-12 rounded-xl ring-1 ring-white/10"
                />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  VENDX
                </div>
                <div className="text-[10px] text-gray-500 font-medium tracking-wider">DISCORD BOT</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#standard" className="text-sm text-gray-400 hover:text-cyan-400 transition font-medium">機能</a>
              <a href="#pro" className="text-sm text-gray-400 hover:text-orange-400 transition font-medium">PRO</a>
              <a href="#commands" className="text-sm text-gray-400 hover:text-white transition font-medium">コマンド</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-12 max-w-6xl mx-auto">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-300 tracking-wide">Next Generation Discord Bot</span>
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter">
                <span className="block text-gray-500 mb-4">Discord サーバーを</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  次のレベルへ
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">
                自販機システム、PayPay連携、チケット管理など、<br className="hidden sm:block" />
                サーバー運営に必要なすべてを統合
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a href="#standard" className="group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-50 group-hover:opacity-100 blur transition"></div>
                  <div className="relative px-10 py-5 bg-black rounded-2xl border border-white/10">
                    <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Standard Edition
                    </span>
                  </div>
                </div>
              </a>
              
              <a href="#pro" className="group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl opacity-50 group-hover:opacity-100 blur transition"></div>
                  <div className="relative px-10 py-5 bg-black rounded-2xl border border-white/10">
                    <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                      PRO Edition
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Standard Edition Section */}
      <section id="standard" className="relative py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <img 
                src="/VENDX/icon-standard.png" 
                alt="Standard" 
                className="h-16 w-16 rounded-2xl ring-2 ring-cyan-500/30"
              />
              <div className="text-left">
                <h2 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Standard Edition
                </h2>
                <p className="text-gray-500 text-sm font-medium mt-1">基本機能を完全装備</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {standardFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
                <div className="relative p-8 rounded-3xl bg-black border border-white/10 h-full backdrop-blur-xl">
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4 text-sm">{feature.description}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg px-12 py-7 rounded-2xl shadow-2xl shadow-cyan-500/20"
            >
              <a href={inviteUrlStandard} target="_blank" rel="noopener noreferrer">
                Standard Edition を導入
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PRO Edition Section */}
      <section id="pro" className="relative py-32 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <img 
                src="/VENDX/icon-pro.png" 
                alt="PRO" 
                className="h-16 w-16 rounded-2xl ring-2 ring-orange-500/30"
              />
              <div className="text-left">
                <h2 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  PRO Edition
                </h2>
                <p className="text-gray-500 text-sm font-medium mt-1">プロフェッショナル向けプレミアム</p>
              </div>
            </div>
          </div>

          {/* PRO Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {proFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-50 group-hover:opacity-100 blur transition duration-500`}></div>
                <div className="relative p-8 rounded-3xl bg-black border border-white/10 h-full backdrop-blur-xl">
                  <div className="text-xs font-black text-gray-500 tracking-widest mb-3">{feature.subtitle}</div>
                  <h3 className="text-3xl font-black text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-12 py-7 rounded-2xl shadow-2xl shadow-orange-500/20"
            >
              <a href={inviteUrlPro} target="_blank" rel="noopener noreferrer">
                PRO Edition を導入
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="relative py-32 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter text-white mb-4">
              コマンド一覧
            </h2>
            <p className="text-gray-400 text-lg">強力な機能を簡単に操作</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { category: "自販機システム", count: 11, color: "cyan" },
              { category: "パネル作成", count: 7, color: "blue" },
              { category: "モデレーション", count: 3, color: "indigo" },
              { category: "サーバー管理", count: 7, color: "purple" },
              { category: "ユーティリティ", count: 4, color: "pink" },
              { category: "連携機能", count: 2, color: "orange" }
            ].map((cat, idx) => (
              <div 
                key={idx}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-xl transition"
              >
                <h3 className="text-xl font-bold text-white mb-2">{cat.category}</h3>
                <p className="text-sm text-gray-400">{cat.count} コマンド</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${cat.color}-500 to-${cat.color}-600 rounded-b-2xl opacity-50 group-hover:opacity-100 transition`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl sm:text-6xl font-black tracking-tighter">
              <span className="block text-gray-400 mb-2">今すぐ</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                VENDXを導入しよう
              </span>
            </h2>
            
            <p className="text-xl text-gray-400">
              あなたのDiscordサーバーを次のレベルへ
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg px-12 py-7 rounded-2xl"
              >
                <a href={inviteUrlStandard} target="_blank" rel="noopener noreferrer">
                  Standard Edition
                </a>
              </Button>
              
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-12 py-7 rounded-2xl"
              >
                <a href={inviteUrlPro} target="_blank" rel="noopener noreferrer">
                  PRO Edition
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-16 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src="/VENDX/creator-icon.jpg" 
                alt="Creator" 
                className="h-12 w-12 rounded-full ring-2 ring-white/10"
              />
              <span className="text-gray-400 font-medium">Built by @me10104</span>
            </div>
            
            <div className="text-center space-y-3">
              <p className="text-xl font-bold text-white">VENDX Discord BOT</p>
              <a 
                href="https://discord.gg/3bw5D6vKV9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition"
              >
                サポートサーバー
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
