import React from 'react';
import { PostCard } from '../../entities/post/ui/PostCard';
import type { Post } from '../../entities/post/ui/PostCard';
import './PostList.css';

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Первый пост-заглушка',
    body: 'Это пример поста для демонстрации работы компонентов 1.',
  },
  {
    id: 2,
    title: 'Второй пост-заглушка',
    body: 'Это пример поста для демонстрации работы компонентов 2.',
  },
  {
    id: 3,
    title: 'Второй пост-заглушка',
    body: 'Это пример поста для демонстрации работы компонентов 3.',
  }
];

export const PostList: React.FC = () => {
  return (
    <div className="post-list">
      <h2>Список постов (заглушки)</h2>
      {mockPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};