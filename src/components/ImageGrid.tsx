import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import { fetchImages } from '../services/imageService';
import { paginate } from '../utils/pagination';

const ImageGrid: React.FC = () => {
    const [allImages, setAllImages] = useState<any[]>([]);
    const [images, setImages] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(12);

    useEffect(() => {
        const loadImages = async () => {
            const data = await fetchImages(1, 300); // Fetch all images (assuming 100 is the total number)
            setAllImages(data);
            setImages(paginate(data, limit, page));
        };
        loadImages();
    }, []);

    useEffect(() => {
        setImages(paginate(allImages, limit, page));
    }, [page, allImages, limit]);

    return (
        <>
            <div className="image-grid">
                {images.map((image: any) => (
                    <ImageCard
                        key={image.id}
                        id={image.id}
                        author={image.author}
                        url={`https://picsum.photos/id/${image.id}/200/200`}
                    />
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                {Array.from({ length: Math.ceil(allImages.length / limit) }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        className={page === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
                <button onClick={() => setPage(page + 1)} disabled={page === Math.ceil(allImages.length / limit)}>Next</button>
            </div>
        </>
    );
};

export default ImageGrid;