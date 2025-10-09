import { PostCard} from "../entities/post/ui/PostCard";
import React from 'react';
import { useParams } from 'react-router-dom';
import { mockPosts } from "../widgets/PostList/DefPostList";
export const PostID: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = mockPosts.find((p) => p.id === Number(id));
    if (!post){
        return <div>Поста нет</div>
    }
    return (
        <PostCard key={post.id} post={post} />
    )
};