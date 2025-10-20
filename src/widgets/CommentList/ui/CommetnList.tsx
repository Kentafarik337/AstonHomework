import React, { useState, useCallback } from 'react';
import { useGetCommentsByPostIdQuery } from '../../../entities/api/commentsApi';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentListProps {
  postId: number;
}

/*export const CommentList: React.FC<CommentListProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const comments: Comment[] = [
    { id: 1, text: 'Отличный пост!' },
    { id: 2, text: 'Спасибо за информацию!' },
    { id: 3, text: 'Жду продолжения!' },
    { id: 4, text: 'УРА УРА' },
  ];

  const toggleComments = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="comment-list">
      <button onClick={toggleComments}>
        {isOpen ? 'Скрыть комментарии' : 'Показать комментарии'}
      </button>

      {isOpen && (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};*/
export const CommentList: React.FC<CommentListProps> = ({ postId }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Используем хук для загрузки комментариев
  const { 
    data: comments = [], 
    isLoading, 
    error 
  } = useGetCommentsByPostIdQuery(postId, {
    // Загружаем комментарии только когда они открыты
    skip: !isOpen
  });

  const toggleComments = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="comment-list">
      <button onClick={toggleComments}>
        {isOpen ? 'Скрыть комментарии' : 'Показать комментарии'}
      </button>

      {isOpen && (
        <div>
          {isLoading && <p>Загрузка комментариев...</p>}
          
          {error && (
            <p className="error">
              Ошибка при загрузке комментариев: 
              {'status' in error ? `Status: ${error.status}` : 'Unknown error'}
            </p>
          )}
          
          {!isLoading && !error && (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};