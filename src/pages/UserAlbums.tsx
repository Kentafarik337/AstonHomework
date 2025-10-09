import { useParams,} from 'react-router-dom';
import { albums, type Album } from './UserDef';
import { UserTabs } from '../widgets/UserTabs/UserTabs';
import { AlbumTabs } from '../widgets/UserTabs/UserTabs';
import { Main } from '../widgets/UserTabs/UserTabs';

export const UserAlbums: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    
    const userAlbums = albums.filter((p) => p.userId === Number(userId));

    if (userAlbums.length === 0) {
        return <div>У пользователя нет альбомов <Main></Main></div>;
    }

    return (
        <div>
            <h2>Альбомы пользователя</h2>
            <Main></Main>
            <UserTabs userId={Number(userId)} />
            {userAlbums.map((album) => (
                <AlbumCard key={album.id} album={album} />
            ))}
        </div>
    );
};

const AlbumCard: React.FC<{ album: Album }> = ({ album }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h3>{album.title}</h3>
            <AlbumTabs albumId={Number(album.id)} />
            <p>ID альбома: {album.id}</p>
            <p>ID пользователя: {album.userId}</p>
        </div>
    );
};