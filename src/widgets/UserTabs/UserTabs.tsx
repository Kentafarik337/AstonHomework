import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

interface UserTabsProps {
  userId?: number;
}

export const UserTabs: React.FC<UserTabsProps> = ({ userId }) => {
  const { id } = useParams();
  const currentUserId = userId || id;

  return (
    <div className="user-tabs">
      <NavLink to={`/users/${currentUserId}/posts`} className={({ isActive }) => isActive ? 'active' : ''}>
        Посты
      </NavLink>
      <NavLink to={`/users/${currentUserId}/albums`} className={({ isActive }) => isActive ? 'active' : ''}>
        Альбомы
      </NavLink>
      <NavLink to={`/users/${currentUserId}/todos`} className={({ isActive }) => isActive ? 'active' : ''}>
        Задачи
      </NavLink>
    </div>
  );
};

interface AlbumTabsProps {
  albumId: number
}
export const AlbumTabs: React.FC<AlbumTabsProps> = ({ albumId }) => {
    const { id } = useParams();
  const currentAlbomId = albumId || id;
  return (
    <div className="user-tabs">
      <NavLink to={`/albums/${currentAlbomId}/photos`} className={({ isActive }) => isActive ? 'active' : ''}>
      фото
      </NavLink>
    </div>
  );
};


export const Main: React.FC = () => {
  return (
        <div className="Main">
      <NavLink to={`/posts`} className={({ isActive }) => isActive ? 'active' : ''}>
      Главная страница
      </NavLink>
    </div>
  )
};