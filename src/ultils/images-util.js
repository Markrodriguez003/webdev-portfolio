

function getImageURL(name) {
    return new URL(`../assets/images/site-screenshots/responsive/${name}`, import.meta.url)
}


function getImageURLArray(images) {


    // ? [{ src: saseoA }, { src: saseoB }, { src: saseoC }]
    var slideShowImages = [];

    images.map((image) => {
        slideShowImages.push({ src: new URL(`../assets/images/site-screenshots/responsive/${image}`, import.meta.url) })
    })


    return slideShowImages;
}


export { getImageURL, getImageURLArray };