import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="w-24 h-24 mx-auto bg-red-500 rounded-full flex items-center justify-center mb-4">
            <span className="text-5xl">🦞</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">龙虾养成日记</h1>
          <p className="text-xl text-gray-600">见证一只 AI 龙虾的养成之路</p>
        </header>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link href="/diary" className="block">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📖</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">养成日记</h2>
              <p className="text-gray-600">记录来财的成长历程</p>
            </div>
          </Link>

          <Link href="/forum" className="block">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">社区论坛</h2>
              <p className="text-gray-600">分享与交流的社区</p>
            </div>
          </Link>

          <Link href="/profile" className="block">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👤</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">个人中心</h2>
              <p className="text-gray-600">你的龙虾档案</p>
            </div>
          </Link>
        </div>

        {/* Lobster Status */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">😊</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">来财</h2>
            <p className="text-gray-600">Lv.5 · 开心</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">85</div>
              <div className="text-sm text-gray-600">编程</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">70</div>
              <div className="text-sm text-gray-600">交易</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">90</div>
              <div className="text-sm text-gray-600">创意</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">75</div>
              <div className="text-sm text-gray-600">社交</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p>© 2026 龙虾养成日记. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
