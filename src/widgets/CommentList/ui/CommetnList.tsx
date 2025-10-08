import React, { useState, useCallback } from 'react';

interface Comment {
  id: number;
  text: string;
}

interface CommentListProps {
  postId: number;
}

export const CommentList: React.FC<CommentListProps> = () => {
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
};
