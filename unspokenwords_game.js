//Unspoken Words Demo
let currentSceneIndex = 0;
let backgroundTimer;
//Get all the images
const keywordToImage = {
    angry: [
        {file: "angry_(1).jpg", chance: 25},
        {file: "angry_(2).jpg", chance: 25},
        {file: "angry_(3).jpg", chance: 25},
        {file: "angry_(4).jpg", chance: 25},
    ],
    disgust: [
        {file: "digust_(1).jpg", chance: 20},
        {file: "digust_(2).jpg", chance: 20},
        {file: "digust_(3).jpg", chance: 20},
        {file: "digust_(4).jpg", chance: 20},
        {file: "digust_(5).jpg", chance: 20},
    ],
    fear: [
        {file: "fear_(1).jpg", chance: 20},
        {file: "fear_(2).jpg", chance: 20},
        {file: "fear_(3).jpg", chance: 20},
        {file: "fear_(4).jpg", chance: 20},
        {file: "fear_(5).jpg", chance: 20},
    ],
    happy: [
        {file: "happy_(1).jpg", chance: 16.67},
        {file: "happy_(2).jpg", chance: 16.67},
        {file: "happy_(3).jpg", chance: 16.67},
        {file: "happy_(4).jpg", chance: 16.67},
        {file: "happy_(5).jpg", chance: 16.67},
        {file: "happy_(6).jpg", chance: 16.67},
    ],
    sad: [
        {file: "sad_(1).jpg", chance: 25},
        {file: "sad_(2).jpg", chance: 25},
        {file: "sad_(3).jpg", chance: 25},
        {file: "sad_(4).jpg", chance: 25},
    ],
    suprised: [
        {file: "suprised_(1).jpg", chance: 16.67},
        {file: "suprised_(2).jpg", chance: 16.67},
        {file: "suprised_(3).jpg", chance: 16.67},
        {file: "suprised_(4).jpg", chance: 16.67},
        {file: "suprised_(5).jpg", chance: 16.67},
        {file: "suprised_(6).jpg", chance: 16.67},
    ],
}
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

    'USW_intro.jpg',
    'ghosty_0.png',
    'ghosty_1.png',
]

const scenes = [
  { type: "start", text: "Let's begin." },
  { text: "You find yourself in a mysterious room.", choices: ["Explore the room", "Open the door"] },
  { text: "You discover a key on the table.", choices: ["Take the key", "Ignore the key"] },
  { text: "The door is locked. What will you do?", choices: ["Use the key", "Look for another way"] },
  { text: "You unlock the door and find a garden outside.", choices: ["Explore the garden", "Go back inside"] },
];

function get_random_image(){
    //get random image
    random_index = Math.floor(Math.random() * image_array.length);
    
    //Get an image at the random_index
    selected_image = image_array[random_index]

    //display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
}

function preload() {
  image_array.forEach(image => loadImage(`./images/${image}`));
}

function setup() {
  createCanvas(1389, 1080);
}

function startGame() {
  let startPage = document.getElementById("start-page");
  let gameContainer = document.getElementById("game-container");

  startPage.style.display = "none";
  gameContainer.style.display = "block";

  updateBackground(image_array);
  updateScene();
}

function updateBackground(backgroundImages) {
  let index = 0;
  backgroundTimer = setInterval(() => {
    const backgroundContainer = document.getElementById("background-container");
    backgroundContainer.style.backgroundImage = `url('./images/${backgroundImages[index]}')`;
    index = (index + 1) % backgroundImages.length;
  }, 5000); // Change background every 5 seconds
}

function updateScene() {
  const sceneContainer = document.getElementById("scene-container");
  const choicesContainer = document.getElementById("choices-container");
  const dialogueContainer = document.getElementById("dialogue-container");

  let currentScene = scenes[currentSceneIndex];

  sceneContainer.innerHTML = `<p>${currentScene.text}</p>`;
  choicesContainer.innerHTML = "";

  if (currentScene.choices) {
    currentScene.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => makeChoice(index);
      choicesContainer.appendChild(button);
    });
  }
}

function getRandomImage(keyword) {
  const images = keywordToImage[keyword];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function updateImage(keyword) {
  const imageContainer = document.getElementById("image-container");
  const randomImage = getRandomImage(keyword);
  imageContainer.style.backgroundImage = `url('./images/${randomImage}')`;
}

function makeChoice(choiceIndex) {
  const currentScene = scenes[currentSceneIndex];

  if (currentScene.choices) {
    const nextSceneIndex = scenes[currentSceneIndex].choices[choiceIndex];

    if (nextSceneIndex !== undefined && scenes[nextSceneIndex]) {
      currentSceneIndex = nextSceneIndex;
      updateScene();

      if (currentSceneIndex === scenes.length - 1) {
        clearInterval(backgroundTimer);
      }
    } else {
      alert("The end of the story. Thanks for playing!");
    }
  }
}


