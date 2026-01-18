console.log("Hello world!")

const images = [
{
    src: "https://images.unsplash.com/photo-1593410012863-e4365ac4ead9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "View of the snowy mountains"
},
{
    src: "https://plus.unsplash.com/premium_photo-1685133855300-60d42d843c0a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "An open indoor fire" 
},
{
    src: "https://images.unsplash.com/photo-1691568809118-662c88b63862?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Lake Annecy in France"
},
{
    src: "https://images.unsplash.com/photo-1704548908637-b115b9f71ee8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Chalets in the French Alps"
}
]
const background = document.getElementById('background');

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

const imagesContainer = document.querySelector('.thumbnails');

const ariaNotifications = document.getElementById('ariaNotifications');

let currentIndex = 0;

function createThumbnails() {
   images.forEach(function (image) {
    const thumbnailImage = document.createElement('img');

    thumbnailImage.src = image.src;
    thumbnailImage.alt = image.alt;

    thumbnailImage.setAttribute('tabindex', '0');

    thumbnailImage.addEventListener('click', function() {
        fullBackgroundImage(image);
        console.log(image)
    })

    imagesContainer.append(thumbnailImage);
   })
   fullBackgroundImage(images[currentIndex]);

   leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    fullBackgroundImage(images[currentIndex]);
})
    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        fullBackgroundImage(images[currentIndex]);
    })
}

createThumbnails()

function fullBackgroundImage(theImage) {
    let existingImage = background.querySelector('img');

    if (!existingImage) {
        existingImage = document.createElement('img');
        background.appendChild(existingImage);
    }

    const theBackgroundImage = document.createElement('img');
    theBackgroundImage.src = theImage.src;
    theBackgroundImage.alt = theImage.alt;

    background.append(theBackgroundImage);

    ariaNotifications.textContent = `Background image changed to ${theImage.alt}`;
}



