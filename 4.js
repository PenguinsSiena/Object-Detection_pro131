img = "";

function preload(){
    img = loadImage("4.jpg");
}
function setup(){
    canvas = createCanvas(550, 500);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 550, 500);
    fill("#473527");
    text("Closet", 400, 40);
    noFill();
    stroke("#473527");
    rect(80, 50, 450, 430);
}

function back()
{
    window.location = "index.html";
}