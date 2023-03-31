img = "";

function preload(){
    img = loadImage("2.jpg");
}
function setup(){
    canvas = createCanvas(650, 500);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 650, 500);
    fill("#473527");
    text("Bathroom", 450, 100);
    noFill();
    stroke("#a7714f");
    rect(200, 120, 300, 350);
}

function back()
{
    window.location = "index.html";
}