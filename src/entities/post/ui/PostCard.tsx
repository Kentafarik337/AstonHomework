import React from 'react';
import './PostCard.css';
export interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="post-meta">
        <span>ID: {post.id}</span>
      </div>
    </div>
  );
};