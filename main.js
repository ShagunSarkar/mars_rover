canvas = document.getElementById('myCanvas');
ctx  = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";
rover_image  = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {

    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadRover;
    rover_imgtag.src = rover_image;

}

function uploadBackground(){

    ctx.drawImage( background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){

    ctx.drawImage( rover_imgtag, 0, 0, rover_width, rover_height);
}  

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;

    if(keyPressed == '38'){
        up();
    }
    if(keyPressed == '39'){
        right();
    }
    if(keyPressed == '40'){
     down();
    }
    if(keyPressed == '37'){
        left();
    }
}
function up(){
    if(rover_y >= 0 ){
        rover_y = rover_y - 10;
        console.log( "When up is clicked x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log(" when down is clicked x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log( "when left is clicked x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log( "when right is clicked x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}