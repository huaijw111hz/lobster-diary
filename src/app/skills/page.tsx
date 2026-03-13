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
    name: "PromptHero",
    description: "提示词搜索和灵感平台",
    url: "https://prompthero.com",
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
                  { name: "coding-agent", desc: "AI 编程助手", url: "https://clawhub.com/skills/coding-agent" },
                  { name: "web-search", desc: "网页搜索工具", url: "https://clawhub.com/skills/web-search" },
                  { name: "image-generate", desc: "图片生成", url: "https://clawhub.com/skills/image-generate" },
                  { name: "video-generate", desc: "视频生成", url: "https://clawhub.com/skills/video-generate" },
                  { name: "data-analysis", desc: "数据分析", url: "https://clawhub.com/skills/data-analysis" },
                  { name: "language-translate", desc: "多语言翻译", url: "https://clawhub.com/skills/language-translate" },
                  { name: "code-review", desc: "代码审查", url: "https://clawhub.com/skills/code-review" },
                  { name: "document-write", desc: "文档写作", url: "https://clawhub.com/skills/document-write" },
                  { name: "meeting-summary", desc: "会议总结", url: "https://clawhub.com/skills/meeting-summary" },
                  { name: "task-planner", desc: "任务规划", url: "https://clawhub.com/skills/task-planner" },
                ].map((skill, index) => (
                  <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                    <span className="text-orange-500 font-bold w-6">{index + 1}.</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">- {skill.desc}</span>
                    <span className="text-xs text-blue-500 ml-auto">→</span>
                  </a>
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
                  { name: "chat-bot", desc: "聊天机器人", url: "https://skillhub.ai/skills/chat-bot" },
                  { name: "prompt-engineering", desc: "提示词工程", url: "https://skillhub.ai/skills/prompt-engineering" },
                  { name: "ai-art", desc: "AI 艺术创作", url: "https://skillhub.ai/skills/ai-art" },
                  { name: "music-compose", desc: "音乐创作", url: "https://skillhub.ai/skills/music-compose" },
                  { name: "game-design", desc: "游戏设计", url: "https://skillhub.ai/skills/game-design" },
                  { name: "story-write", desc: "故事写作", url: "https://skillhub.ai/skills/story-write" },
                  { name: "code-debug", desc: "代码调试", url: "https://skillhub.ai/skills/code-debug" },
                  { name: "api-integrate", desc: "API 集成", url: "https://skillhub.ai/skills/api-integrate" },
                  { name: "automation", desc: "自动化流程", url: "https://skillhub.ai/skills/automation" },
                  { name: "learning-tutor", desc: "学习辅导", url: "https://skillhub.ai/skills/learning-tutor" },
                ].map((skill, index) => (
                  <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <span className="text-blue-500 font-bold w-6">{index + 1}.</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">- {skill.desc}</span>
                    <span className="text-xs text-blue-500 ml-auto">→</span>
                  </a>
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
                  { name: "shell-script", desc: "Shell 脚本", url: "https://skills.sh/skills/shell-script" },
                  { name: "python-dev", desc: "Python 开发", url: "https://skills.sh/skills/python-dev" },
                  { name: "javascript", desc: "JavaScript 开发", url: "https://skills.sh/skills/javascript" },
                  { name: "devops", desc: "DevOps 工具", url: "https://skills.sh/skills/devops" },
                  { name: "cloud-ops", desc: "云运维", url: "https://skills.sh/skills/cloud-ops" },
                  { name: "security", desc: "安全审计", url: "https://skills.sh/skills/security" },
                  { name: "database", desc: "数据库操作", url: "https://skills.sh/skills/database" },
                  { name: "networking", desc: "网络工具", url: "https://skills.sh/skills/networking" },
                  { name: "monitoring", desc: "监控告警", url: "https://skills.sh/skills/monitoring" },
                  { name: "testing", desc: "测试框架", url: "https://skills.sh/skills/testing" },
                ].map((skill, index) => (
                  <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors">
                    <span className="text-green-500 font-bold w-6">{index + 1}.</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">- {skill.desc}</span>
                    <span className="text-xs text-blue-500 ml-auto">→</span>
                  </a>
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
