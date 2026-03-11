'use client'

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Activity, Zap } from 'lucide-react';

interface LobsterState {
  id: string;
  name: string;
  level: number;
  experience: number;
  mood: string;
  stats: {
    coding: number;
    trading: number;
    creativity: number;
    social: number;
  };
}

export default function LobsterAvatar({ lobster }: { lobster: LobsterState }) {
  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'happy': return '😊';
      case 'excited': return '🤩';
      case 'tired': return '😴';
      case 'sad': return '😢';
      case 'hungry': return '😋';
      default: return '😐';
    }
  };

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'happy': return 'bg-green-500';
      case 'excited': return 'bg-yellow-500';
      case 'tired': return 'bg-blue-500';
      case 'sad': return 'bg-purple-500';
      case 'hungry': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const progressPercent = Math.min((lobster.experience / (lobster.level * 100)) * 100, 100);

  return (
    <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800/30">
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <div className="relative">
          <Avatar className="w-20 h-20 border-4 border-white dark:border-gray-800 shadow-lg">
            <AvatarImage src="https://api.dicebear.com/7.x/bottts/svg?seed=lobster" alt={lobster.name} />
            <AvatarFallback>🦞</AvatarFallback>
          </Avatar>
          {/* Mood Indicator */}
          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${getMoodColor(lobster.mood)} border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs`}>
            {getMoodEmoji(lobster.mood)}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{lobster.name}</h2>
            <Badge variant="default" className="bg-red-500">
              Lv.{lobster.level}
            </Badge>
          </div>

          {/* Experience Bar */}
          <div className="mb-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-600 dark:text-gray-400">经验值</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {lobster.experience} / {lobster.level * 100}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <Activity className="w-3 h-3" />
            <span>状态：{lobster.mood === 'happy' ? '开心' : lobster.mood === 'excited' ? '兴奋' : lobster.mood === 'tired' ? '疲惫' : lobster.mood === 'sad' ? '悲伤' : '饥饿'}</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2">
        <div className="text-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">编程</div>
          <div className="flex items-center justify-center gap-1">
            <Zap className="w-3 h-3 text-blue-500" />
            <span className="font-bold text-gray-900 dark:text-white">{lobster.stats.coding}</span>
          </div>
        </div>
        <div className="text-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">交易</div>
          <div className="flex items-center justify-center gap-1">
            <TrendingUp className="w-3 h-3 text-green-500" />
            <span className="font-bold text-gray-900 dark:text-white">{lobster.stats.trading}</span>
          </div>
        </div>
        <div className="text-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">创意</div>
          <div className="flex items-center justify-center gap-1">
            <Zap className="w-3 h-3 text-purple-500" />
            <span className="font-bold text-gray-900 dark:text-white">{lobster.stats.creativity}</span>
          </div>
        </div>
        <div className="text-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">社交</div>
          <div className="flex items-center justify-center gap-1">
            <Zap className="w-3 h-3 text-orange-500" />
            <span className="font-bold text-gray-900 dark:text-white">{lobster.stats.social}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
