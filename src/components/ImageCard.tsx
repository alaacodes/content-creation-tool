import React from 'react';
import Link from 'next/link';

interface ImageCardProps {
    id: string;
    author: string;
    url: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, author, url }) => {
    return (
        <div className="image-card">
            <img src={url} alt={author} />
            <p>{author}</p>
            <Link href={`/edit/${id}`}>Edit</Link>
        </div>
    );
};

export default ImageCard;
