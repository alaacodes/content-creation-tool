import axios from 'axios';

const BASE_URL = 'https://picsum.photos/v2';

export const fetchImages = async (page: number, limit: number) => {
    const response = await axios.get(`${BASE_URL}/list`, {
        params: {
            page,
            limit,
        },
    });
    return response.data;
};

export const getImageUrl = (id: string, width: number, height: number, grayscale: boolean, blur: number) => {
    let url = `https://picsum.photos/id/${id}/${width}/${height}`;
    if (grayscale) {
        url += '?grayscale';
    }
    if (blur) {
        url += `${grayscale ? '&' : '?'}blur=${blur}`;
    }
    return url;
};
