import React, { useState, useMemo, useCallback } from 'react';
import { PostCard } from '../../entities/post/ui/PostCard';
import { PostFilter } from '../../features/PostLengthFilter/filterByLength';
import { mockPosts } from './DefPostList';
import { Loading } from '../../shared/lib/hoc/Loading';
import { useGetPostsQuery } from '../../entities/api/postsApi';
import './PostList.css';

/*export const PostListP: React.FC = () => {
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
};*/

export const PostListP: React.FC = () => {
  const [maxTitleLength, setMaxTitleLength] = useState<number | null>(null);
  
  const { data: posts = [], isLoading, error } = useGetPostsQuery();

  const filteredPosts = useMemo(() => {
    console.log('Фильтрация постов...');
    const postsToFilter = posts.length > 0 ? posts : mockPosts;
    
    return maxTitleLength
      ? postsToFilter.filter((post) => post.title.length <= maxTitleLength)
      : postsToFilter;
  }, [maxTitleLength, posts]);

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

  if (isLoading) {
    return <div>Загрузка постов...</div>;
  }

  if (error) {
    return (
      <div className="post-list">
        <h2>Список постов</h2>
        <div style={{ color: 'red' }}>
          Ошибка при загрузке постов. Используются демо-данные.
        </div>
        <PostFilter onFilterChange={handleFilterChange} />
        {postList}
      </div>
    );
  }

  return (
    <div className="post-list">
      <h2>Список постов</h2>
      <PostFilter onFilterChange={handleFilterChange} />
      {postList}
    </div>
  );
};

const loadingCondition = () => {
  return false;
};

export const PostList = Loading(PostListP, loadingCondition);
