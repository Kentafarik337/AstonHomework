import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { PostsPage } from '../../../pages/PostPage';
import { PostID } from '../../../pages/PostID';
import { UserAlbums } from '../../../pages/UserAlbums';
import { UserPosts } from '../../../pages/UserPosts';
import { UserTodos } from '../../../pages/UserToDO';
import { AlbumPhotos } from '../../../pages/AlbomPhotos';
export const AppRouter = () => {
  return (
    <Routes>
    <Route path="/posts" element={<PostsPage />} />
    <Route path="/posts/:id" element={<PostID/>} />
    <Route path='/users/:userId/albums' element={<UserAlbums/>} />
    <Route path='/users/:userId/posts' element={<UserPosts/>} />
    <Route path='/users/:userId/todos' element={<UserTodos/>} />
    <Route path='/albums/:albumId/photos' element={<AlbumPhotos/>} />
    </Routes>
  );
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <AppRouter />
    </BrowserRouter>
  );
};