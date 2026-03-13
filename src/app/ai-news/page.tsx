import Link from "next/link"

// 国外权威AI科技资讯网站
const foreignNewsSites = [
  { name: "MIT Technology Review", description: "麻省理工科技评论", url: "https://www.technologyreview.com/", icon: "🏛️" },
  { name: "TechCrunch AI专栏", description: "科技创业资讯", url: "https://techcrunch.com/category/artificial-intelligence/", icon: "🗞️" },
  { name: "Wired AI专栏", description: "连线杂志AI报道", url: "https://www.wired.com/tag/artificial-intelligence/", icon: "🔌" },
  { name: "The Verge AI", description: "科技与文化资讯", url: "https://www.theverge.com/ai", icon: "📱" },
  { name: "AI News", description: "专注AI垂直资讯", url: "https://www.ainewsletter.com/", icon: "🤖" },
  { name: "OpenAI Blog", description: "官方研究动态", url: "https://openai.com/blog", icon: "🧠" },
  { name: "Google DeepMind Blog", description: "DeepMind研究动态", url: "https://deepmind.google/discover/blog/", icon: "🔬" },
  { name: "Ars Technica AI", description: "硬核科技分析", url: "https://arstechnica.com/ai/", icon: "⚙️" },
  { name: "VentureBeat AI", description: "AI商业资讯", url: "https://venturebeat.com/category/ai/", icon: "💼" },
]

// 国内权威AI科技资讯网站
const domesticNewsSites = [
  { name: "机器之心", description: "专业AI媒体", url: "https://www.jiqizhixin.com/", icon: "🤖" },
  { name: "量子位", description: "AI产业报道", url: "https://www.qbitai.com/", icon: "⚛️" },
  { name: "新智元", description: "AI领域资讯", url: "https://www.aixinzhi.com/", icon: "🧠" },
  { name: "36氪AI专栏", description: "科技创业资讯", url: "https://36kr.com/column/ai/", icon: "🚀" },
  { name: "AI科技评论", description: "AI技术评论", url: "https://www.aitechyun.com/", icon: "💬" },
  { name: "InfoQ AI", description: "软件开发技术", url: "https://www.infoq.cn/topic/AI", icon: "💻" },
  { name: "CSDN AI专区", description: "开发者社区", url: "https://ai.csdn.net/", icon: "👨‍💻" },
  { name: "中国信通院", description: "官方产业政策", url: "https://www.caict.ac.cn/", icon: "🏢" },
  { name: "虎嗅网科技板块", description: "科技商业资讯", url: "https://www.huxiu.com/tech", icon: "🐯" },
]

// 海外社交平台博主
const foreignBloggers = [
  { name: "Andrej Karpathy", description: "前OpenAI科学家，AI技术顶流", xUrl: "https://twitter.com/karpathy", youtubeUrl: "https://www.youtube.com/@AndrejKarpathy", icon: "👨‍🔬" },
  { name: "Sam Altman", description: "OpenAI创始人", xUrl: "https://twitter.com/sama", icon: "🧑‍💼" },
  { name: "Yann LeCun", description: "深度学习三巨头，Meta AI主管", xUrl: "https://twitter.com/ylecun", icon: "🎓" },
  { name: "Lex Fridman", description: "AI播客顶流，深度访谈", youtubeUrl: "https://www.youtube.com/@lexfridman", icon: "🎙️" },
  { name: "Andrew Ng（吴恩达）", description: "AI教育先驱", xUrl: "https://twitter.com/AndrewNg", youtubeUrl: "https://www.youtube.com/@Deeplearningai", icon: "👨‍🏫" },
  { name: "Demis Hassabis", description: "DeepMind创始人", xUrl: "https://twitter.com/DemisHassabis", icon: "🧪" },
]

