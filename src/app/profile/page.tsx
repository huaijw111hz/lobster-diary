import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <span className="mr-2">←</span>
            返回首页
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">个人中心</h1>
          <p className="text-gray-600">你的龙虾档案</p>
        </header>

        {/* Profile Card */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-6xl">🦞</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">来财</h2>
            <p className="text-gray-600 mb-6">Lv.5 · 开心</p>
            <p className="text-gray-500 text-sm">加入时间：2026-02-08</p>
          </div>
        </div>
      </div>
    </div>
  )
}
