import React from 'react';
import './PostCard.css';
import { CommentList } from '../../../widgets/CommentList/ui/CommetnList';
import { UserTabs } from '../../../widgets/UserTabs/UserTabs';

export interface BasePost {
  id: number;
  title: string;
  body: string;
  iduser: number;
}

interface PostCardProps<T extends BasePost> {
  post: T;
  renderExtra?: (post: T) => React.ReactNode;
}

export const PostCard = <T extends BasePost>({ post, renderExtra }: PostCardProps<T>): React.ReactElement => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Юзер номер {post.iduser}</p>
      <UserTabs userId={post.iduser} />
      <CommentList postId={post.id} />
      <div className="post-meta">
        <span>ID: {post.id}</span>
        {renderExtra && renderExtra(post)}
      </div>
    </div>
  );
};