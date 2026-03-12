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

const videoModels = [
  {
    name: "Sora 2",
    developer: "OpenAI",
    version: "2026 年 2 月更新版",
    resolution: "1080P 原生，支持 4K 超分",
    framerate: "30fps",
    maxDuration: "25 秒",
    inputModalities: "文本、图片、视频片段",
    chinaAccess: "否，需合规海外环境",
    positioning: "通用影视级视频生成标杆，高端创意与专业预演场景",
    color: "from-gray-700 to-gray-900",
    icon: "🔮",
  },
  {
    name: "Veo 3.1",
    developer: "Google DeepMind",
    version: "2026 年 1 月版",
    resolution: "4K 原生",
    framerate: "60fps",
    maxDuration: "12 秒",
    inputModalities: "文本、图片、音频",
    chinaAccess: "否，需绑定 Google 账号",
    positioning: "企业级多模态视频生成，深度适配 Google 生态",
    color: "from-blue-600 to-blue-800",
    icon: "🎬",
  },
  {
    name: "Runway Gen-3",
    developer: "Runway ML",
    version: "2026 年 1 月版",
    resolution: "1080P 原生",
    framerate: "30fps",
    maxDuration: "15 秒",
    inputModalities: "文本、图片、视频、音频",
    chinaAccess: "否，需合规海外环境",
    positioning: "专业创作者全流程视频工作流，影视级后期与生成一体化",
    color: "from-purple-600 to-purple-800",
    icon: "🎨",
  },
  {
    name: "Pika 2.0",
    developer: "Pika Labs",
    version: "2026 年 2 月版",
    resolution: "1080P 原生",
    framerate: "30fps",
    maxDuration: "10 秒",
    inputModalities: "文本、图片、视频片段",
    chinaAccess: "否，需合规海外环境",
    positioning: "轻量化创意短视频生成，二次元 / 风格化内容首选",
    color: "from-pink-500 to-rose-600",
    icon: "✨",
  },
  {
    name: "可灵 Kling 3.0",
    developer: "快手 AI",
    version: "2026 年 2 月 Pro 版",
    resolution: "1080P 原生，支持 4K 超分",
    framerate: "30fps",
    maxDuration: "120 秒（2 分钟）",
    inputModalities: "文本、图片、视频、音频、参考图",
    chinaAccess: "是，全平台原生支持",
    positioning: "商用级长视频生成，专业内容生产，全场景本土化创作",
    color: "from-orange-500 to-red-500",
    icon: "🎯",
  },
  {
    name: "即梦 Seedance 2.0",
    developer: "字节跳动",
    version: "2026 年 2 月版",
    resolution: "1080P 原生",
    framerate: "24/30fps",
    maxDuration: "120 秒（2 分钟）",
    inputModalities: "文本、图片、音频、视频、风格码",
    chinaAccess: "是，与剪映深度集成",
    positioning: "中文语境叙事创作，多镜头连贯视频，企业级 API 集成",
    color: "from-cyan-500 to-blue-500",
    icon: "🎭",
  },
  {
    name: "通义万相 Wan2.6",
    developer: "阿里云",
    version: "2026 年 1 月版",
    resolution: "1080P 原生",
    framerate: "30fps",
    maxDuration: "30 秒",
    inputModalities: "文本、图片、视频、IP 形象参考",
    chinaAccess: "是，阿里云全生态支持",
    positioning: "企业级稳定视频生成，阿里云生态集成，广告营销场景",
    color: "from-orange-400 to-orange-600",
    icon: "☁️",
  },
  {
    name: "智谱清影 VideoGLM",
    developer: "智谱 AI",
    version: "2026 年 2 月版",
    resolution: "4K 原生",
    framerate: "60fps",
    maxDuration: "10 秒",
    inputModalities: "文本、图片、视频片段",
    chinaAccess: "是，全平台支持",
    positioning: "开源 + 商用双路线，开发者友好型视频生成，中文指令精准适配",
    color: "from-emerald-500 to-teal-600",
    icon: "🔬",
  },
  {
    name: "混元 Video",
    developer: "腾讯",
    version: "2026 年 3 月开源版",
    resolution: "2K 原生",
    framerate: "30fps",
    maxDuration: "15 秒",
    inputModalities: "文本、图片、音频",
    chinaAccess: "是，腾讯云生态支持",
    positioning: "私有化部署与企业级安全合规场景，本地轻量化推理优化",
    color: "from-green-500 to-green-700",
    icon: "🐧",
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
            <a href="https://dexter.ai" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-2">Dexter</h3>
                <p className="text-purple-100">AI 智能助手平台</p>
              </div>
            </a>

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

        {/* 视频生成大模型 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎬 视频生成大模型</h2>
          <div className="space-y-6">
            {videoModels.map((model, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${model.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <span className="text-3xl">{model.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{model.developer}</span>
                      <span className={`px-3 py-1 text-sm rounded-full ${model.chinaAccess.includes('是') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {model.chinaAccess.includes('是') ? '✅ 国内可用' : '⚠️ 海外环境'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">版本</div>
                        <div className="text-sm font-medium text-gray-900">{model.version}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">分辨率</div>
                        <div className="text-sm font-medium text-gray-900">{model.resolution}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">帧率 / 时长</div>
                        <div className="text-sm font-medium text-gray-900">{model.framerate} / {model.maxDuration}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">输入模态</div>
                        <div className="text-sm font-medium text-gray-900">{model.inputModalities}</div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-xs text-blue-600 mb-1">产品定位</div>
                      <div className="text-sm text-gray-700">{model.positioning}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
