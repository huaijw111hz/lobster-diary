'use client'

import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface StatCardProps {
  title: string
  value: number
  maxValue?: number
  trend?: 'up' | 'down' | 'flat'
  trendValue?: number
  icon?: string
  color?: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'gray'
  showProgress?: boolean
  tooltip?: string
}

const colorClasses = {
  red: {
    bg: 'bg-red-50 dark:bg-red-900/10',
    text: 'text-red-600 dark:text-red-400',
    border: 'border-red-200 dark:border-red-800/30',
    progress: 'bg-red-500',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800/30',
    progress: 'bg-blue-500',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/10',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800/30',
    progress: 'bg-green-500',
  },
  yellow: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/10',
    text: 'text-yellow-600 dark:text-yellow-400',
    border: 'border-yellow-200 dark:border-yellow-800/30',
    progress: 'bg-yellow-500',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/10',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800/30',
    progress: 'bg-purple-500',
  },
  gray: {
    bg: 'bg-gray-50 dark:bg-gray-900/10',
    text: 'text-gray-600 dark:text-gray-400',
    border: 'border-gray-200 dark:border-gray-800/30',
    progress: 'bg-gray-500',
  },
}

export default function StatCard({
  title,
  value,
  maxValue = 100,
  trend = 'flat',
  trendValue = 0,
  icon = '📊',
  color = 'gray',
  showProgress = false,
  tooltip,
}: StatCardProps) {
  const colorClass = colorClasses[color]
  const progressPercent = Math.min((value / maxValue) * 100, 100)

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return '↗️'
      case 'down':
        return '↘️'
      case 'flat':
        return '→'
      default:
        return '→'
    }
  }

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600 dark:text-green-400'
      case 'down':
        return 'text-red-600 dark:text-red-400'
      case 'flat':
        return 'text-gray-500 dark:text-gray-400'
      default:
        return 'text-gray-500 dark:text-gray-400'
    }
  }

  const getTrendText = () => {
    if (trendValue === 0) return 'No change'
    return `${trend === 'up' ? '+' : ''}${trendValue}`
  }

  const CardContent = (
    <Card className={`p-6 border ${colorClass.bg} ${colorClass.border} hover:shadow-md transition-shadow duration-300`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h4>
        </div>
        {trendValue !== 0 && (
          <div className={`flex items-center gap-1 text-xs font-medium ${getTrendColor()}`}>
            <span>{getTrendIcon()}</span>
            <span>{getTrendText()}</span>
          </div>
        )}
      </div>

      <div className="flex items-end gap-2 mb-4">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{value}</h3>
        {maxValue && <span className="text-sm text-gray-500 dark:text-gray-400">/{maxValue}</span>}
      </div>

      {showProgress && (
        <div className="w-full">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-500 dark:text-gray-400">Progress</span>
            <span className="text-gray-900 dark:text-white font-medium">{Math.round(progressPercent)}%</span>
          </div>
          <Progress value={progressPercent} className={`h-2 ${colorClass.progress}`} />
        </div>
      )}
    </Card>
  )

  if (!tooltip) {
    return CardContent
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="cursor-pointer">{CardContent}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
