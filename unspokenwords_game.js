//Get all the images
image_array = [
    'angry_(1).jpg',
    'angry_(2).jpg',
    'angry_(3).jpg',
    'angry_(4).jpg',
    
    'disgust_(1).jpg',
    'disgust_(2).jpg',
    'disgust_(3).jpg',
    'disgust_(4).jpg',
    'disgust_(5).jpg',

    'fear_(1).jpg',
    'fear_(2).jpg',
    'fear_(3).jpg',
    'fear_(4).jpg',
    'fear_(5).jpg',

    'happy_(1).jpg',
    'happy_(2).jpg',
    'happy_(3).jpg',
    'happy_(4).jpg',
    'happy_(5).jpg',
    'happy_(6).jpg',
     
    'sad_(1).jpg',
    'sad_(2).jpg',
    'sad_(3).jpg',
    'sad_(4).jpg',

    'suprised_(1).jpg',
    'suprised_(2).jpg',
    'suprised_(3).jpg',
    'suprised_(4).jpg',
    'suprised_(5).jpg',
    'suprised_(6).jpg',
]


function get_random_image(){
    //get random image
    random_index = Math.floor(Math.random() * image_array.length);
    
    //Get an image at the random_index
    selected_image = image_array[random_index]

    //display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
}