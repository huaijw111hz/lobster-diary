import Link from "next/link"

const aiTools = [
  {
    name: "NoteLLM",
    description: "AI 笔记助手，智能整理知识",
    url: "https://notellm.com",
    likes: 18500,
    color: "from-blue-500 to-cyan-600",
    icon: "📝",
  },
  {
    name: "Notion AI",
    description: "Notion 内置 AI 写作助手",
    url: "https://www.notion.so/product/ai",
    likes: 17200,
    color: "from-gray-700 to-gray-900",
    icon: "📓",
  },
  {
    name: "Grammarly",
    description: "AI 语法检查和写作增强",
    url: "https://www.grammarly.com",
    likes: 16800,
    color: "from-green-500 to-emerald-600",
    icon: "✍️",
  },
  {
    name: "Midjourney",
    description: "AI 图像生成工具",
    url: "https://www.midjourney.com",
    likes: 21500,
    color: "from-purple-600 to-indigo-700",
    icon: "🎨",
  },
  {
    name: "DALL-E 3",
    description: "OpenAI 图像生成模型",
    url: "https://openai.com/dall-e-3",
    likes: 19800,
    color: "from-orange-500 to-red-600",
    icon: "🖼️",
  },
  {
    name: "GitHub Copilot",
    description: "AI 编程助手",
    url: "https://github.com/copilot",
    likes: 20300,
    color: "from-gray-600 to-gray-800",
    icon: "💻",
  },
  {
    name: "Cursor",
    description: "AI 代码编辑器",
    url: "https://cursor.so",
    likes: 14600,
    color: "from-teal-500 to-cyan-600",
    icon: "🖱️",
  },
  {
    name: "Warp",
    description: "AI 驱动的终端",
    url: "https://www.warp.dev",
    likes: 13200,
    color: "from-pink-500 to-rose-600",
    icon: "⚡",
  },
  {
    name: "Otter.ai",
    description: "AI 会议记录和转录",
    url: "https://otter.ai",
    likes: 12800,
    color: "from-amber-500 to-orange-600",
    icon: "🎙️",
  },
  {
    name: "Fireflies.ai",
    description: "AI 会议助手",
    url: "https://fireflies.ai",
    likes: 11900,
    color: "from-yellow-500 to-amber-600",
    icon: "🔥",
  },
  {
    name: "Descript",
    description: "AI 音频和视频编辑",
    url: "https://www.descript.com",
    likes: 15400,
    color: "from-indigo-500 to-purple-600",
    icon: "🎬",
  },
  {
    name: "Runway",
    description: "AI 视频创作平台",
    url: "https://runwayml.com",
    likes: 17600,
    color: "from-cyan-500 to-blue-600",
    icon: "🎥",
  },
  {
    name: "Canva AI",
    description: "AI 图形设计工具",
    url: "https://www.canva.com/ai",
    likes: 18900,
    color: "from-blue-400 to-indigo-500",
    icon: "🎯",
  },
  {
    name: "Gamma",
    description: "AI 演示文稿生成",
    url: "https://gamma.app",
    likes: 16200,
    color: "from-purple-500 to-pink-600",
    icon: "📊",
  },
  {
    name: "Tome",
    description: "AI 故事和演示",
    url: "https://tome.app",
    likes: 14800,
    color: "from-violet-500 to-purple-600",
    icon: "📖",
  },
  {
    name: "Perplexity AI",
    description: "AI 搜索引擎",
    url: "https://www.perplexity.ai",
    likes: 22100,
    color: "from-sky-500 to-blue-600",
    icon: "🔍",
  },
  {
    name: "Phind",
    description: "AI 开发者搜索引擎",
    url: "https://www.phind.com",
    likes: 13700,
    color: "from-orange-500 to-amber-600",
    icon: "🔎",
  },
  {
    name: "ChatPDF",
    description: "AI PDF 文档问答",
    url: "https://www.chatpdf.com",
    likes: 15900,
    color: "from-red-500 to-rose-600",
    icon: "📄",
  },
  {
    name: "DocuAsk",
    description: "AI 文档分析",
    url: "https://docuask.com",
    likes: 11500,
    color: "from-teal-500 to-emerald-600",
    icon: "📑",
  },
  {
    name: "Luma AI",
    description: "AI 3D 视频生成",
    url: "https://lumalabs.ai",
    likes: 14200,
    color: "from-indigo-400 to-purple-500",
    icon: "🌟",
  },
]

// 按点赞量排序
const sortedTools = [...aiTools].sort((a, b) => b.likes - a.likes)

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🛠️ 热门好用AI工具大全</h1>
          <p className="text-xl text-gray-600">20个高点赞实用AI工具推荐</p>
        </header>

        {/* 工具列表 */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedTools.map((tool, index) => (
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