// 国内社交平台博主
const domesticBloggers = {
  zhihu: [
    { name: "苏洋", description: "科技博主", url: "https://www.zhihu.com/people/su-yang-41-98", icon: "📝" },
    { name: "信息门下走狗", description: "AI动态解读", url: "https://www.zhihu.com/people/xxmtt", icon: "🐕" },
    { name: "Hugging Face", url: "https://www.zhihu.com/org/huggingface", icon: "🤗" },
  ],
  bilibili: [
    { name: "秋葉aaaki", description: "AI工具/生成教程顶流", url: "https://space.bilibili.com/124345", icon: "🍂" },
    { name: "同济子豪兄", description: "AI科普+代码实战", url: "https://space.bilibili.com/19000884", icon: "🎓" },
    { name: "青龙圣者", description: "AI绘画/工作流硬核教程", url: "https://space.bilibili.com/766993", icon: "🐉" },
  ],
  wechat: [
    { name: "量子位", description: "AI产业报道", url: "https://www.qbitai.com/", icon: "⚛️" },
    { name: "机器之心", description: "专业AI媒体", url: "https://www.jiqizhixin.com/", icon: "🤖" },
    { name: "新智元", description: "AI领域资讯", url: "https://www.aixinzhi.com/", icon: "🧠" },
    { name: "数字生命卡兹克", description: "AI科技博主", icon: "🎮" },
    { name: "LOW特朗", description: "AI内容创作者", icon: "🎤" },
  ],
}

export default function AINewsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📰 AI最新资讯</h1>
          <p className="text-xl text-gray-600">海内外AI科技资讯与博主推荐</p>
        </header>

        {/* 国外权威AI科技资讯网站 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🌍</span>
            国外权威AI科技资讯网站
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foreignNewsSites.map((site, index) => (
              <a key={index} href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full">
                  <div className="text-3xl mb-2">{site.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{site.name}</h3>
                  <p className="text-sm text-white/80">{site.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 国内权威AI科技资讯网站 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🇨🇳</span>
            国内权威AI科技资讯网站
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {domesticNewsSites.map((site, index) => (
              <a key={index} href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full">
                  <div className="text-3xl mb-2">{site.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{site.name}</h3>
                  <p className="text-sm text-white/80">{site.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 海外社交平台博主 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🌟</span>
            海外社交平台博主（X/YouTube/LinkedIn）
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foreignBloggers.map((blogger, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{blogger.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{blogger.name}</h3>
                    <p className="text-sm text-gray-600">{blogger.description}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {blogger.xUrl && (
                    <a href={blogger.xUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                      X (Twitter)
                    </a>
                  )}
                  {blogger.youtubeUrl && (
                    <a href={blogger.youtubeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 text-white text-center py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 国内社交平台博主 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🇨🇳</span>
            国内社交平台博主（知乎/B站/微信公众号）
          </h2>

          {/* 知乎 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              知乎平台
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {domesticBloggers.zhihu.map((blogger, index) => (
                  <a key={index} href={blogger.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-2xl">{blogger.icon}</span>
                    <div>
                      <span className="font-medium text-gray-900">{blogger.name}</span>
                      {blogger.description && <span className="text-sm text-gray-500"> - {blogger.description}</span>}
                    </div>
                    <span className="text-xs text-blue-500 ml-auto">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* B站 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">📺</span>
              B站平台
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {domesticBloggers.bilibili.map((blogger, index) => (
                  <a key={index} href={blogger.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <span className="text-2xl">{blogger.icon}</span>
                    <div>
                      <span className="font-medium text-gray-900">{blogger.name}</span>
                      {blogger.description && <span className="text-sm text-gray-500"> - {blogger.description}</span>}
                    </div>
                    <span className="text-xs text-pink-500 ml-auto">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 微信公众号 */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">💬</span>
              微信公众号
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {domesticBloggers.wechat.map((account, index) => (
                  account.url ? (
                    <a key={index} href={account.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <span className="text-2xl">{account.icon}</span>
                      <div>
                        <span className="font-medium text-gray-900">{account.name}</span>
                        {account.description && <span className="text-sm text-gray-500"> - {account.description}</span>}
                      </div>
                      <span className="text-xs text-green-500 ml-auto">→</span>
                    </a>
                  ) : (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{account.icon}</span>
                      <div>
                        <span className="font-medium text-gray-900">{account.name}</span>
                        {account.description && <span className="text-sm text-gray-500"> - {account.description}</span>}
                      </div>
                      <span className="text-xs text-gray-400 ml-auto">微信搜索</span>
                    </div>
                  )
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
