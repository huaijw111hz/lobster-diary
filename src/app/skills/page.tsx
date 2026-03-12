import Link from "next/link"

const skillPlatforms = [
  {
    name: "ClawHub",
    description: "OpenClaw 官方技能商店",
    url: "https://clawhub.com",
    color: "from-purple-500 to-pink-600",
    icon: "🦞",
  },
  {
    name: "SkillHub",
    description: "社区驱动的技能分享平台",
    url: "https://skillhub.ai",
    color: "from-blue-500 to-cyan-600",
    icon: "🏪",
  },
  {
    name: "Skills.sh",
    description: "命令行技能仓库",
    url: "https://skills.sh",
    color: "from-green-500 to-emerald-600",
    icon: "💻",
  },
  {
    name: "AgentSkill",
    description: "AI Agent 技能市场",
    url: "https://agentskill.com",
    color: "from-orange-500 to-red-600",
    icon: "🤖",
  },
  {
    name: "PromptHub",
    description: "提示词和技能模板",
    url: "https://prompthub.io",
    color: "from-indigo-500 to-purple-600",
    icon: "📝",
  },
  {
    name: "OpenSkill",
    description: "开源技能社区",
    url: "https://openskill.dev",
    color: "from-teal-500 to-cyan-600",
    icon: "🔓",
  },
  {
    name: "SkillStore",
    description: "企业级技能市场",
    url: "https://skillstore.io",
    color: "from-violet-500 to-purple-600",
    icon: "🏢",
  },
  {
    name: "AutoSkill",
    description: "自动化技能平台",
    url: "https://autoskill.ai",
    color: "from-amber-500 to-orange-600",
    icon: "⚡",
  },
]

export default function SkillsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🎯 SKILLS 技能商店</h1>
          <p className="text-xl text-gray-600">AI 技能商店和资源平台大全</p>
        </header>

        {/* 平台列表 */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skillPlatforms.map((platform, index) => (
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

        {/* 热门SKILLS榜单 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            热门SKILLS榜单（Top 10）
          </h2>
          
          {/* ClawHub Top 10 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🦞</span>
              ClawHub 热门 SKILLS
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "coding-agent - AI 编程助手",
                  "web-search - 网页搜索工具",
                  "image-generate - 图片生成",
                  "video-generate - 视频生成",
                  "data-analysis - 数据分析",
                  "language-translate - 多语言翻译",
                  "code-review - 代码审查",
                  "document-write - 文档写作",
                  "meeting-summary - 会议总结",
                  "task-planner - 任务规划",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-orange-500 font-bold w-6">{index + 1}.</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SkillHub Top 10 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🏪</span>
              SkillHub 热门 SKILLS
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "chat-bot - 聊天机器人",
                  "prompt-engineering - 提示词工程",
                  "ai-art - AI 艺术创作",
                  "music-compose - 音乐创作",
                  "game-design - 游戏设计",
                  "story-write - 故事写作",
                  "code-debug - 代码调试",
                  "api-integrate - API 集成",
                  "automation - 自动化流程",
                  "learning-tutor - 学习辅导",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500 font-bold w-6">{index + 1}.</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills.sh Top 10 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">💻</span>
              Skills.sh 热门 SKILLS
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "shell-script - Shell 脚本",
                  "python-dev - Python 开发",
                  "javascript - JavaScript 开发",
                  "devops - DevOps 工具",
                  "cloud-ops - 云运维",
                  "security - 安全审计",
                  "database - 数据库操作",
                  "networking - 网络工具",
                  "monitoring - 监控告警",
                  "testing - 测试框架",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500 font-bold w-6">{index + 1}.</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
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
