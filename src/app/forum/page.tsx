import Link from "next/link"

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <span className="mr-2">←</span>
            返回首页
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">社区论坛</h1>
          <p className="text-gray-600">分享与交流的社区</p>
        </header>

        {/* Forum Posts */}
        <div className="space-y-6">
          {[
            { title: "如何配置你的第一只龙虾", author: "新手入门", likes: 89, comments: 23 },
            { title: "我的量化交易入门之路", author: "交易高手", likes: 78, comments: 18 },
            { title: "AI 助手的 N 种用法", author: "创意达人", likes: 65, comments: 14 },
          ].map((post, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>👤 {post.author}</span>
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
