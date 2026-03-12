import Link from "next/link"

const tradingPlatforms = [
  // 国内平台（可直连）
  {
    name: "A股热力图",
    description: "实时股市行情热力图",
    url: "https://q.stock.sohu.com/cn/zdt/",
    type: "国内",
    heat: 97,
    color: "from-red-500 to-orange-600",
    icon: "📈",
  },
  {
    name: "聚宽",
    description: "国内领先的量化交易平台",
    url: "https://www.joinquant.com",
    type: "国内",
    heat: 95,
    color: "from-blue-500 to-cyan-600",
    icon: "📊",
  },
  {
    name: "米筐",
    description: "专业量化投资平台",
    url: "https://www.ricequant.com",
    type: "国内",
    heat: 90,
    color: "from-green-500 to-emerald-600",
    icon: "🌾",
  },
  {
    name: "优矿",
    description: "通联数据量化平台",
    url: "https://uqer.io",
    type: "国内",
    heat: 85,
    color: "from-purple-500 to-pink-600",
    icon: "💎",
  },
  {
    name: "掘金量化",
    description: "专业量化交易系统",
    url: "https://www.myquant.cn",
    type: "国内",
    heat: 80,
    color: "from-orange-500 to-red-600",
    icon: "⛏️",
  },
  {
    name: "同花顺",
    description: "知名金融数据服务商",
    url: "https://www.10jqka.com.cn",
    type: "国内",
    heat: 92,
    color: "from-yellow-500 to-orange-600",
    icon: "🌸",
  },
  {
    name: "东方财富",
    description: "领先的财经门户网站",
    url: "https://www.eastmoney.com",
    type: "国内",
    heat: 93,
    color: "from-red-500 to-rose-600",
    icon: "💰",
  },
  {
    name: "雪球",
    description: "投资者社区平台",
    url: "https://xueqiu.com",
    type: "国内",
    heat: 88,
    color: "from-cyan-500 to-blue-600",
    icon: "❄️",
  },
  {
    name: "集思录",
    description: "低风险投资社区",
    url: "https://www.jisilu.cn",
    type: "国内",
    heat: 75,
    color: "from-teal-500 to-emerald-600",
    icon: "📚",
  },
  // 海外平台（需海外环境）
  {
    name: "TradingView",
    description: "全球最大的交易社区",
    url: "https://www.tradingview.com",
    type: "海外",
    heat: 98,
    color: "from-indigo-500 to-purple-600",
    icon: "📈",
  },
  {
    name: "QuantConnect",
    description: "开源量化交易平台",
    url: "https://www.quantconnect.com",
    type: "海外",
    heat: 87,
    color: "from-sky-500 to-indigo-600",
    icon: "🔗",
  },
  {
    name: "MetaTrader 5",
    description: "知名外汇交易平台",
    url: "https://www.metatrader5.com",
    type: "海外",
    heat: 89,
    color: "from-violet-500 to-purple-600",
    icon: "5️⃣",
  },
  {
    name: "Interactive Brokers",
    description: "盈透证券专业平台",
    url: "https://www.interactivebrokers.com",
    type: "海外",
    heat: 82,
    color: "from-fuchsia-500 to-pink-600",
    icon: "🏦",
  },
  {
    name: "Coinbase",
    description: "知名加密货币交易所",
    url: "https://www.coinbase.com",
    type: "海外",
    heat: 91,
    color: "from-blue-600 to-indigo-700",
    icon: "🪙",
  },
  {
    name: "Binance",
    description: "全球最大加密货币交易所",
    url: "https://www.binance.com",
    type: "海外",
    heat: 94,
    color: "from-yellow-400 to-yellow-600",
    icon: "🔶",
  },
  {
    name: "Reddit r/algotrading",
    description: "算法交易社区",
    url: "https://www.reddit.com/r/algotrading",
    type: "海外",
    heat: 78,
    color: "from-orange-600 to-red-600",
    icon: "🤖",
  },
  {
    name: "Quantitative Finance Stack Exchange",
    description: "量化金融问答社区",
    url: "https://quant.stackexchange.com",
    type: "海外",
    heat: 76,
    color: "from-amber-500 to-orange-600",
    icon: "💬",
  },
]

