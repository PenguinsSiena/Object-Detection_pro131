img = "";

function preload(){
    img = loadImage("3.jpg");
}
function setup(){
    canvas = createCanvas(650, 500);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 650, 500);
    fill("#473527");
    text("Oven", 70, 60);
    noFill();
    stroke("#a7714f");
    rect(70, 65, 500, 400);
}

function back()
{
    window.location = "index.html";
}