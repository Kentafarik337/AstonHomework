import type { Post } from '../../entities/post/ui/PostCard';

export const mockPosts: Post[] = [
  {
    id: 1,
    title: 'О',
    body: 'Это пример поста для демонстрации работы компонентов 1.',
    iduser: 1,
  },
  {
    id: 2,
    title: 'ДД',
    body: 'Это пример поста для демонстрации работы компонентов 2.',
    iduser: 1,
  },
  {
    id: 3,
    title: 'ТРИ',
    body: 'Это пример поста для демонстрации работы компонентов 3.',
    iduser: 1,
  },
  {
    id: 4,
    title: 'ЧЧЧЧ',
    body: 'Это пример поста для демонстрации работы компонентов 3.',
    iduser: 2,
  }
];