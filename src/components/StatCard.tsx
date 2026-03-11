'use client'

import { Card } from '@/components/ui/card'

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
    bg: 'bg-red-50',
    text: 'text-red-600',
    border: 'border-red-200',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-200',
  },
  yellow: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-600',
    border: 'border-yellow-200',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200',
  },
  gray: {
    bg: 'bg-gray-50',
    text: 'text-gray-600',
    border: 'border-gray-200',
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
        return 'text-green-600'
      case 'down':
        return 'text-red-600'
      case 'flat':
        return 'text-gray-500'
      default:
        return 'text-gray-500'
    }
  }

  const getTrendText = () => {
    if (trendValue === 0) return 'No change'
    return `${trend === 'up' ? '+' : ''}${trendValue}`
  }

  return (
    <Card className={`p-6 border ${colorClass.bg} ${colorClass.border} hover:shadow-md transition-shadow duration-300`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <h4 className="text-sm font-medium text-gray-500">{title}</h4>
        </div>
        {trendValue !== 0 && (
          <div className={`flex items-center gap-1 text-xs font-medium ${getTrendColor()}`}>
            <span>{getTrendIcon()}</span>
            <span>{getTrendText()}</span>
          </div>
        )}
      </div>

      <div className="flex items-end gap-2 mb-4">
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        {maxValue && <span className="text-sm text-gray-500">/{maxValue}</span>}
      </div>

      {showProgress && (
        <div className="w-full">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-500">Progress</span>
            <span className="text-gray-900 font-medium">{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}
    </Card>
  )
}
