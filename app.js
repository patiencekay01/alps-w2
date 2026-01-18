console.log("Hello world!")

const images = [
{
    src: "https://images.unsplash.com/photo-1593410012863-e4365ac4ead9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "View of the snowy mountains"
},
{
    src: "https://plus.unsplash.com/premium_photo-1736194027876-a658c5a1b5ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "An open fire indoor"
},
{
    src: "https://images.unsplash.com/photo-1691568809118-662c88b63862?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Lake Annecy in France"
},
{
    src: "https://images.unsplash.com/photo-1709508496457-e2f9c42493c6?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Chalets in the French Alps with a ski lift in the background"
}
]
const background = document.getElementById('background');


const imagesContainer = document.querySelector('.thumbnails');

function createThumbnails() {
   images.forEach(function (image) {
    const thumbnailImage = document.createElement('img');

    thumbnailImage.src = image.src;
    thumbnailImage.alt = image.alt;

    thumbnailImage.addEventListener('click', function() {
        fullBackgroundImage(image);
        console.log(image)
    })

    imagesContainer.append(thumbnailImage)
   }
) 
}

createThumbnails()

function fullBackgroundImage(theImage) {
    background.innerHTML = '';

    const theBackgroundImage = document.createElement('img')
    theBackgroundImage.src = theImage.src
    theBackgroundImage.alt = theImage.alt

    background.append(theBackgroundImage);
}


