import { useParams } from 'react-router-dom';
import { photos, type Photo } from './UserDef';
import { Main } from '../widgets/UserTabs/UserTabs';
export const AlbumPhotos: React.FC = () => {
    const { albumId } = useParams<{ albumId: string }>();
    
    const albumPhotos = photos.filter((p) => p.albumId === Number(albumId));
    if (albumPhotos.length === 0) {
        return <div>В альбоме нет фотографий <Main></Main></div>;
    }

    return (
        <div>
            <h2>Фотографии альбома</h2>
            <Main></Main>
            {albumPhotos.map((photo) => (
                <PhotoCard key={photo.photoId} photo={photo} />
            ))}
        </div>
    );
};

const PhotoCard: React.FC<{ photo: Photo }> = ({ photo }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h3>{photo.title}</h3>
            <p>ID фотографии: {photo.photoId}</p>
            <p>ID альбома: {photo.albumId}</p>
        </div>
    );
};