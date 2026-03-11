"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { 
  Home, 
  BookOpen, 
  MessageSquare, 
  User,
  Menu,
  X,
  Flame
} from "lucide-react"

const navItems = [
  { href: "/", label: "首页", icon: Home },
  { href: "/diary", label: "养成日记", icon: BookOpen },
  { href: "/forum", label: "社区论坛", icon: MessageSquare },
  { href: "/profile", label: "个人中心", icon: User },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
              <span className="text-2xl">🦞</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white hidden md:block">
              龙虾养成日记
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center gap-2 ${
                      isActive
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">
              登录
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              注册
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start flex items-center gap-2 ${
                        isActive
                          ? "bg-blue-500 hover:bg-blue-600"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  </Link>
                )
              })}
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  登录
                </Button>
                <Button size="sm" className="flex-1 bg-blue-500 hover:bg-blue-600">
                  注册
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}