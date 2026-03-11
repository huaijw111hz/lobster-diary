'use client'

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    username: string;
    avatar: string;
    lobsterLevel: number;
  };
  category: string;
  likes: number;
  comments: number;
  createdAt: string;
  isPinned: boolean;
}

export default function PostCard({ post }: { post: Post }) {
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'coding':
        return { label: '编码', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' };
      case 'trading':
        return { label: '交易', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' };
      case 'creativity':
        return { label: '创意', className: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' };
      case 'general':
        return { label: '综合', className: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400' };
      case 'help':
        return { label: '求助', className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' };
      default:
        return { label: '综合', className: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400' };
    }
  };

  const categoryBadge = getCategoryBadge(post.category);

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-start gap-4">
        {/* Author Avatar */}
        <Avatar className="w-12 h-12">
          <AvatarImage src={post.author.avatar} alt={post.author.username} />
          <AvatarFallback>{post.author.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2 flex-wrap">
              {post.isPinned && (
                <Badge variant="default" className="bg-red-500">
                  置顶
                </Badge>
              )}
              <Badge variant="outline" className={categoryBadge.className}>
                {categoryBadge.label}
              </Badge>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h3>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {post.content}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Avatar className="w-5 h-5">
                  <AvatarImage src={post.author.avatar} alt={post.author.username} />
                  <AvatarFallback>{post.author.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <span>{post.author.username}</span>
                <Badge variant="secondary" className="text-xs">
                  Lv.{post.author.lobsterLevel}
                </Badge>
              </div>
              <span>•</span>
              <span>{new Date(post.createdAt).toLocaleDateString('zh-CN')}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                <span>{post.comments}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
