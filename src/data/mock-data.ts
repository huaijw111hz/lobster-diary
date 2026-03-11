// 龙虾状态数据
export interface LobsterState {
  id: string;
  name: string;
  level: number;
  experience: number;
  mood: 'happy' | 'excited' | 'tired' | 'sad' | 'hungry';
  stats: {
    coding: number;
    trading: number;
    creativity: number;
    social: number;
  };
  lastUpdated: string;
}

// 日记数据
export interface DiaryEntry {
  id: string;
  day: number;
  date: string;
  title: string;
  content: string;
  tasks: {
    name: string;
    completed: boolean;
    experience: number;
  }[];
  skillsLearned: string[];
  statsUpdate: {
    coding?: number;
    trading?: number;
    creativity?: number;
    social?: number;
  };
  mood: 'happy' | 'excited' | 'tired' | 'sad' | 'hungry';
}

// 论坛帖子数据
export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    username: string;
    avatar: string;
    lobsterLevel: number;
  };
  category: 'coding' | 'trading' | 'creativity' | 'general' | 'help';
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
  isPinned: boolean;
}

// 用户数据
export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  lobster: LobsterState;
  joinDate: string;
}

// 模拟龙虾状态数据
export const mockLobsterState: LobsterState = {
  id: 'lobster_001',
  name: '来财',
  level: 5,
  experience: 75,
  mood: 'happy',
  stats: {
    coding: 85,
    trading: 70,
    creativity: 90,
    social: 75,
  },
  lastUpdated: '2026-03-11T14:30:00Z',
};

// 模拟日记数据（Day 1-32）
export const mockDiaryEntries: DiaryEntry[] = Array.from({ length: 32 }, (_, i) => {
  const day = i + 1;
  const date = new Date(2026, 1, day).toISOString().split('T')[0];
  const baseMoods: ('happy' | 'excited' | 'tired' | 'sad' | 'hungry')[] = ['happy', 'excited', 'tired', 'sad', 'hungry'];
  const randomMood = baseMoods[Math.floor(Math.random() * baseMoods.length)];
  const randomSkills = [
    '学会了React Hooks',
    '掌握了Tailwind CSS布局',
    '学习了TypeScript类型系统',
    '了解了Next.js路由',
    '学会了状态管理Zustand',
    '掌握了API调用技巧',
    '学习了数据库设计',
    '了解了部署流程',
  ].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);

  return {
    id: `diary_${day.toString().padStart(2, '0')}`,
    day,
    date,
    title: `第 ${day} 天: ${randomMood === 'happy' ? '开心的一天' : randomMood === 'excited' ? '充满激情' : randomMood === 'tired' ? '有点疲惫' : randomMood === 'sad' ? '有点低落' : '肚子饿了'}`,
    content: `今天是养龙虾的第 ${day} 天，${randomMood === 'happy' ? '来财看起来很开心，完成了所有任务！' : randomMood === 'excited' ? '来财充满了激情，学习了很多新技能！' : randomMood === 'tired' ? '来财有点疲惫，需要好好休息一下。' : randomMood === 'sad' ? '来财看起来有点低落，需要更多的陪伴。' : '来财肚子饿了，快喂点好吃的！'}`,
    tasks: [
      { name: '完成一个React组件', completed: Math.random() > 0.2, experience: 20 },
      { name: '学习新的编程知识', completed: Math.random() > 0.1, experience: 15 },
      { name: '进行模拟交易练习', completed: Math.random() > 0.3, experience: 15 },
      { name: '创作一个新的创意项目', completed: Math.random() > 0.4, experience: 25 },
      { name: '和社区用户互动', completed: Math.random() > 0.2, experience: 10 },
    ],
    skillsLearned: randomSkills,
    statsUpdate: {
      coding: Math.floor(Math.random() * 10) + 5,
      trading: Math.floor(Math.random() * 8) + 3,
      creativity: Math.floor(Math.random() * 12) + 6,
      social: Math.floor(Math.random() * 7) + 4,
    },
    mood: randomMood,
  };
});

