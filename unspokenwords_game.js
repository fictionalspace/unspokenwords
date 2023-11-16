//Get all the images
image_array = [
    'angry_(1).jpg',
    'disgust_(1).jpg',
    'fear_(1).jpg',
    'happy_(1).jpg',
    'sad_(1).jpg',
    'suprised_(1).jpg',
]

function get_random_image(){
    //get random image
    random_index = Math.floor(Math.random() * image_array.length);
    
    //Get an image at the random_index
    selected_image = image_array[random_index]

    //display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
}