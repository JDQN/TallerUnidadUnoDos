const unsplashUrl = "https://api.unsplash.com/photos/random?client_id=***123 gMuf0PqG06zMY3QpcwXPhvMC95X3jkFXHdqxeFbtLBE";
const pexelsUrl = "https://api.pexels.com/v1/curated?per_page=15&page=1";
const accessKey = "***123 jnBscpMU61aOWLUVNyF4AaBkd4j4Uq2Bha7QNBcdb8iFlX6TL0856P5v";
let imageList = [];



function getImages() {
   fetch(unsplashUrl)
      .then(response => response.json())
      .then(data => {
         let image = {
            url: data.urls.regular,
            alt: data.alt_description
         };
         imageList.push(image);
         displayImage(image);
      })
      .catch(error => {
         console.error(error);
         fetchPexels();
      });
}

function fetchPexels() {
   fetch(pexelsUrl, {
      headers: {
         Authorization: accessKey
      }
   })
      .then(response => response.json())
      .then(data => {
         data.photos.forEach(photo => {
            let image = {
               url: photo.src.large,
               alt: photo.photographer
            };
            imageList.push(image);
         });
         displayImage(imageList[Math.floor(Math.random() * imageList.length)]);
      })
      .catch(error => {
         console.error(error);
      });
}

function displayImage(image) {
   const imgContainer = document.getElementById("image-container");
   imgContainer.innerHTML = `<img src="${image.url}" alt="${image.alt}">`;
}

getImages();
