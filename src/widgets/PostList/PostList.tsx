import React from 'react';
import { useState } from 'react';
import { PostCard } from '../../entities/post/ui/PostCard';
import { PostFilter } from '../../features/PostLengthFilter/filterByLength';
import { mockPosts } from './DefPostList';
import './PostList.css';

export const PostList: React.FC = () => {
  const [maxTitleLength, setMaxTitleLength] = useState<number | null>(null);

  const filteredPosts = maxTitleLength
    ? mockPosts.filter((post) => post.title.length <= maxTitleLength)
    : mockPosts;

  return (
    <div className="post-list">
      <h2>Список постов (заглушки)</h2>
      <PostFilter onFilterChange={setMaxTitleLength} />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p>Нет постов, соответствующих фильтру.</p>
      )}
    </div>
  );
};