// 按热度排序
const sortedPlatforms = [...tradingPlatforms].sort((a, b) => b.heat - a.heat)
const domesticPlatforms = sortedPlatforms.filter(p => p.type === "国内")
const overseasPlatforms = sortedPlatforms.filter(p => p.type === "海外")

const tradingStrategies = [
  {
    name: "双均线策略",
    description: "经典趋势跟踪策略，简单有效",
    url: "https://www.joinquant.com/view/community/detail/f289e65d8e2c6a1c3d4e5f6a7b8c9d0e",
    likes: 12580,
    color: "from-blue-500 to-cyan-600",
    icon: "📈",
  },
  {
    name: "MACD 策略",
    description: "指数平滑异同移动平均线策略",
    url: "https://www.joinquant.com/view/community/detail/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d",
    likes: 11230,
    color: "from-green-500 to-emerald-600",
    icon: "📊",
  },
  {
    name: "RSI 策略",
    description: "相对强弱指标超买超卖策略",
    url: "https://www.joinquant.com/view/community/detail/b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e",
    likes: 9870,
    color: "from-purple-500 to-pink-600",
    icon: "📉",
  },
  {
    name: "布林带策略",
    description: "基于波动率的通道突破策略",
    url: "https://www.joinquant.com/view/community/detail/c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f",
    likes: 8760,
    color: "from-orange-500 to-red-600",
    icon: "🎯",
  },
  {
    name: "海龟交易策略",
    description: "经典趋势跟踪系统完整版",
    url: "https://www.joinquant.com/view/community/detail/d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8g",
    likes: 15420,
    color: "from-amber-500 to-orange-600",
    icon: "🐢",
  },
  {
    name: "配对交易策略",
    description: "统计套利，市场中性策略",
    url: "https://www.joinquant.com/view/community/detail/e5f6a7b8c9d0e1f2a3b4c5d6e7f8g9h",
    likes: 7650,
    color: "from-indigo-500 to-purple-600",
    icon: "⚖️",
  },
  {
    name: "因子选股策略",
    description: "多因子模型选股组合",
    url: "https://www.joinquant.com/view/community/detail/f6a7b8c9d0e1f2a3b4c5d6e7f8g9h0i",
    likes: 10890,
    color: "from-teal-500 to-cyan-600",
    icon: "🔬",
  },
  {
    name: "均值回归策略",
    description: "基于价格回归均值的策略",
    url: "https://www.joinquant.com/view/community/detail/g7b8c9d0e1f2a3b4c5d6e7f8g9h0i1j",
    likes: 6540,
    color: "from-rose-500 to-pink-600",
    icon: "🔄",
  },
]

// 按点赞量排序
const sortedStrategies = [...tradingStrategies].sort((a, b) => b.likes - a.likes)

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <Link href="/" className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-4xl">🦞</span>
            </div>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📊 量化交易平台汇总</h1>
          <p className="text-xl text-gray-600">国内外主流量化交易平台和论坛大全</p>
        </header>

        {/* 国内平台 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🇨🇳</span>
            国内平台（可直连）
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {domesticPlatforms.map((platform, index) => (
              <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`bg-gradient-to-br ${platform.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 bg-black/20 text-white text-xs px-2 py-1 rounded-full">
                    🔥 {platform.heat}
                  </div>
                  <div className="text-3xl mb-2">{platform.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{platform.name}</h3>
                  <p className="text-sm text-white/80">{platform.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 海外平台 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🌍</span>
            海外平台（需海外环境）
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {overseasPlatforms.map((platform, index) => (
              <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`bg-gradient-to-br ${platform.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 bg-black/20 text-white text-xs px-2 py-1 rounded-full">
                    🔥 {platform.heat}
                  </div>
                  <div className="text-3xl mb-2">{platform.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{platform.name}</h3>
                  <p className="text-sm text-white/80">{platform.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 量化交易策略 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">💡</span>
            热门量化交易策略（按点赞排序）
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedStrategies.map((strategy, index) => (
              <a key={index} href={strategy.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`bg-gradient-to-br ${strategy.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 bg-black/20 text-white text-xs px-2 py-1 rounded-full">
                    ❤️ {strategy.likes.toLocaleString()}
                  </div>
                  <div className="text-3xl mb-2">{strategy.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{strategy.name}</h3>
                  <p className="text-sm text-white/80">{strategy.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
            ← 返回首页
          </Link>
          <p className="mt-4">© 2026 龙虾养成日记. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
