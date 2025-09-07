const photoLayout = (() => {
    const showPhotos = (photos) => {
        const wrap = document.getElementById("photo-wrap");
        let text = ``;

        photos.forEach(({ download_url }) => {
            text += `
                <div class="image-div">
                    <img src="${download_url}">
                </div>
            `;
        });

        wrap.innerHTML = text;
    };

    return { showPhotos: showPhotos };
})();
