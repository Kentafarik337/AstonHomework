import React, { useState, useMemo, useCallback } from 'react';
import { PostCard } from '../../entities/post/ui/PostCard';
import { PostFilter } from '../../features/PostLengthFilter/filterByLength';
import { mockPosts } from './DefPostList';
import { Loading } from '../../shared/lib/hoc/Loading';
import './PostList.css';

export const PostListP: React.FC = () => {
  const [maxTitleLength, setMaxTitleLength] = useState<number | null>(null);

  const filteredPosts = useMemo(() => {
    console.log('Фильтрация постов...');
    return maxTitleLength
      ? mockPosts.filter((post) => post.title.length <= maxTitleLength)
      : mockPosts;
  }, [maxTitleLength]);

  const handleFilterChange = useCallback((value: number | null) => {
    setMaxTitleLength(value);
  }, []);

  const postList = useMemo(() => {
    if (filteredPosts.length === 0) {
      return <p>Нет постов, соответствующих фильтру.</p>;
    }

    return filteredPosts.map((post) => (
      <PostCard key={post.id} post={post} />
    ));
  }, [filteredPosts]);

  return (
    <div className="post-list">
      <h2>Список постов (заглушки)</h2>
      <PostFilter onFilterChange={handleFilterChange} />
      {postList}
    </div>
  );
};

const loadingCondition = () => {
  return false;
};

export const PostList = Loading(PostListP, loadingCondition);
