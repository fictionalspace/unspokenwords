//let sceneCount = 0;
let gameState ="L1";
let button1, button2, button3, button4, button5, button6;
let a = [];
//let angry = 4;

let d = [];
//let disgust = 5;

let f = [];
//let fear = 5;

let h = [];
//let happy = 6;

let s = [];
//let sad = 4;

let su = [];
//let suprised = 6;
let randoImg;
//let randoImga;
//let randoImgd;
//let randoImgf;
//let randoImgh;
//let randoImgs;
//let randoImgsu;

function setup() {
    createCanvas (800, 600);
    textSize(20);
    
    button1 = createButton('Angry');
    button1.position(50, height - 50);
    button1.mousePressed(() => {
        //changeBackground(1);
        //image(randoImga, 0, 0);
        randoImg = random(a);
    });

    button2 = createButton('Disgust');
    button2.position(150, height - 50);
    button2.mousePressed(() => {
        //changeBackground(2);
        //image(randoImgd, 0, 0);
        randoImg = random(d);
    });

    button3 = createButton('Fear');
    button3.position(250, height - 50);
    button3.mousePressed(() => {
        //changeBackground(3);
        //image(randoImgf, 0, 0);
        randoImg = random(f);
    });

    button4 = createButton('Happy');
    button4.position(350, height - 50);
    button4.mousePressed(() => {
        //changeBackground(1);
        //image(randoImgh, 0, 0);
        randoImg = random(h);
    });

    button5 = createButton('Sad');
    button5.position(450, height - 50);
    button5.mousePressed(() => {
        //changeBackground(2);
        //image(randoImgs, 0, 0);
        randoImg = random(s);
    });

    button6 = createButton('Suprised');
    button6.position(550, height - 50);
    button6.mousePressed(() => {
        //changeBackground(3);
        randoImg = random(su);
    });
}

function preload() {
    a = [loadImage('angry_(1).jpg'), 
        loadImage('angry_(2).jpg'), 
        loadImage('angry_(3).jpg'), 
        loadImage('angry_(4).jpg')];
            //a = [a1, a2, a3, a4];
    d = [loadImage('disgust_(1).jpg'), 
        loadImage('disgust_(2).jpg'), 
        loadImage('disgust_(3).jpg'), 
        loadImage('disgust_(4).jpg'),
        loadImage('disgust_(5).jpg')];
            //d = [d1, d2, d3, d4, d5];
    f = [loadImage('fear_(1).jpg'), 
        loadImage('fear_(2).jpg'), 
        loadImage('fear_(3).jpg'), 
        loadImage('fear_(4).jpg'), 
        loadImage('fear_(5).jpg')];
            //f = [f1, f2, f3, f4, f5];
    h = [loadImage('happy_(1).jpg'), 
        loadImage('happy_(2).jpg'), 
        loadImage('happy_(3).jpg'), 
        loadImage('happy_(4).jpg'), 
        loadImage('happy_(5).jpg'), 
        loadImage('happy_(6).jpg')];
            //h = [h1, h2, h3, h4, h5, h6];
    s = [loadImage('sad_(1).jpg'), 
        loadImage('sad_(2).jpg'), 
        loadImage('sad_(3).jpg'), 
        loadImage('sad_(4).jpg')];
            //s = [s1, s2, s3, s4];
    su = [loadImage('suprised_(1).jpg'), 
        loadImage('suprised_(2).jpg'), 
        loadImage('suprised_(3).jpg'), 
        loadImage('suprised_(4).jpg'), 
        loadImage('suprised_(5).jpg'), 
        loadImage('suprised_(6).jpg')];
            //su = [su1, su2, su3, su4, su5, su6];

    
    h = [loadImage('happy_(1).jpg'), 
        loadImage('happy_(2).jpg'), 
        loadImage('happy_(3).jpg'), 
        loadImage('happy_(4).jpg'), 
        loadImage('happy_(5).jpg'), 
        loadImage('happy_(6).jpg')];
    
    randoImg = random(h);
    //randoImga = random(a);
    //randoImgd = random(d);
    //randoImgf = random(f);
    //randoImgh = random(h);
    //randoImgs = random(s);
    //randoImgsu = random(su);

        intro = loadImage('USW_intro_1.jpg');
        ghost0 = loadImage('ghosty_0.png');
        ghost1 = loadImage('ghosty_1.png');
        room = loadImage('room.jpg');
}
function mouseClicked(){
    if (gameState === "L1") {
        gameState = "L2";
      } else if (gameState === "L2") {
        gameState = "L3";
      }
    }
function draw() {
    if (gameState === "L1") {
        background(intro);
        text("Click to Begin", width / 2, 40);
      } else if (gameState === "L2") {
        background(room);
        text("Click one of the emotions to begin", width / 2, 40);
      } else if (gameState === "L3") {
        levelThree();
        image(ghost1);
        //image(randoImg, 0, 0);
      }
    }
    
function levelOne(){
    text("DEMO", width/2, height-20);
    }
    if(mouse = true){
        gameState = "L2"
    }
function levelTwo(){
    text("click to start somewhere", width/2, height- 20);
    }
function levelThree() {
    text("Testing", width / 2, height - 15);
    image(randoImg, 0, 0);

    // You can add additional code for the third scene here
    }
    
      
function changeBackground(option) {
        // Handle background change based on the selected option
    if (option === 1) {
            background(255, 0, 0); // Red background
    } else if (option === 2) {
            background(0, 255, 0); // Green background
    } else if (option === 3) {
            background(0, 0, 255); // Blue background
    }else if (option === 4) {
            background(0, 0, 255); // Blue background
    }else if (option === 5) {
        background(0, 0, 255); // Blue background
    }else if (option === 6) {
        background(0, 0, 255); // Blue background
    }

}
    