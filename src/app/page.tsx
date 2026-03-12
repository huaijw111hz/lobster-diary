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
    description: "通用影视级视频生成标杆",
    version: "2026 年 2 月更新版",
    url: "https://sora.com",
    color: "from-gray-700 to-gray-900",
    icon: "🔮",
  },
  {
    name: "Veo 3.1",
    description: "企业级多模态视频生成",
    version: "2026 年 1 月版",
    url: "https://deepmind.google",
    color: "from-blue-600 to-blue-800",
    icon: "🎬",
  },
  {
    name: "Runway Gen-3",
    description: "专业创作者全流程视频工作流",
    version: "2026 年 1 月版",
    url: "https://runwayml.com",
    color: "from-purple-600 to-purple-800",
    icon: "🎨",
  },
  {
    name: "Pika 2.0",
    description: "轻量化创意短视频生成",
    version: "2026 年 2 月版",
    url: "https://pika.art",
    color: "from-pink-500 to-rose-600",
    icon: "✨",
  },
  {
    name: "可灵 Kling 3.0",
    description: "商用级长视频生成",
    version: "2026 年 2 月 Pro 版",
    url: "https://klingai.com",
    color: "from-orange-500 to-red-500",
    icon: "🎯",
  },
  {
    name: "即梦 Seedance 2.0",
    description: "中文语境叙事创作",
    version: "2026 年 2 月版",
    url: "https://jimeng.doubao.com",
    color: "from-cyan-500 to-blue-500",
    icon: "🎭",
  },
  {
    name: "通义万相 Wan2.6",
    description: "企业级稳定视频生成",
    version: "2026 年 1 月版",
    url: "https://wanxiang.aliyun.com",
    color: "from-orange-400 to-orange-600",
    icon: "☁️",
  },
  {
    name: "智谱清影 VideoGLM",
    description: "开源 + 商用双路线",
    version: "2026 年 2 月版",
    url: "https://chatglm.cn",
    color: "from-emerald-500 to-teal-600",
    icon: "🔬",
  },
  {
    name: "混元 Video",
    description: "私有化部署与企业级安全",
    version: "2026 年 3 月开源版",
    url: "https://hunyuan.tencent.com",
    color: "from-green-500 to-green-700",
    icon: "🐧",
  },
]

const deploymentPlatforms = [
  {
    name: "EasyClaw",
    description: "纯小白 / 个人用",
    url: "https://easyclaw.com",
    color: "from-green-500 to-emerald-600",
    icon: "🐾",
  },
  {
    name: "AutoClaw（智谱澳龙）",
    description: "国内用户 / 想一键部署",
    url: "https://autoglm.zhipuai.cn/autoclaw",
    color: "from-blue-500 to-indigo-600",
    icon: "🤖",
  },
  {
    name: "WorkBuddy（腾讯）",
    description: "企业办公 / 用企业微信",
    url: "https://www.codebuddy.cn/work/",
    color: "from-cyan-500 to-blue-600",
    icon: "💼",
  },
  {
    name: "ArkClaw（字节）",
    description: "飞书生态用户 / 不想本地部署",
    url: "https://console.volcengine.com/ark/claw",
    color: "from-orange-500 to-red-500",
    icon: "🚀",
  },
  {
    name: "OpenClaw 国内镜像",
    description: "技术党 / 想自定义功能",
    url: "https://gitee.com/zxs731/open-cut-raspberry-pi",
    color: "from-purple-500 to-pink-600",
    icon: "⚙️",
  },
  {
    name: "Qclaw",
    description: "轻量入门 / 低资源占用",
    url: "https://github.com/qclaw/qclaw",
    color: "from-yellow-500 to-orange-500",
    icon: "📱",
  },
  {
    name: "LobsterAI",
    description: "新手友好 / 多场景模板",
    url: "https://lobsterai.com",
    color: "from-red-500 to-rose-600",
    icon: "🦞",
  },
  {
    name: "Kimiclaw",
    description: "长文本处理 / 搜索能力强",
    url: "https://kimiclaw.ai",
    color: "from-teal-500 to-cyan-600",
    icon: "📚",
  },
  {
    name: "MiniMax",
    description: "多模态需求 / 音图能力强",
    url: "https://www.minimaxi.com",
    color: "from-violet-500 to-purple-600",
    icon: "🎵",
  },
  {
    name: "Copaw",
    description: "开发场景 / 代码能力强",
    url: "https://copaw.dev",
    color: "from-indigo-500 to-blue-600",
    icon: "💻",
  },
  {
    name: "扣子（Coze）",
    description: "零代码搭建 / 多平台发布",
    url: "https://www.coze.cn",
    color: "from-pink-500 to-rose-600",
    icon: "🔘",
  },
  {
    name: "天翼智爪（中国电信）",
    description: "电信云生态 / 安全可靠",
    url: "https://www.189.cn",
    color: "from-green-600 to-teal-600",
    icon: "📶",
  },
  {
    name: "联通智爪（中国联通）",
    description: "联通云生态 / 网络稳定",
    url: "https://www.10010.com",
    color: "from-red-600 to-orange-600",
    icon: "🌐",
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

        {/* 一键部署平台 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🚀 一键部署平台</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {deploymentPlatforms.map((platform, index) => (
              <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`bg-gradient-to-br ${platform.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full`}>
                  <div className="text-3xl mb-2">{platform.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{platform.name}</h3>
                  <p className="text-sm text-white/80">{platform.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 视频生成大模型 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎬 视频生成大模型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videoModels.map((model, index) => (
              <a key={index} href={model.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`bg-gradient-to-br ${model.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full`}>
                  <div className="text-3xl mb-2">{model.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{model.name}</h3>
                  <p className="text-xs text-white/70 mb-1">{model.version}</p>
                  <p className="text-sm text-white/80">{model.description}</p>
                </div>
              </a>
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
