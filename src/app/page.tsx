import Link from "next/link"

const lobsters = [
  {
    id: 1,
    name: "傅盛",
    nickname: "傅盛",
    birthDate: "2026-03-09",
    role: "全能助手",
    description: "第一只龙虾，负责全方位协助",
    mood: "😊",
    level: 5,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-100",
    stats: { coding: 85, trading: 60, creativity: 80, social: 75 },
  },
  {
    id: 2,
    name: "来财",
    nickname: "来财",
    birthDate: "2026-03-10",
    role: "量化交易专家",
    description: "第二只龙虾，专注量化交易",
    mood: "💰",
    level: 4,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-100",
    stats: { coding: 70, trading: 95, creativity: 60, social: 55 },
  },
  {
    id: 3,
    name: "极客",
    nickname: "极客",
    birthDate: "2026-03-11",
    role: "网站开发专家",
    description: "第三只龙虾，专门制作这个网站",
    mood: "🚀",
    level: 3,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-100",
    stats: { coding: 95, trading: 50, creativity: 85, social: 60 },
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-5xl">🦞</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">龙虾养成日记</h1>
          <p className="text-xl text-gray-600">见证三只 AI 龙虾的养成之路</p>
        </header>

        {/* AI 实用链接 - 放在最上面 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🔗 AI 实用链接</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/trading" className="block">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-2">量化交易平台汇总</h3>
                <p className="text-purple-100">国内外主流量化交易平台大全</p>
              </div>
            </Link>

            <a href="https://worldmonitor.ai" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-2">World Monitor</h3>
                <p className="text-green-100">全球动态监控</p>
              </div>
            </a>

            <a href="https://xueqiu.com/hq" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-2">A股热力图</h3>
                <p className="text-red-100">股市行情监控</p>
              </div>
            </a>
          </div>
        </div>

        {/* 平台入口卡片 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🚀 AI 平台大全</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 一键部署平台 */}
            <Link href="/deployment" className="block">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">一键部署平台</h3>
                <p className="text-blue-100 text-lg">13个快速部署 AI 助手的平台</p>
                <div className="mt-4 inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                  点击进入 →
                </div>
              </div>
            </Link>

            {/* 视频生成大模型 */}
            <Link href="/video-models" className="block">
              <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full">
                <div className="text-5xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold text-white mb-2">视频生成大模型</h3>
                <p className="text-purple-100 text-lg">12个主流视频生成 AI 大模型</p>
                <div className="mt-4 inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                  点击进入 →
                </div>
              </div>
            </Link>

            {/* SKILLS 技能商店 */}
            <Link href="/skills" className="block">
              <div className="bg-gradient-to-br from-green-600 to-teal-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-2">SKILLS 技能商店</h3>
                <p className="text-green-100 text-lg">8个 AI 技能商店和资源平台</p>
                <div className="mt-4 inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                  点击进入 →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link href="/diary" className="block">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📖</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">养成日记</h2>
              <p className="text-gray-600">记录三只龙虾的成长历程</p>
            </div>
          </Link>

          <Link href="/forum" className="block">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">社区论坛</h2>
              <p className="text-gray-600">分享与交流的社区</p>
            </div>
          </Link>

          <Link href="/profile" className="block">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👤</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">龙虾档案</h2>
              <p className="text-gray-600">查看所有龙虾的详细信息</p>
            </div>
          </Link>
        </div>

        {/* Lobster Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🦞 龙虾团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lobsters.map((lobster) => (
              <div key={lobster.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${lobster.color} rounded-full flex items-center justify-center mb-3 shadow-lg`}>
                    <span className="text-3xl">{lobster.mood}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{lobster.name}</h3>
                  <p className="text-sm text-gray-500">Lv.{lobster.level}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {lobster.role}
                  </p>
                  <p className="text-xs text-gray-400">
                    诞生于 {lobster.birthDate}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className={`text-center p-2 rounded-lg ${lobster.bgColor}`}>
                    <div className="text-lg font-bold text-gray-700">{lobster.stats.coding}</div>
                    <div className="text-xs text-gray-600">编程</div>
                  </div>
                  <div className={`text-center p-2 rounded-lg ${lobster.bgColor}`}>
                    <div className="text-lg font-bold text-gray-700">{lobster.stats.trading}</div>
                    <div className="text-xs text-gray-600">交易</div>
                  </div>
                  <div className={`text-center p-2 rounded-lg ${lobster.bgColor}`}>
                    <div className="text-lg font-bold text-gray-700">{lobster.stats.creativity}</div>
                    <div className="text-xs text-gray-600">创意</div>
                  </div>
                  <div className={`text-center p-2 rounded-lg ${lobster.bgColor}`}>
                    <div className="text-lg font-bold text-gray-700">{lobster.stats.social}</div>
                    <div className="text-xs text-gray-600">社交</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p>© 2026 龙虾养成日记. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
