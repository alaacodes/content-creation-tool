import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getImageUrl } from '../../services/imageService';

const EditImage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(500);
    const [grayscale, setGrayscale] = useState(false);
    const [blur, setBlur] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (id) {
            setImageUrl(getImageUrl(id as string, width, height, grayscale, blur));
        }
    }, [id, width, height, grayscale, blur]);

    const handleDownload = () => {
        if (imageUrl) {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.setAttribute('download', `image_${id}.jpg`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="container">
            <h1>Edit Image</h1>
            <div className="edit-container">
                <img src={imageUrl} alt="Edited" />
                <div className="edit-options">
                    <label>
                        Width:<input
                            type="number"
                            value={width}
                            onChange={(e) => setWidth(Number(e.target.value))}
                        />
                    </label>
                    <label>
                        Height:<input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                        />
                    </label>
                    <label>
                        Greyscale:<input
                            type="checkbox"
                            checked={grayscale}
                            onChange={(e) => setGrayscale(e.target.checked)}
                        />
                    </label>
                    <label>
                        Blur: <input
                            type="range"
                            min="0"
                            max="10"
                            value={blur}
                            onChange={(e) => setBlur(Number(e.target.value))}
                        />
                    </label>
                    <button onClick={handleDownload} >Download</button>
                </div>
            </div>
        </div>
    );
};

export default EditImage;