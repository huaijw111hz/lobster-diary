import Link from "next/link"

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

export default function DeploymentPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🚀 一键部署平台</h1>
          <p className="text-xl text-gray-600">快速部署 AI 助手的平台大全</p>
        </header>

        {/* 平台列表 */}
        <div className="mb-12">
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
