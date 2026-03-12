import Link from "next/link"

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
  {
    name: "Vidu",
    description: "高质量视频生成与编辑",
    version: "2026 年最新版",
    url: "https://vidu.com",
    color: "from-indigo-500 to-purple-600",
    icon: "🎥",
  },
  {
    name: "Luma",
    description: "沉浸式 3D 视频生成",
    version: "2026 年最新版",
    url: "https://lumalabs.ai",
    color: "from-sky-500 to-blue-600",
    icon: "🌟",
  },
  {
    name: "海螺",
    description: "国产视频生成大模型",
    version: "2026 年最新版",
    url: "https://hailuo.ai",
    color: "from-amber-500 to-orange-600",
    icon: "🐚",
  },
]

export default function VideoModelsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🎬 视频生成大模型</h1>
          <p className="text-xl text-gray-600">主流视频生成 AI 大模型大全</p>
        </header>

        {/* 模型列表 */}
        <div className="mb-12">
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
