const button = document.getElementById("get-photos");

button.addEventListener("click", (e) => {
    photoService.getPhotos(photoLayout.showPhotos, 1);
});
