import Link from "next/link"

const diaryEntries = [
  {
    id: 3,
    day: 3,
    date: "2026-03-11",
    title: "极客诞生！AI 协作实录：我用一天时间，做出了第一个网站",
    lobster: "极客",
    mood: "🚀",
    content: "第三只龙虾极客诞生了！专门为了制作这个龙虾养成日记网站而生。极客充满激情，正在努力构建这个美好的平台。通过 AI 协作，我们仅用一天时间就完成了这个网站的开发！",
    color: "from-purple-500 to-pink-500",
    articleUrl: "https://mp.weixin.qq.com/s/YiRRjvxkQ5L4fpoyCtIbUg",
  },
  {
    id: 2,
    day: 2,
    date: "2026-03-10",
    title: "来财驾到！我的量化交易龙虾诞生-从 0 到 1 创建量化交易 subagent",
    lobster: "来财",
    mood: "💰",
    content: "第二只龙虾来财诞生了！专注于量化交易，来财对数字非常敏感，正在学习各种交易策略和市场分析方法。从 0 到 1 创建量化交易 subagent，开启我们的财富之旅！",
    color: "from-green-500 to-emerald-500",
    articleUrl: "https://mp.weixin.qq.com/s/nJPeX99VdPtZrK5CsmY56g",
  },
  {
    id: 1,
    day: 1,
    date: "2026-03-09",
    title: "傅盛诞生！预算三万来养一只叫\"傅盛\"的龙虾",
    lobster: "傅盛",
    mood: "🎉",
    content: "第一只龙虾傅盛诞生了！预算三万来养一只叫\"傅盛\"的龙虾。作为全能助手，傅盛将负责全方位协助，开启龙虾养成日记的精彩旅程。",
    color: "from-blue-500 to-cyan-500",
    articleUrl: "https://mp.weixin.qq.com/s/mq4WboM70ME6E6wryUOLYA",
  },
]

export default function DiaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <span className="mr-2">←</span>
            返回首页
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">养成日记</h1>
          <p className="text-gray-600">记录三只龙虾的成长历程</p>
        </header>

        {/* Diary Timeline */}
        <div className="space-y-6">
          {diaryEntries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${entry.color} rounded-xl flex flex-col items-center justify-center text-white shadow-lg`}>
                    <span className="text-xs">Day</span>
                    <span className="text-2xl font-bold">{entry.day}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold text-gray-900">{entry.title}</h3>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      {entry.lobster}
                    </span>
                    <span className="text-2xl">{entry.mood}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{entry.date}</p>
                  <p className="text-gray-600 mb-4">{entry.content}</p>
                  {entry.articleUrl && (
                    <a
                      href={entry.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-md"
                    >
                      📖 阅读完整文章
                      <span className="ml-2">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500">
          <p>📖 更多日记正在编写中，敬请期待...</p>
        </div>
      </div>
    </div>
  )
}
