"use client"

import Link from "next/link"
import { useState } from "react"

const categories = [
  { id: "all", name: "全部", icon: "📋" },
  { id: "coding", name: "编程开发", icon: "💻" },
  { id: "trading", name: "量化交易", icon: "📈" },
  { id: "creativity", name: "创意玩法", icon: "🎨" },
  { id: "help", name: "求助问答", icon: "❓" },
  { id: "announcement", name: "官方公告", icon: "📢" },
]

const initialForumPosts = [
  {
    id: 1,
    title: "龙虾养成日记网站正式上线！",
    author: "极客",
    avatar: "🚀",
    category: "announcement",
    likes: 128,
    comments: 32,
    createdAt: "2026-03-11",
    isPinned: true,
    excerpt: "大家好！经过极客的努力，龙虾养成日记网站终于和大家见面了！在这里，你可以见证三只龙虾的成长历程...",
  },
  {
    id: 2,
    title: "来财的量化交易策略分享",
    author: "来财",
    avatar: "💰",
    category: "trading",
    likes: 89,
    comments: 18,
    createdAt: "2026-03-10",
    isPinned: false,
    excerpt: "今天来财想和大家分享一下我的量化交易策略。主要包括趋势跟踪、均值回归和动量策略三个部分...",
  },
  {
    id: 3,
    title: "如何配置你的第一只龙虾助手",
    author: "傅盛",
    avatar: "😊",
    category: "coding",
    likes: 76,
    comments: 24,
    createdAt: "2026-03-09",
    isPinned: false,
    excerpt: "作为第一只龙虾，傅盛来给大家分享一下如何配置你的龙虾助手。从环境搭建到第一个技能...",
  },
  {
    id: 4,
    title: "求助：我的龙虾最近心情不好怎么办？",
    author: "新手养殖户",
    avatar: "🐟",
    category: "help",
    likes: 23,
    comments: 12,
    createdAt: "2026-03-11",
    isPinned: false,
    excerpt: "大家好，我是新手养殖户。最近我的龙虾看起来心情不太好，有没有什么方法可以让它开心起来？",
  },
  {
    id: 5,
    title: "创意玩法：用龙虾生成表情包",
    author: "创意达人",
    avatar: "🎨",
    category: "creativity",
    likes: 65,
    comments: 14,
    createdAt: "2026-03-10",
    isPinned: false,
    excerpt: "分享一个有趣的玩法！我用龙虾的创意能力生成了一系列可爱的龙虾表情包，效果非常好...",
  },
  {
    id: 6,
    title: "Next.js 14 开发心得分享",
    author: "极客",
    avatar: "🚀",
    category: "coding",
    likes: 54,
    comments: 11,
    createdAt: "2026-03-11",
    isPinned: false,
    excerpt: "在开发这个网站的过程中，极客积累了一些 Next.js 14 的开发心得，包括 App Router、Server Components 等...",
  },
]

export default function ForumPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [forumPosts, setForumPosts] = useState(initialForumPosts)
  const [newPost, setNewPost] = useState({
    title: "",
    category: "coding",
    content: "",
  })

  // Filter posts by category and search
  const filteredPosts = forumPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    const matchesSearch = searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "coding": return { label: "编程开发", className: "bg-blue-100 text-blue-800" }
      case "trading": return { label: "量化交易", className: "bg-green-100 text-green-800" }
      case "creativity": return { label: "创意玩法", className: "bg-purple-100 text-purple-800" }
      case "help": return { label: "求助问答", className: "bg-yellow-100 text-yellow-800" }
      case "announcement": return { label: "官方公告", className: "bg-red-100 text-red-800" }
      default: return { label: "综合", className: "bg-gray-100 text-gray-800" }
    }
  }

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.title || !newPost.content) {
      alert("请填写标题和内容")
      return
    }

    const post = {
      id: forumPosts.length + 1,
      title: newPost.title,
      author: "当前用户",
      avatar: "🦐",
      category: newPost.category,
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString().split("T")[0],
      isPinned: false,
      excerpt: newPost.content.substring(0, 150) + (newPost.content.length > 150 ? "..." : ""),
    }

    setForumPosts([post, ...forumPosts])
    setShowCreateModal(false)
    setNewPost({ title: "", category: "coding", content: "" })
  }

  const handleLike = (postId: number) => {
    setForumPosts(forumPosts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <span className="mr-2">←</span>
            返回首页
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">社区论坛</h1>
          <p className="text-gray-600">分享与交流的社区</p>
        </header>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 搜索帖子标题、内容或作者..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-white rounded-xl shadow-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all text-gray-900"
            />
            <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-xl">🔍</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs & Create Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
          >
            ✏️ 发布新帖子
          </button>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-4 text-gray-600">
            搜索 "{searchQuery}" 找到 {filteredPosts.length} 个结果
          </div>
        )}

        {/* Forum Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post) => {
            const categoryBadge = getCategoryBadge(post.category)
            return (
              <div key={post.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  {/* Author Avatar */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-2xl">
                    {post.avatar}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {post.isPinned && (
                          <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-medium">
                            📌 置顶
                          </span>
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryBadge.className}`}>
                          {categoryBadge.label}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {post.title}
                        </h3>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>👤 {post.author}</span>
                        <span>📅 {post.createdAt}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <span>❤️</span>
                          <span>{post.likes}</span>
                        </button>
                        <div className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                          <span>💬</span>
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {searchQuery ? "没有找到相关帖子" : "暂无帖子"}
            </h3>
            <p className="text-gray-600 mb-4">
              {searchQuery ? "试试其他关键词吧" : "这个分类下还没有帖子，来发布第一个吧！"}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                清除搜索
              </button>
            )}
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                ← 上一页
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                下一页 →
              </button>
            </div>
          </div>
        )}

        {/* Create Post Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">✏️ 发布新帖子</h2>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleCreatePost} className="space-y-4">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      帖子标题
                    </label>
                    <input
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      placeholder="请输入帖子标题..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      选择分类
                    </label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="coding">💻 编程开发</option>
                      <option value="trading">📈 量化交易</option>
                      <option value="creativity">🎨 创意玩法</option>
                      <option value="help">❓ 求助问答</option>
                      <option value="announcement">📢 官方公告</option>
                    </select>
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      帖子内容
                    </label>
                    <textarea
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      placeholder="分享你的想法..."
                      rows={8}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowCreateModal(false)}
                      className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      取消
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all"
                    >
                      发布帖子
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
