import React from 'react';
import { PostList } from '../widgets/PostList/PostList';
import { MainLayout } from '../shared/layouts/MainLayout';

export const PostsPage: React.FC = () => {
  return (
    <MainLayout>
      <PostList />
    </MainLayout>
  );
};