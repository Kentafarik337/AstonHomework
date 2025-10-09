import { PostCard } from "../entities/post/ui/PostCard";
import React from 'react';
import { useParams } from 'react-router-dom';
import { mockPosts } from "../widgets/PostList/DefPostList";
import { Main } from '../widgets/UserTabs/UserTabs';

export const UserPosts: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    
    const userPosts = mockPosts.filter((p) => p.iduser === Number(userId));

    if (userPosts.length === 0) {
        return <div>У пользователя нет постов<Main></Main></div>;
    }

    return (
        <div>
            <h2>Посты пользователя</h2>
            <Main></Main>
            {userPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};