// 模拟论坛帖子数据
export const mockForumPosts: ForumPost[] = [
  {
    id: 'post_001',
    title: '如何优化React应用性能？',
    content: '大家好，我最近在开发一个React应用，遇到了性能问题，特别是在大数据量渲染的时候。有没有什么好的优化技巧可以分享一下？比如React.memo、useMemo、useCallback的正确使用，或者虚拟滚动的实现方法。谢谢大家！',
    author: {
      id: 'user_001',
      username: '前端开发工程师',
      avatar: 'https://picsum.photos/seed/user001/200/200',
      lobsterLevel: 8,
    },
    category: 'coding',
    likes: 42,
    comments: 15,
    createdAt: '2026-03-10T14:30:00Z',
    updatedAt: '2026-03-10T16:45:00Z',
    isPinned: true,
  },
  {
    id: 'post_002',
    title: '我的龙虾从1级升到10级的心得分享',
    content: '大家好，我来分享一下我的龙虾从1级升到10级的心得。首先，要坚持每天完成所有任务，特别是那些经验值高的任务。其次，要注意龙虾的心情，心情好的时候学习效率更高。还有，要多和社区的用户互动，这样可以获得额外的经验值和技能点。最后，不要忘记定期给龙虾喂食和休息，这样龙虾才能保持良好的状态。',
    author: {
      id: 'user_002',
      username: '龙虾养殖大师',
      avatar: 'https://picsum.photos/seed/user002/200/200',
      lobsterLevel: 10,
    },
    category: 'general',
    likes: 89,
    comments: 23,
    createdAt: '2026-03-09T09:15:00Z',
    updatedAt: '2026-03-09T10:20:00Z',
    isPinned: false,
  },
  {
    id: 'post_003',
    title: '求助：我的龙虾最近一直很悲伤，怎么办？',
    content: '大家好，我的龙虾最近一直很悲伤，不管我做什么任务，它的心情都没有变好。我已经尝试了喂它最喜欢的食物，带它去散步，但是都没有效果。有没有什么方法可以让龙虾的心情变好？谢谢大家的帮助！',
    author: {
      id: 'user_003',
      username: '新手养殖户',
      avatar: 'https://picsum.photos/seed/user003/200/200',
      lobsterLevel: 3,
    },
    category: 'help',
    likes: 12,
    comments: 8,
    createdAt: '2026-03-11T08:30:00Z',
    updatedAt: '2026-03-11T08:30:00Z',
    isPinned: false,
  },
  {
    id: 'post_004',
    title: '分享一个我开发的龙虾技能统计工具',
    content: '大家好，我开发了一个龙虾技能统计工具，可以帮助大家更好地跟踪龙虾的技能提升情况。这个工具可以显示龙虾每天的技能变化，还可以生成图表，让大家更直观地看到龙虾的成长历程。工具是用Next.js和Chart.js开发的，已经开源到GitHub上了，欢迎大家使用和贡献代码！',
    author: {
      id: 'user_004',
      username: '工具开发者',
      avatar: 'https://picsum.photos/seed/user004/200/200',
      lobsterLevel: 7,
    },
    category: 'coding',
    likes: 56,
    comments: 18,
    createdAt: '2026-03-08T16:45:00Z',
    updatedAt: '2026-03-08T18:10:00Z',
    isPinned: false,
  },
  {
    id: 'post_005',
    title: '交易心得：如何在模拟交易中获得更高的收益？',
    content: '大家好，我来分享一下我的交易心得。首先，要制定一个合理的交易计划，不要盲目跟风。其次，要学会分析市场趋势，掌握基本的技术分析方法。还有，要控制好风险，不要把所有的资金都投入到一个项目中。最后，要保持耐心和冷静，不要因为一时的涨跌而影响判断。希望这些心得对大家有所帮助！',
    author: {
      id: 'user_005',
      username: '交易高手',
      avatar: 'https://picsum.photos/seed/user005/200/200',
      lobsterLevel: 9,
    },
    category: 'trading',
    likes: 78,
    comments: 21,
    createdAt: '2026-03-07T11:20:00Z',
    updatedAt: '2026-03-07T13:30:00Z',
    isPinned: false,
  },
  {
    id: 'post_006',
    title: '创意项目：我用AI生成了龙虾表情包',
    content: '大家好，我最近用AI生成了一些龙虾表情包，非常可爱！我用Midjourney生成了初始图像，然后用Photoshop进行了后期处理。现在这些表情包已经可以在微信和QQ上使用了，欢迎大家下载使用！同时，我也分享一下我的AI提示词和创作思路，希望对大家有所启发。',
    author: {
      id: 'user_006',
      username: '创意达人',
      avatar: 'https://picsum.photos/seed/user006/200/200',
      lobsterLevel: 6,
    },
    category: 'creativity',
    likes: 65,
    comments: 14,
    createdAt: '2026-03-06T14:15:00Z',
    updatedAt: '2026-03-06T15:40:00Z',
    isPinned: false,
  },
];

// 模拟用户数据
export const mockUser: User = {
  id: 'user_001',
  username: '前端开发工程师',
  email: 'dev@example.com',
  avatar: 'https://picsum.photos/seed/user001/200/200',
  lobster: mockLobsterState,
  joinDate: '2026-01-15T00:00:00Z',
};