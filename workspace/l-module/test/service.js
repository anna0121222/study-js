// https://picsum.photos/v2/list
const photoService = (() => {
    const getPhotos = async (callback, page = 1) => {
        const response = await fetch("https://picsum.photos/v2/list");
        const photos = await response.json();

        const rowSize = 10;
        const end = page * rowSize;
        const start = end - rowSize + 1;

        if (callback) {
            callback(photos.slice(start - 1, end));
        }
    };

    return { getPhotos: getPhotos };
})();
