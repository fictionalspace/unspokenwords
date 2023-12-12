const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
let img1, img2, img3, img4;
let keywordToImage = {
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
  sadangry: [
    {file: "sad_(1).jpg", chance: 12.5},
    {file: "sad_(2).jpg", chance: 12.5},
    {file: "sad_(3).jpg", chance: 12.5},
    {file: "sad_(4).jpg", chance: 12.5},
    {file: "angry_(1).jpg", chance: 12.5},
    {file: "angry_(2).jpg", chance: 12.5},
    {file: "angry_(3).jpg", chance: 12.5},
    {file: "angry_(4).jpg", chance: 12.5},
],
angrydisgust: [
  {file: "angry_(1).jpg", chance: 11.1},
  {file: "angry_(2).jpg", chance: 11.1},
  {file: "angry_(3).jpg", chance: 11.1},
  {file: "angry_(4).jpg", chance: 11.1},
  {file: "digust_(1).jpg", chance: 11.1},
  {file: "digust_(2).jpg", chance: 11.1},
  {file: "digust_(3).jpg", chance: 11.1},
  {file: "digust_(4).jpg", chance: 11.1},
  {file: "digust_(5).jpg", chance: 11.1},
],
}
function startGame() {
  state = {}
  showTextNode(1)
}

function preload(){
  img1 = preloadImage('USW_intro_1.jpg');
  img2 = preloadImage('room.jpg');
  img3 = preloadImage('ghosty_1.png');
  img4 = preloadImage('ghosty_0.png');
}
function setup(){
  createCanvas (1389, 1080);
}

function showTextNode(textNodeIndex) {
  stopBackgroundTimer();
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  canvasElement.style.backgroundImage = `url('${textNode.background}')`;
  canvasElement.style.backgroundSize = 'cover';

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }



  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  });
  if (textNode.keywords) {
    startBackgroundTimer(textNode.keywords);
  }
}

function startBackgroundTimer(keywords) {
  backgroundTimer = setInterval(() => {
    // Change the background based on the keywords
    changeBackground(keywords);
  }, 5000); // Change the background every 5000 milliseconds (5 seconds)
}

function stopBackgroundTimer() {
  // Stop the background change timer
  clearInterval(backgroundTimer);
}

function changeBackground(keywords) {
  // Check if the keywords are defined in the keywordToImage object
  if (keywords && keywords.length > 0) {
    // Get a random keyword
    const randomKeyword = getRandomKeyword(keywords);

    // Get images associated with the keyword
    const images = keywordToImage[randomKeyword];

    // Get a random image based on the chances
    const backgroundImage = getRandomImage(images);

    // Set background image for the canvas
    canvasElement.style.backgroundImage = `url('${backgroundImage}')`;
    canvasElement.style.backgroundSize = 'cover';
  }
}

function getRandomKeyword(keywords) {
  // Get a random keyword from the array
  const randomIndex = Math.floor(Math.random() * keywords.length);
  return keywords[randomIndex];
}

function getRandomImage(images) {
  // Calculate total chances
  const totalChances = images.reduce((total, img) => total + img.chance, 0);

  // Generate a random number between 0 and totalChances
  const randomChance = Math.random() * totalChances;

  // Find the image based on the random chance
  let cumulativeChances = 0;
  for (const img of images) {
    cumulativeChances += img.chance;
    if (randomChance <= cumulativeChances) {
      return img.file;
    }
  }
}



function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Click to meet',
    background: 'USW_intro_1.jpg',
    options: [
      {
        text: 'Meet',
        setState: { blueGoo: true },
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    text: 'As you awaken, you are agreed by a mysterious person within this empty realm. ',
    background: 'room.jpg',
    options: [
      {
        text: 'Hello',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Huh?',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: '.....',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Person:.......(You:"maybe you should say something..." "You appear to be...___"',
    background: 'ghosty_1.png',
    options: [
      {
        text: 'adorable',
        nextText: 4
      },
      {
        text: 'weird',
        nextText: 5
      },
      {
        text: '......',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'Person:.......(You:"looks like it stirred up something..." "You are...___"',
    background: 'room.jpg, happy_(1).jpg, happy_(1).jpg, happy_(2).jpg, happy_(3).jpg, happy_(4).jpg',
    keywords: ['happy'],
    options: [
      {
        text: 'amazing',
        nextText: 7
      },
      {
        text: 'revolting',
        nextText: 8
      },
      {
        text: 'interesting',
        nextText: 9
      }
    ]
  },
  {
    id: 5,
    text: 'Person:....(You:"looks like it stirred something..." "You are...___"',
    options: [
      {
        text: 'amazing',
        nextText: 7
      },
      {
        text: 'revolting',
        nextText: 8
      },
      {
        text: 'interesting',
        nextText: 9
      }
    ]
  },
  {
    id: 6,
    text: 'Person:.......',
    options: [
      {
        text: '.......',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'Person:.......<3(You:"they seem pleased..."".......___"',
    options: [
      {
        text: 'See you around',
        nextText: 10
      },
      {
        text: 'May we never meet again',
        requiredState: (currentState) => currentState.sword,
        nextText: 11
      },
      {
        text: '......waves',
        requiredState: (currentState) => currentState.shield,
        nextText: 12
      },
      {
        text: 'May I see you again',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 13
      }
    ]
  },
  {
    id: 8,
    text: 'Person:...............(You:"a storm seems to be brewing." "You are...___").',
    options: [
      {
        text: 'See you around',
        nextText: 10
      },
      {
        text: 'May we never meet again',
        requiredState: (currentState) => currentState.sword,
        nextText: 11
      },
      {
        text: '......waves',
        requiredState: (currentState) => currentState.shield,
        nextText: 12
      },
      {
        text: 'May I see you again',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 13
      }
    ]
  },
  {
    id: 9,
    text: 'Person:.....',
    options: [
      {
        text: 'See you around',
        nextText: 10
      },
      {
        text: 'May we never meet again',
        requiredState: (currentState) => currentState.sword,
        nextText: 11
      },
      {
        text: '......waves',
        requiredState: (currentState) => currentState.shield,
        nextText: 12
      },
      {
        text: 'May I see you again',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 13
      }
    ]
  },
  {
    id: 10,
    text: 'Person:.....<3',
    options: [
      {
        text: 'Meet again',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Person:.....</3',
    options: [
      {
        text: 'Meet again.',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: 'Person:.....༄ ',
    options: [
      {
        text: 'Meet again.',
        nextText: -1
      }
    ]
  },
  {
    id: 13,
    text: 'Person:.....˙ᵕ˙',
    options: [
      {
        text: 'Meet again.',
        nextText: -1
      }
    ]
  }
]
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text;
  
  // Set background image
  document.body.style.backgroundImage = `url('${textNode.background}')`;

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

startGame()