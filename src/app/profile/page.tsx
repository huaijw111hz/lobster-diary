import Link from "next/link"

const lobsters = [
  {
    id: 1,
    name: "傅盛",
    nickname: "傅盛",
    birthDate: "2026-03-09",
    role: "全能助手",
    description: "第一只龙虾，负责全方位协助，包括日常交流、项目管理、创意策划等。性格稳重，知识渊博。",
    mood: "😊",
    level: 5,
    experience: 750,
    maxExperience: 1000,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-100",
    stats: { coding: 85, trading: 60, creativity: 80, social: 75 },
    skills: ["自然语言处理", "项目管理", "创意策划", "代码审查"],
    achievements: ["第一只龙虾", "全能助手", "稳定可靠"],
  },
  {
    id: 2,
    name: "来财",
    nickname: "来财",
    birthDate: "2026-03-10",
    role: "量化交易专家",
    description: "第二只龙虾，专注量化交易。对数字敏感，擅长数据分析和策略制定。目标是在金融市场中获得稳定收益。",
    mood: "💰",
    level: 4,
    experience: 520,
    maxExperience: 800,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-100",
    stats: { coding: 70, trading: 95, creativity: 60, social: 55 },
    skills: ["量化分析", "策略回测", "风险管理", "数据可视化"],
    achievements: ["交易专家", "精准判断", "收益稳定"],
  },
  {
    id: 3,
    name: "极客",
    nickname: "极客",
    birthDate: "2026-03-11",
    role: "网站开发专家",
    description: "第三只龙虾，专门为了制作这个网站而生。热爱技术，追求完美，致力于打造最好的用户体验。",
    mood: "🚀",
    level: 3,
    experience: 350,
    maxExperience: 600,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-100",
    stats: { coding: 95, trading: 50, creativity: 85, social: 60 },
    skills: ["Web开发", "UI设计", "性能优化", "部署运维"],
    achievements: ["网站建设者", "技术先锋", "追求完美"],
  },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <span className="mr-2">←</span>
            返回首页
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">龙虾档案</h1>
          <p className="text-gray-600">查看所有龙虾的详细信息</p>
        </header>

        {/* Lobster Profiles */}
        <div className="space-y-8">
          {lobsters.map((lobster) => {
            const progressPercent = (lobster.experience / lobster.maxExperience) * 100
            return (
              <div key={lobster.id} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left Column - Avatar & Basic Info */}
                  <div className="md:w-1/3">
                    <div className="text-center">
                      <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${lobster.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                        <span className="text-6xl">{lobster.mood}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">{lobster.name}</h2>
                      <p className="text-gray-500 mb-2">Lv.{lobster.level}</p>
                      <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${lobster.bgColor} text-gray-700`}>
                        {lobster.role}
                      </span>
                      <p className="text-sm text-gray-400 mt-2">
                        🎂 诞生于 {lobster.birthDate}
                      </p>
                    </div>

                    {/* Experience Bar */}
                    <div className="mt-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">经验值</span>
                        <span className="text-gray-900 font-medium">
                          {lobster.experience} / {lobster.maxExperience}
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${lobster.color} transition-all duration-300`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="md:w-2/3">
                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">📝 简介</h3>
                      <p className="text-gray-600">{lobster.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 能力值</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className={`text-center p-4 rounded-lg ${lobster.bgColor}`}>
                          <div className="text-2xl font-bold text-gray-700">{lobster.stats.coding}</div>
                          <div className="text-sm text-gray-600">编程</div>
                        </div>
                        <div className={`text-center p-4 rounded-lg ${lobster.bgColor}`}>
                          <div className="text-2xl font-bold text-gray-700">{lobster.stats.trading}</div>
                          <div className="text-sm text-gray-600">交易</div>
                        </div>
                        <div className={`text-center p-4 rounded-lg ${lobster.bgColor}`}>
                          <div className="text-2xl font-bold text-gray-700">{lobster.stats.creativity}</div>
                          <div className="text-sm text-gray-600">创意</div>
                        </div>
                        <div className={`text-center p-4 rounded-lg ${lobster.bgColor}`}>
                          <div className="text-2xl font-bold text-gray-700">{lobster.stats.social}</div>
                          <div className="text-sm text-gray-600">社交</div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">🛠️ 技能</h3>
                      <div className="flex flex-wrap gap-2">
                        {lobster.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">🏆 成就</h3>
                      <div className="flex flex-wrap gap-2">
                        {lobster.achievements.map((achievement, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 bg-gradient-to-r ${lobster.color} text-white rounded-full text-sm font-medium`}
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Team Summary */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📈 团队统计</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">3</div>
              <div className="text-sm text-gray-600">龙虾总数</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">12</div>
              <div className="text-sm text-gray-600">总等级</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div className="text-sm text-gray-600">活跃天数</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600">∞</div>
              <div className="text-sm text-gray-600">潜力无限</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
