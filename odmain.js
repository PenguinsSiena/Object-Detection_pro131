img = "";

function preload(){
    img = loadImage("1.jpg");
}
function setup(){
    canvas = createCanvas(650, 500);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 650, 500);
    fill("#473527");
    text("Bed", 30, 100);
    noFill();
    stroke("#a7714f");
    rect(10, 120, 600, 350);
}

function back()
{
    window.location = "index.html";
}