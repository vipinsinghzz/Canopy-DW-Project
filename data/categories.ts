import { Category } from './resources';

export interface CategoryItem {
  name: Category;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: CategoryItem[] = [
  {
    name: 'Focus & Productivity',
    slug: 'Focus & Productivity',
    description: 'Task managers, gamified timers and distraction blockers to help you study without interruption.',
    icon: 'Target',
    color: 'emerald',
  },
  {
    name: 'Screen-Time Management',
    slug: 'Screen-Time Management',
    description: 'Tools that show how long you use your phone and let you set daily limits or change your home screen.',
    icon: 'Clock',
    color: 'blue',
  },
  {
    name: 'Mental Wellness',
    slug: 'Mental Wellness',
    description: 'Self-care habit apps that use goals, check-ins and gentle rewards to support daily wellbeing routines.',
    icon: 'Heart',
    color: 'rose',
  },
  {
    name: 'Notifications & Sleep',
    slug: 'Notifications & Sleep',
    description: 'Built-in and third-party tools to silence interruptions, filter alerts and protect sleep time.',
    icon: 'BellOff',
    color: 'violet',
  },
];
