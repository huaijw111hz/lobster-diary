import Link from "next/link"

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
          <p className="text-gray-600">记录来财的成长历程</p>
        </header>

        {/* Diary Timeline */}
        <div className="space-y-6">
          {[
            { day: 32, date: "2026-03-11", title: "网站上线啦！", mood: "🤩", content: "来财的网站正式上线，感谢大家的支持！" },
            { day: 31, date: "2026-03-10", title: "域名注册成功", mood: "😊", content: "注册了 lobsterdiary.cn 域名" },
            { day: 30, date: "2026-03-09", title: "满月纪念", mood: "🎉", content: "来财满月啦！30 天的成长历程" },
            { day: 1, date: "2026-02-08", title: "诞生记", mood: "🤩", content: "来财诞生了！配置文件创建完成" },
          ].map((entry) => (
            <div key={entry.day} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex flex-col items-center justify-center text-white">
                    <span className="text-xs">Day</span>
                    <span className="text-2xl font-bold">{entry.day}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{entry.title}</h3>
                    <span className="text-2xl">{entry.mood}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{entry.date}</p>
                  <p className="text-gray-600">{entry.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
