import Link from "next/link"

// 开发工具
const devTools = [
  { name: "GitHub Copilot", description: "AI 编程助手", url: "https://github.com/copilot", likes: 20300, color: "from-gray-600 to-gray-800", icon: "💻" },
  { name: "Cursor", description: "AI 代码编辑器", url: "https://cursor.so", likes: 14600, color: "from-teal-500 to-cyan-600", icon: "🖱️" },
  { name: "Warp", description: "AI 驱动的终端", url: "https://www.warp.dev", likes: 13200, color: "from-pink-500 to-rose-600", icon: "⚡" },
  { name: "Phind", description: "AI 开发者搜索引擎", url: "https://www.phind.com", likes: 13700, color: "from-orange-500 to-amber-600", icon: "🔎" },
  { name: "Replit", description: "在线 IDE 与 AI 协作", url: "https://replit.com", likes: 15200, color: "from-orange-500 to-red-500", icon: "🔧" },
  { name: "Hugging Face", description: "AI 模型平台与部署", url: "https://huggingface.co", likes: 21000, color: "from-yellow-500 to-amber-500", icon: "🤗" },
]

// 创作工具
const creativeTools = [
  { name: "Midjourney", description: "AI 图像生成工具", url: "https://www.midjourney.com", likes: 21500, color: "from-purple-600 to-indigo-700", icon: "🎨" },
  { name: "DALL-E 3", description: "OpenAI 图像生成模型", url: "https://openai.com/dall-e-3", likes: 19800, color: "from-orange-500 to-red-600", icon: "🖼️" },
  { name: "Sora", description: "OpenAI 视频生成模型", url: "https://openai.com/sora", likes: 22500, color: "from-red-500 to-rose-600", icon: "🎬" },
  { name: "Runway", description: "专业 AI 视频创作平台", url: "https://runwayml.com", likes: 18200, color: "from-purple-500 to-pink-600", icon: "✨" },
  { name: "Descript", description: "AI 音频和视频编辑", url: "https://www.descript.com", likes: 15400, color: "from-indigo-500 to-purple-600", icon: "🎙️" },
  { name: "Suno AI", description: "AI 音乐生成工具", url: "https://suno.ai", likes: 19500, color: "from-pink-500 to-rose-500", icon: "🎵" },
  { name: "Canva AI", description: "AI 图形设计工具", url: "https://www.canva.com/ai", likes: 18900, color: "from-blue-400 to-indigo-500", icon: "🎯" },
]

// 实用工具
const utilityTools = [
  { name: "Perplexity AI", description: "AI 搜索引擎", url: "https://www.perplexity.ai", likes: 22100, color: "from-sky-500 to-blue-600", icon: "🔍" },
  { name: "NoteLLM", description: "AI 笔记助手，智能整理知识", url: "https://notellm.com", likes: 18500, color: "from-blue-500 to-cyan-600", icon: "📝" },
  { name: "Notion AI", description: "Notion 内置 AI 写作助手", url: "https://www.notion.so/product/ai", likes: 17200, color: "from-gray-700 to-gray-900", icon: "📓" },
  { name: "Grammarly", description: "AI 语法检查和写作增强", url: "https://www.grammarly.com", likes: 16800, color: "from-green-500 to-emerald-600", icon: "✍️" },
  { name: "Otter.ai", description: "AI 会议记录和转录", url: "https://otter.ai", likes: 12800, color: "from-amber-500 to-orange-600", icon: "🎤" },
  { name: "Fireflies.ai", description: "AI 会议助手", url: "https://fireflies.ai", likes: 11900, color: "from-yellow-500 to-amber-600", icon: "🔥" },
  { name: "Gamma", description: "AI 演示文稿生成", url: "https://gamma.app", likes: 16200, color: "from-purple-500 to-pink-600", icon: "📊" },
  { name: "Tome", description: "AI 故事和演示", url: "https://tome.app", likes: 14800, color: "from-violet-500 to-purple-600", icon: "📖" },
  { name: "ChatPDF", description: "AI PDF 文档问答", url: "https://www.chatpdf.com", likes: 15900, color: "from-red-500 to-rose-600", icon: "📄" },
  { name: "DocuAsk", description: "AI 文档分析", url: "https://docuask.com", likes: 11500, color: "from-teal-500 to-emerald-600", icon: "📑" },
]

