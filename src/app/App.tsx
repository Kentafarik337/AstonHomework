import React from 'react';
import { MainLayout } from '../shared/layouts/MainLayout';
import { PostList } from '../widgets/PostList/PostList';
import './App.css'


function App() {
  return (
    <MainLayout>
      <PostList />
    </MainLayout>
  );
}

export default App
