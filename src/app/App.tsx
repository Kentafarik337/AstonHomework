import React from 'react';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import { MainLayout } from '../shared/layouts/MainLayout';
import { PostList } from '../widgets/PostList/PostList';
import './App.css'


function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <PostList />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App