// 学习工具
const learningTools = [
  { name: "Coursera AI", description: "AI 课程与认证", url: "https://www.coursera.org", likes: 17500, color: "from-blue-600 to-blue-700", icon: "🎓" },
  { name: "DeepLearning.AI", description: "吴恩达深度学习课程", url: "https://www.deeplearning.ai", likes: 20800, color: "from-green-500 to-teal-600", icon: "🧠" },
  { name: "fast.ai", description: "实用深度学习课程", url: "https://course.fast.ai", likes: 14200, color: "from-orange-500 to-red-600", icon: "⚡" },
  { name: "Kaggle Learn", description: "数据科学与机器学习", url: "https://www.kaggle.com/learn", likes: 16300, color: "from-cyan-500 to-blue-600", icon: "📊" },
  { name: "Hugging Face Course", description: "NLP 与 Transformers 课程", url: "https://huggingface.co/learn", likes: 15700, color: "from-yellow-500 to-amber-500", icon: "🤗" },
  { name: "Brilliant", description: "交互式数学与科学学习", url: "https://brilliant.org", likes: 13800, color: "from-purple-500 to-pink-600", icon: "💡" },
  { name: "LangChain Docs", description: "LLM 应用开发指南", url: "https://python.langchain.com", likes: 12900, color: "from-green-600 to-emerald-600", icon: "🔗" },
  { name: "Wolfram Alpha", description: "计算知识引擎", url: "https://www.wolframalpha.com", likes: 11800, color: "from-red-600 to-orange-600", icon: "🧮" },
]

export default function AIToolsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🛠️ AI 工具导航</h1>
          <p className="text-xl text-gray-600">分类整理的 AI 工具大全</p>
        </header>

        {/* 开发工具 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">💻</span>
            开发工具
          </h2>
          <p className="text-gray-600 mb-6">编程助手、代码生成、模型部署等开发相关工具</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {devTools.map((tool, index) => (
              <a key={index} href={tool.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`bg-gradient-to-br ${tool.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 bg-black/20 text-white text-xs px-2 py-1 rounded-full">
                    ❤️ {tool.likes.toLocaleString()}
                  </div>
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{tool.name}</h3>
                  <p className="text-sm text-white/80">{tool.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 创作工具 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🎨</span>
            创作工具
          </h2>
          <p className="text-gray-600 mb-6">图片生成、视频生成、音频生成、设计等创意工具</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {creativeTools.map((tool, index) => (
              <a key={index} href={tool.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`bg-gradient-to-br ${tool.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 bg-black/20 text-white text-xs px-2 py-1 rounded-full">
                    ❤️ {tool.likes.toLocaleString()}
                  </div>
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{tool.name}</h3>
                  <p className="text-sm text-white/80">{tool.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 实用工具 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🛠️</span>
            实用工具
          </h2>
          <p className="text-gray-600 mb-6">搜索引擎、笔记、写作、会议、文档等效率工具</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {utilityTools.map((tool, index) => (
              <a key={index} href={tool.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`bg-gradient-to-br ${tool.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 bg-black/20 text-white text-xs px-2 py-1 rounded-full">
                    ❤️ {tool.likes.toLocaleString()}
                  </div>
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{tool.name}</h3>
                  <p className="text-sm text-white/80">{tool.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 学习工具 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">📚</span>
            学习工具
          </h2>
          <p className="text-gray-600 mb-6">AI 教育、技能培训、在线课程、知识图谱等学习资源</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningTools.map((tool, index) => (
              <a key={index} href={tool.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`bg-gradient-to-br ${tool.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 bg-black/20 text-white text-xs px-2 py-1 rounded-full">
                    ❤️ {tool.likes.toLocaleString()}
                  </div>
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{tool.name}</h3>
                  <p className="text-sm text-white/80">{tool.description}</p>
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
