import { useEffect, useState } from 'react';
import type { Post } from '../../entities/post/ui/PostCard';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => setError('Ошибка при загрузке постов'))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
};
